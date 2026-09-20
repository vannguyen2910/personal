import Chart from 'chart.js/auto'
import { jsPDF } from 'jspdf'
import {
  SKILLS, BEHAVIOURS, SKILL_RESOURCES, DIRECTIONS, TARGET_LEVELS, LEVEL_NAMES, TOTAL_Q, PROGRAMS,
} from './data.js'

// ── STATE ────────────────────────────────────────────────────────
const STORAGE_KEY = 'winnie_assessment_v4';
let state = { name:'', email:'', experience:'', target:'', skills:{}, behaviours:{}, directions:[], deprioritised:[], notes:{} };
let questionIndex = 0;
let currentScreenId = 'screen-0';

function saveState() {
  state.name       = document.getElementById('inputName').value;
  state.email      = document.getElementById('inputEmail').value;
  state.experience = document.getElementById('inputExperience').value;
  state.target     = document.getElementById('inputTarget').value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, questionIndex }));
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return false;
    const p = JSON.parse(saved);
    state = { ...state, ...p };
    if (p.questionIndex !== undefined) questionIndex = p.questionIndex;
    return true;
  } catch(e) { return false; }
}

// ── SHAREABLE RESULTS LINK ──────────────────────────────────────
// Packs the finished results into a URL-safe code (no server, no database —
// the link itself carries the data) so a report can be shared or revisited.
// Email is left out on purpose: it's never shown in the report itself.
function encodeReportState(s) {
  const payload = {
    name: s.name, experience: s.experience, target: s.target,
    skills: s.skills, behaviours: s.behaviours,
    directions: s.directions, deprioritised: s.deprioritised,
    notes: s.notes, completedAt: s.completedAt
  };
  const json = JSON.stringify(payload);
  const b64 = btoa(encodeURIComponent(json).replace(/%([0-9A-F]{2})/g,
    (_, p) => String.fromCharCode('0x' + p)));
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decodeReportState(code) {
  try {
    let b64 = code.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    const json = decodeURIComponent(Array.prototype.map.call(atob(b64),
      c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(json);
  } catch (e) {
    console.error('Could not read results from link', e);
    return null;
  }
}

// Updates the address bar (no reload) so copying the URL at this point
// shares/saves this exact result.
function updateResultsUrl() {
  const code = encodeReportState(state);
  const url = location.pathname + '?r=' + code;
  history.replaceState(null, '', url);
}

function openShareModal() {
  document.getElementById('shareLinkInput').value = location.href;
  const label = document.getElementById('shareCopyLabel');
  label.textContent = 'Copy';
  document.getElementById('shareDialog').classList.add('open');
}

function copyShareLink() {
  const input = document.getElementById('shareLinkInput');
  const label = document.getElementById('shareCopyLabel');
  const done = () => { label.textContent = 'Copied!'; setTimeout(() => { label.textContent = 'Copy'; }, 1800); };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(input.value).then(done).catch(() => {
      input.select();
      document.execCommand('copy');
      done();
    });
  } else {
    input.select();
    document.execCommand('copy');
    done();
  }
}

function restoreForm() {
  document.getElementById('inputName').value       = state.name || '';
  document.getElementById('inputEmail').value      = state.email || '';
  document.getElementById('inputExperience').value = state.experience || '';
  document.getElementById('inputTarget').value     = state.target || '';
  // Sync floating labels for selects
  document.querySelectorAll('.select-field__input').forEach(sel => {
    sel.classList.toggle('has-value', !!sel.value);
  });
}

function clearAndRestart() {
  if (!confirm('Clear all saved answers and start fresh?')) return;
  localStorage.removeItem(STORAGE_KEY);
  state = { name:'', email:'', experience:'', target:'', skills:{}, behaviours:{}, directions:[], deprioritised:[], notes:{} };
  questionIndex = 0;
  restoreForm();
  document.getElementById('resumeBanner').style.display = 'none';
}

// ── NAVIGATION ───────────────────────────────────────────────────
function showScreen(id) {
  document.getElementById(currentScreenId).classList.remove('active');
  document.getElementById(id).classList.add('active');
  currentScreenId = id;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // The radar chart is built while its screen is still hidden (display:none),
  // so Chart.js measures a 0-size container. Nudge it once the screen is
  // actually visible so it picks up its real dimensions.
  if (id === 'screen-results' && radarChart) {
    requestAnimationFrame(() => radarChart.resize());
  }
}

function setGlobalProgress(pct) {
  document.getElementById('progressBar').style.width = pct + '%';
}

// ── SCREEN 0: WELCOME ────────────────────────────────────────────
function startAssessment() {
  const name  = document.getElementById('inputName').value.trim();
  const email = document.getElementById('inputEmail').value.trim();
  const exp   = document.getElementById('inputExperience').value;
  const tgt   = document.getElementById('inputTarget').value;
  if (!name) { alert('Please enter your name.'); return; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Please enter a valid email address.'); return; }
  if (!exp)  { alert('Please select your experience level.'); return; }
  if (!tgt)  { alert('Please select your target level.'); return; }
  state.name = name;
  state.email = email;
  state.experience = exp;
  state.target = tgt;
  saveState();
  trackEvent('New self-assessment started', {});
  questionIndex = 0;
  renderQuestion(0);
  showScreen('screen-q');
}

// Sends an event to Formspree so it shows up by email — same endpoint used
// for every tracked moment in the tool. Fire-and-forget: never blocks or
// interrupts the assessment if the request is slow or fails. `keepalive`
// lets the request finish even if the click also navigates away (e.g. a
// program link). Skips test@email.com so testing the flow doesn't count
// as a real submission.
function trackEvent(subject, extra) {
  if ((state.email || '').trim().toLowerCase() === 'test@email.com') return;
  const fd = new FormData();
  fd.append('_subject', subject);
  fd.append('source', 'Self-Assessment Tool');
  fd.append('name', state.name || '');
  fd.append('email', state.email || '');
  fd.append('experience', state.experience || '');
  fd.append('target', state.target || '');
  Object.entries(extra || {}).forEach(([k, v]) => fd.append(k, v));
  fetch('https://formspree.io/f/mvzedpvn', {
    method: 'POST',
    body: fd,
    headers: { 'Accept': 'application/json' },
    keepalive: true
  }).catch(() => {});
}

// ── QUESTION SCREEN ──────────────────────────────────────────────
function renderQuestion(idx) {
  const isSkill = idx < SKILLS.length;
  const item    = isSkill ? SKILLS[idx] : BEHAVIOURS[idx - SKILLS.length];
  const num     = isSkill ? idx + 1 : idx - SKILLS.length + 1;
  const total   = isSkill ? SKILLS.length : BEHAVIOURS.length;

  // Section label
  document.getElementById('qEyebrow').textContent = (isSkill ? 'Core Skill' : 'Operating Behaviour') + ' ' + num + ' of ' + total;
  document.getElementById('qCounter').textContent = (idx + 1) + ' / ' + TOTAL_Q;

  // Progress
  setGlobalProgress(5 + (idx / TOTAL_Q) * 90);

  // Section title + desc
  document.getElementById('qSectionTitle').textContent = isSkill ? 'Core Skills' : 'Operating Behaviours';
  document.getElementById('qSectionDesc').textContent  = isSkill
    ? 'Select the level that best describes you right now — be honest.'
    : 'Beyond craft skills, these behaviours shape how effective you are in a product team.';

  // Question card
  document.getElementById('qCardTitle').textContent = item.name;
  document.getElementById('qCardDesc').textContent  = item.desc;

  // Options
  const container = document.getElementById('qOptions');
  container.innerHTML = '';

  if (isSkill) {
    const keys  = ['aware','capable','strong','expert'];
    const names = ['Aware','Capable','Strong','Expert'];
    const cur   = state.skills[item.id];

    const grid = document.createElement('div');
    grid.className = 'skill-options';

    keys.forEach((key, i) => {
      const d = document.createElement('div');
      d.className = 'opt' + (cur === i+1 ? ' selected' : '');
      d.innerHTML = `<div class="opt-title">${names[i]}</div><div class="opt-desc">${item.levels[key]}</div>`;
      d.onclick = () => {
        state.skills[item.id] = i + 1;
        saveState();
        grid.querySelectorAll('.opt').forEach((el, j) => el.classList.toggle('selected', j === i));
        setNextEnabled(true);
      };
      grid.appendChild(d);
    });

    container.appendChild(grid);
    setNextEnabled(cur !== undefined);

  } else {
    const keys  = ['developing','practising','consistent'];
    const names = ['Developing','Practising','Consistent'];
    const cur   = state.behaviours[item.id];

    const grid = document.createElement('div');
    grid.className = 'beh-options';

    keys.forEach((key, i) => {
      const d = document.createElement('div');
      d.className = 'opt' + (cur === key ? ' selected' : '');
      d.innerHTML = `<div class="opt-title">${names[i]}</div><div class="opt-desc">${item.levels[key]}</div>`;
      d.onclick = () => {
        state.behaviours[item.id] = key;
        saveState();
        grid.querySelectorAll('.opt').forEach((el, j) => el.classList.toggle('selected', j === i));
        setNextEnabled(true);
      };
      grid.appendChild(d);
    });

    container.appendChild(grid);
    setNextEnabled(cur !== undefined);
  }

  // ── Coaching notes box (per skill / behaviour) ──────────────────
  const noteWrap = document.createElement('div');
  noteWrap.className = 'q-notes';
  const label = document.createElement('label');
  label.className = 'q-notes-label';
  label.setAttribute('for', 'qNoteField');
  label.innerHTML = '📝 Add a note <span>— what this level means in your context, and a real example (optional)</span>';
  const ta = document.createElement('textarea');
  ta.id = 'qNoteField';
  ta.className = 'q-notes-input';
  ta.placeholder = 'e.g. what "' + item.name + '" looks like in your work, what you expect at this level, and a real project example…';
  ta.value = state.notes[item.id] || '';
  ta.oninput = () => { state.notes[item.id] = ta.value; saveState(); };
  noteWrap.appendChild(label);
  noteWrap.appendChild(ta);
  container.appendChild(noteWrap);

  // Next button label
  document.getElementById('qNextLabel').textContent = idx === TOTAL_Q - 1 ? 'See my results' : 'Next';
}

function setNextEnabled(enabled) {
  document.getElementById('qNextBtn').disabled = !enabled;
}

function nextQuestion() {
  if (questionIndex < TOTAL_Q - 1) {
    questionIndex++;
    renderQuestion(questionIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    renderDirectionScreen();
    showScreen('screen-direction');
    setGlobalProgress(95);
  }
}

function prevQuestion() {
  if (questionIndex > 0) {
    questionIndex--;
    renderQuestion(questionIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showScreen('screen-0');
    setGlobalProgress(0);
  }
}

function backToQuestions() {
  renderQuestion(TOTAL_Q - 1);
  showScreen('screen-q');
  setGlobalProgress(5 + ((TOTAL_Q - 1) / TOTAL_Q) * 90);
}

function renderDirectionScreen() {
  // Direction cards
  const grid = document.getElementById('directionGrid');
  grid.innerHTML = DIRECTIONS.map(d => `
    <div class="direction-card${(state.directions||[]).includes(d.id) ? ' selected' : ''}" data-dir="${d.id}" onclick="selectDirection('${d.id}')">
      <div class="dc-emoji">${d.emoji}</div>
      <div class="dc-name">${d.name}</div>
      <div class="dc-desc">${d.desc}</div>
    </div>`).join('');

  // Deprioritise chips
  const chips = document.getElementById('deprChips');
  chips.innerHTML = SKILLS.map(s => `
    <button class="depr-chip${(state.deprioritised||[]).includes(s.id) ? ' selected' : ''}"
      onclick="toggleDepr('${s.id}', this)">${s.name}</button>`).join('');

  updateDirCounter();
}

function updateDirCounter() {
  const n = (state.directions||[]).length;
  document.getElementById('dirNextBtn').disabled = n === 0;
  // Dim cards that can't be selected once 3 chosen
  document.querySelectorAll('.direction-card').forEach(el => {
    const isSel = (state.directions||[]).includes(el.dataset.dir);
    el.classList.toggle('dim', n >= 3 && !isSel);
  });
}

function selectDirection(id) {
  state.directions = state.directions || [];
  if (state.directions.includes(id)) {
    // Deselect
    state.directions = state.directions.filter(d => d !== id);
  } else if (state.directions.length < 3) {
    state.directions.push(id);
  }
  saveState();
  document.querySelectorAll('.direction-card').forEach(el => {
    el.classList.toggle('selected', state.directions.includes(el.dataset.dir));
  });
  updateDirCounter();
}

function toggleDepr(skillId, el) {
  state.deprioritised = state.deprioritised || [];
  if (state.deprioritised.includes(skillId)) {
    state.deprioritised = state.deprioritised.filter(id => id !== skillId);
    el.classList.remove('selected');
  } else {
    state.deprioritised.push(skillId);
    el.classList.add('selected');
  }
  saveState();
}

function submitDirection() {
  saveState();
  buildResults();
  showScreen('screen-results');
  setGlobalProgress(100);
  const dirNames = (state.directions||[]).map(id => (DIRECTIONS.find(d => d.id === id)||{}).name).filter(Boolean).join(', ');
  trackEvent('Self-assessment completed', {
    archetype: getArchetype().name,
    readiness_score: getReadinessScore() + '%',
    directions: dirNames,
    results_link: location.origin + location.pathname + '?r=' + encodeReportState(state)
  });
}

// Returns union of skills across all selected directions, or null if none selected
function getDirectionSkills() {
  const dirs = (state.directions||[]).map(id => DIRECTIONS.find(d => d.id === id)).filter(Boolean);
  if (!dirs.length) return null;
  return [...new Set(dirs.flatMap(d => d.skills))];
}

// ── RESULTS ──────────────────────────────────────────────────────
let radarChart = null;

function buildResults() {
  if (!state.completedAt) state.completedAt = Date.now();
  const date = new Date(state.completedAt).toLocaleDateString('en-AU', { day:'numeric', month:'long', year:'numeric' });
  document.getElementById('heroName').textContent = state.name;
  document.getElementById('heroMeta').textContent = state.experience + ' experience · Targeting ' + state.target + ' level';
  document.getElementById('heroDate').textContent = 'Completed ' + date;
  const selDirs = (state.directions||[]).map(id => DIRECTIONS.find(d => d.id === id)).filter(Boolean);
  document.getElementById('heroDirection').innerHTML = selDirs.length
    ? selDirs.map(d => `<span class="rh-direction">${d.emoji} ${d.name}</span>`).join('')
    : '';
  if (selDirs.length) {
    document.querySelector('#focusAreasHead h3').textContent = 'Your top focus areas on your path';
    document.getElementById('focusAreasDesc').textContent = `Ranked by gap size within your chosen direction${selDirs.length > 1 ? 's' : ''}. Skills outside your focus are shown separately.`;
  } else {
    document.querySelector('#focusAreasHead h3').textContent = 'Your top 3 focus areas';
    document.getElementById('focusAreasDesc').textContent = 'Ranked by gap between your current rating and your target level.';
  }
  buildInsights();
  buildRadar();
  buildPriorityGaps();
  buildPathway();
  buildBehaviourSummary();
  buildCoachingNotes();
  buildRecommendedProgram();
  updateResultsUrl();
}

function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ── Note playbook: match a student's free-text notes to coaching advice ──
// Edit content in coaching-playbook.md and keep this in sync.
const PLAYBOOK = [
  { id:'hold-ground', theme:'Hold your ground on evidence',
    triggers:['push back','pushback','convince','hold my ground','hold her ground','technical preference','technical preferences','hesitate','hesitant','won\'t budge','overrule','stand my ground','lead with research'],
    diagnosis:'Working closely with a technical or delivery team is a real strength — you understand constraints deeply. The risk is letting technical preference override design when they genuinely conflict. Leading with research, and holding your ground when the evidence supports a different call, is exactly the Mid → Senior shift.',
    moves:['Separate constraint from preference — ask "is this technically impossible, or just not preferred?" Only the first should overrule the design.','Turn disagreement into a trade-off, not an opinion clash: "Research shows users need X — what\'s the technical cost of supporting it?"','Practise on one low-risk decision: write your evidence-based rationale before the meeting, and hold it.'],
    skills:'Stakeholder Management · User Research · Storytelling', resource:'Influencing Without Authority',
    plan:'On the next design–tech conflict, bring a written, research-backed recommendation framed as a trade-off. Success: you held a research-based call at least once.' },
  { id:'user-access', theme:'When you can\'t reach real users',
    triggers:['find user','reach user','user access','access to user','recruit','overseas','can\'t interview','hard to interview','through the po','product owner','no users','talk to users'],
    diagnosis:'Direct user access is often gated — overseas clients, or a PO who controls contact. That\'s real, but it\'s not a dead end. Proxy sources get you most of the way and are a completely valid place to start.',
    moves:['Interview internal stakeholders (PO, support, sales, CS) — they carry a lot of proxy knowledge about user pain points.','Mine evidence that already exists: support tickets, reviews, analytics, and past research.','Ask the PO for recordings or notes from their user contact, even when you can\'t attend live.'],
    skills:'User Research · Service Design · Customer Understanding', resource:'Interviewing Users Effectively',
    plan:'Run 2 proxy interviews this cycle and synthesise 3 grounded insights. Success: insights based on evidence, not assumption.' },
  { id:'system-fit', theme:'Fit the system, raise the finish',
    triggers:['design system','guideline','guidelines','consistency','consistent','inconsistent','polish','doesn\'t fit','not fit','finish','pattern','tokens'],
    diagnosis:'Strong ideas sometimes drift from the design system or project constraints, which costs trust and rework. Consistency and finish are how senior work signals reliability.',
    moves:['Before sharing, self-audit against the design system — components, tokens, spacing, patterns. A 10-minute checklist catches most drift.','When you deviate on purpose, say why: "I\'m breaking the pattern here because…". Unintentional inconsistency reads as careless; intentional deviation reads as judgement.','Pair with a design-system owner early on ambiguous components.'],
    skills:'Visual Design · System Design · Interaction Design', resource:'Refactoring UI — Visual Design Patterns',
    plan:'Ship one proposal that passes a design-system self-audit with zero unflagged inconsistencies.' },
  { id:'drive', theme:'Drive, don\'t just react',
    triggers:['reactive','wait to be told','take initiative','take more initiative','proactive','proactiv','drive discussion','driving','arrange meeting','unprompted','initiative','coordination'],
    diagnosis:'Waiting for direction is a Mid-level habit; Seniors create the direction — they convene people, surface issues early, and bring suggestions before being asked.',
    moves:['Convene, don\'t wait: when something\'s unclear, you schedule the 20-minute alignment — don\'t wait for the PM.','Come to discussions with a point of view and one recommendation, not just questions.','Flag risks early — "I think we\'ll hit X" — rather than reacting once it happens.'],
    skills:'Stakeholder Management · Storytelling · Shared Responsibility', resource:'Presenting Design Work to Stakeholders',
    plan:'This cycle, initiate at least 2 cross-functional conversations and bring a recommendation to each.' },
  { id:'prototyping', theme:'Prototyping & ambiguous briefs',
    triggers:['prototyp','interactive flow','navigation demo','conceptual','open-ended','open ended','ambiguous','ambiguity','high-fidelity','hi-fi','not sure how to approach'],
    diagnosis:'Two related growth edges — making ideas tangible with interactive prototypes, and handling briefs that are conceptual rather than spec\'d. Both are how you move from executing a brief to defining the work.',
    moves:['Build one clickable prototype for a real flow (not just screens) — even low-fidelity — and test it.','For ambiguous briefs, start by framing: write the problem, the assumptions, and 2–3 directions before designing. Structure handles ambiguity, not more pixels.','Use AI to generate divergent concept directions fast, then curate the strongest.'],
    skills:'Prototyping · Interaction Design · Define Success', resource:'Figma Prototyping — Official Learning',
    plan:'Deliver one interactive prototype and one framing doc for an open-ended brief.' },
  { id:'process', theme:'Cross-functional process habits',
    triggers:['jira','ticket','handoff','hand-off','link design','collaborate earlier','front-end','frontend','accessibility','a11y','test app','process','engineer'],
    diagnosis:'Craft is only as good as it ships. Consistent process habits — traceable handoff, early engineering collaboration, and testing behaviour and accessibility — are what make design reliable at senior level.',
    moves:['Link every updated design to its Jira ticket so the work is traceable.','Loop front-end engineers in at design time, not at handoff, to catch UI issues early.','Add a self-check pass: test real app behaviour and run a quick accessibility check (contrast, keyboard, labels) before calling it done.'],
    skills:'Frontend Development · Interaction Design · Iterate Towards Success', resource:'MDN Web Docs — HTML & CSS for Designers',
    plan:'For the next feature, engineers are looped in before handoff and the design passes a basic accessibility check.' },
  { id:'ai', theme:'Build AI into your practice',
    triggers:['ai tool','ai in design','use ai','using ai','ai workflow','ai feature','chatgpt','copilot','llm','artificial intelligence','new to ai','haven\'t used ai','limited ai'],
    diagnosis:'AI fluency is fast becoming a baseline senior expectation. Low exposure is a monitorable risk — but an easy one to close, because the leverage is high.',
    moves:['Pick one repeatable task (research synthesis, first-draft copy, concept divergence) and do it with AI this week.','Build a small personal workflow and notice where AI helped versus needed rework.','Share one AI-assisted result with your team to normalise it.'],
    skills:'AI-Assisted Workflow · Designing for AI Features · Learning Agility', resource:'AI Tools for Designers — Getting Started',
    plan:'Adopt AI into one weekly task and share one result with the team.' }
];

// Scan notes, return up to 2 matched advice themes, each tagged with the note (skill/behaviour id) that triggered it.
function getPlaybookMatches() {
  const notesArr = [
    ...SKILLS.map(s => ({ id:s.id, name:s.name, note:(state.notes[s.id]||'').trim() })),
    ...BEHAVIOURS.map(b => ({ id:b.id, name:b.name, note:(state.notes[b.id]||'').trim() }))
  ].filter(x => x.note);
  const matches = [];
  const used = new Set();
  for (const n of notesArr) {
    const lc = n.note.toLowerCase();
    for (const p of PLAYBOOK) {
      if (used.has(p.id)) continue;
      if (p.triggers.some(t => lc.includes(t))) {
        matches.push({ ...p, sourceId:n.id, sourceSkill:n.name, sourceNote:n.note });
        used.add(p.id);
        break;
      }
    }
    if (matches.length >= 2) break;
  }
  return matches;
}

// ── Recommended programs (only shows if at least one fits this student —
// a student can match more than one program at once, e.g. a level-gated
// coaching program plus a skill course open to every level) ──
function buildRecommendedProgram() {
  const el = document.getElementById('recommendedProgram');
  const programs = PROGRAMS.filter(p => p.matches(state));
  if (!programs.length) { el.innerHTML = ''; return; }
  const visualHtml = {
    beginner: `<span class="pc-ring"></span><span class="spc-core"></span>`,
    steps: `<span class="pc-ring"></span><span class="pc-steps"><span class="pc-step"></span><span class="pc-step"></span><span class="pc-step"></span></span><span class="pc-climber"></span>`,
    senior: `<span class="pc-ring"></span><span class="spc-ring2"></span><span class="spc-ring3"></span><span class="spc-core"></span><span class="spc-pulse"></span>`,
    ai: `<span class="pc-ring"></span><span class="ppc-blob"></span><span class="ppc-phone"><span class="ppc-line-1"></span><span class="ppc-line-2"></span></span><svg class="ppc-spark" viewBox="0 0 24 24" width="12" height="12"><path d="M12 0 C12 6 14 10 20 12 C14 14 12 18 12 24 C12 18 10 14 4 12 C10 10 12 6 12 0 Z"/></svg>`
  };
  const cards = programs.map(program => `
    <a href="${program.href}" class="program-card" onclick='trackEvent("Clicked recommended program", {program: ${JSON.stringify(program.title)}, href: ${JSON.stringify(program.href)}})'>
      <div class="program-card-visual" aria-hidden="true">
        ${visualHtml[program.visual] || visualHtml.steps}
      </div>
      <div class="program-card-body">
        <div class="program-card-tags">
          <span class="program-card-tag">${program.tag}</span>
          <span class="program-card-level ${program.level}">${program.levelLabel}</span>
        </div>
        <h3>${program.title}</h3>
        <p>${program.desc}</p>
        <span class="program-card-link">View program</span>
      </div>
    </a>`).join('');
  el.innerHTML = `
    <div class="res-section-head">
      <h3>Recommended for you</h3>
      <p>A structured way to close these gaps — not just a list of resources.</p>
    </div>
    <div class="programs-grid">${cards}</div>`;
}

// ── Notes summary (only shows if any notes were captured) ──
// Advice is attached directly under the note that triggered it — not shown as a separate section,
// so a note's text and its match never appear twice on the page.
function buildCoachingNotes() {
  const head = document.getElementById('coachingNotesHead');
  const el   = document.getElementById('coachingNotes');
  const items = [
    ...SKILLS.map(s => ({ id:s.id, name: s.name, note: (state.notes[s.id]||'').trim(), level: LEVEL_NAMES[state.skills[s.id]||0] || 'Not rated' })),
    ...BEHAVIOURS.map(b => ({ id:b.id, name: b.name, note: (state.notes[b.id]||'').trim(), level: ({developing:'Developing',practising:'Practising',consistent:'Consistent'}[state.behaviours[b.id]]) || 'Not rated' }))
  ].filter(x => x.note);
  if (!items.length) { head.style.display = 'none'; el.innerHTML = ''; return; }
  head.style.display = '';
  const matchById = {};
  getPlaybookMatches().forEach(m => { matchById[m.sourceId] = m; });
  el.innerHTML = items.map(x => {
    const m = matchById[x.id];
    const adviceHtml = !m ? '' : `
      <div class="cn-advice">
        <div class="cn-advice-theme">🗣️ ${escapeHtml(m.theme)}</div>
        <div class="cn-advice-diag">${escapeHtml(m.diagnosis)}</div>
        <div class="cn-advice-movelabel">Try this</div>
        <ul class="cn-advice-moves">${m.moves.map(mv => `<li>${escapeHtml(mv)}</li>`).join('')}</ul>
        <div class="cn-advice-meta"><div><strong>Grows:</strong> ${escapeHtml(m.skills)}</div><div><strong>Resource:</strong> ${escapeHtml(m.resource)}</div></div>
        <div class="cn-advice-plan"><strong>In your plan:</strong> ${escapeHtml(m.plan)}</div>
      </div>`;
    return `
    <div class="cn-item${m ? ' has-advice' : ''}">
      <div class="cn-skill">${escapeHtml(x.name)}</div>
      <div class="cn-level">${escapeHtml(x.level)}</div>
      <div class="cn-note">${escapeHtml(x.note)}</div>
      ${adviceHtml}
    </div>`;
  }).join('');
}

// ── INSIGHTS ENGINE ──────────────────────────────────────────────

const ARCHETYPES = [
  { id:'craftsperson', name:'The Craftsperson', emoji:'🎨',
    color:'#8A6D00', bg:'#FFFDE8', border:'#F5D028',
    superpower:'Beautiful, considered execution that makes complex things feel simple.',
    blindspot:'Can over-polish before validating the right problem.' },
  { id:'researcher', name:'The Researcher', emoji:'🔍',
    color:'#1D4ED8', bg:'#DBEAFE', border:'#93C5FD',
    superpower:'Deep user understanding that keeps the team grounded in real needs.',
    blindspot:'Work can lack the craft finish to land strongly with stakeholders.' },
  { id:'strategist', name:'The Strategist', emoji:'♟️',
    color:'#166534', bg:'#DCFCE7', border:'#86EFAC',
    superpower:'Sees the big picture — connects features to outcomes to strategy.',
    blindspot:'Can get stuck in concepts without shipping tangible work.' },
  { id:'communicator', name:'The Communicator', emoji:'💬',
    color:'#C2185B', bg:'#FCE4EC', border:'#F48FB1',
    superpower:'Turns complex work into clear, compelling narratives that earn trust.',
    blindspot:'May underestimate the need to level up core execution and craft skills.' },
  { id:'influencer', name:'The Influencer', emoji:'🎤',
    color:'#0E7490', bg:'#ECFEFF', border:'#67E8F9',
    superpower:'Leads through story and relationships — gets alignment where others hit friction.',
    blindspot:'Can rely too much on communication and under-deliver on execution depth.' },
  { id:'allrounder', name:'The All-Rounder', emoji:'⚡',
    color:'#6B3FEE', bg:'#EAE0FF', border:'#C4B5FD',
    superpower:'Adaptable across any team, brief, or product challenge.',
    blindspot:'Not yet deep enough in any area to be the go-to person.' }
];

function getArchetype() {
  const s = state.skills;
  const bMap = { developing:1, practising:2, consistent:3 };
  const craft      = ((s['visual-design']||0) + (s['interaction-design']||0)) / 2;
  const research   = ((s['user-research']||0) + (s['service-design']||0)) / 2;
  const strategy   = ((s['system-design']||0) + (s['information-architecture']||0)) / 2;
  // Communicator: writing craft + transparency behaviour
  const comms      = ((s['writing']||0) + (bMap[state.behaviours['transparency']]||1) / 3 * 4) / 2;
  // Influencer: storytelling + stakeholder management — lead-through-influence profile
  const influencer = ((s['storytelling']||0) + (s['stakeholder-management']||0)) / 2;
  const scores = { craftsperson:craft, researcher:research, strategist:strategy, communicator:comms, influencer };
  const vals = Object.values(scores);
  const range = Math.max(...vals) - Math.min(...vals);
  if (range < 0.7) return ARCHETYPES.find(a => a.id === 'allrounder');
  const winner = Object.entries(scores).sort((a,b) => b[1]-a[1])[0][0];
  return ARCHETYPES.find(a => a.id === winner) || ARCHETYPES[5];
}

function getReadinessScore() {
  const tv = TARGET_LEVELS[state.target] || 2;
  const skillScore = SKILLS.reduce((sum,s) => sum + Math.min((state.skills[s.id]||0)/tv, 1), 0) / SKILLS.length;
  const bMap = { developing:0, practising:0.5, consistent:1 };
  const behScore = BEHAVIOURS.reduce((sum,b) => sum + (bMap[state.behaviours[b.id]]||0), 0) / BEHAVIOURS.length;
  return Math.round((skillScore * 0.7 + behScore * 0.3) * 100);
}

function getCalibration() {
  const avgSkill = SKILLS.reduce((s,sk) => s + (state.skills[sk.id]||0), 0) / SKILLS.length;
  const expRanges = { '0–1 years':[0,1.8], '1–3 years':[0.8,2.5], '3–5 years':[1.5,3.0], '5–10 years':[2.0,3.5], '10+ years':[2.5,4.0] };
  const range = expRanges[state.experience];
  if (!range) return 'calibrated';
  if (avgSkill < range[0]) return 'under';
  if (avgSkill > range[1]) return 'over';
  return 'calibrated';
}

function getStrengthSkills() {
  const tv = TARGET_LEVELS[state.target] || 2;
  const atOrAbove = SKILLS.filter(s => (state.skills[s.id]||0) >= tv);
  if (atOrAbove.length >= 1) return atOrAbove.slice(0,2);
  return [...SKILLS].sort((a,b) => (state.skills[b.id]||0)-(state.skills[a.id]||0)).slice(0,2);
}

function getCriticalGap() {
  const tv        = TARGET_LEVELS[state.target] || 2;
  const dirSkills = getDirectionSkills();
  const depr      = state.deprioritised || [];
  let candidates  = SKILLS.map(s => ({ skill:s, gap:tv-(state.skills[s.id]||0), self:state.skills[s.id]||0 }))
    .filter(g => g.gap > 0);
  if (dirSkills) {
    const onPath = candidates.filter(g => dirSkills.includes(g.skill.id) && !depr.includes(g.skill.id));
    if (onPath.length) candidates = onPath;
  } else if (depr.length) {
    const active = candidates.filter(g => !depr.includes(g.skill.id));
    if (active.length) candidates = active;
  }
  return candidates.sort((a,b) => b.gap-a.gap)[0] || null;
}

function getAIReadiness() {
  const avg = ((state.skills['ai-workflow']||0) + (state.skills['ai-features']||0)) / 2;
  if (avg >= 3) return { label:'AI Ready', dot:'#16A34A', msg:'You\'re integrating AI into your practice — this puts you ahead of most designers right now.' };
  if (avg >= 2) return { label:'AI Growing', dot:'#D97706', msg:'You\'re building AI skills. Deepening your practice here will become a clear differentiator.' };
  return { label:'AI Early', dot:'#6B3FEE', msg:'AI fluency is fast becoming a baseline expectation. This is a high-leverage area to build next.' };
}

function getSkillVsBehaviourBalance() {
  const skillPct = Math.round(SKILLS.reduce((s,sk) => s+(state.skills[sk.id]||0),0)/SKILLS.length/4*100);
  const bMap = { developing:0, practising:50, consistent:100 };
  const behPct = Math.round(BEHAVIOURS.reduce((s,b) => s+(bMap[state.behaviours[b.id]]||0),0)/BEHAVIOURS.length);
  let type = 'balanced';
  if (skillPct < 40 && behPct < 40) type = 'both-low';
  else if (skillPct >= 65 && behPct >= 65) type = 'both-high';
  else if (skillPct - behPct > 20) type = 'high-skills';
  else if (behPct - skillPct > 20) type = 'high-behaviours';
  return { type, skillPct, behPct };
}

function buildInsights() {
  const archetype  = getArchetype();
  const readiness  = getReadinessScore();
  const calib      = getCalibration();
  const aiRead     = getAIReadiness();
  const strengths  = getStrengthSkills();
  const critGap    = getCriticalGap();
  const balance    = getSkillVsBehaviourBalance();
  const tv         = TARGET_LEVELS[state.target] || 2;

  // ── Archetype card ──────────────────────────────────
  document.getElementById('insightArchetype').innerHTML = `
    <div class="archetype-card" style="background:${archetype.bg};border-color:${archetype.border};">
      <div class="archetype-emoji">${archetype.emoji}</div>
      <div style="flex:1;">
        <div class="archetype-label" style="color:${archetype.color};">Your designer profile</div>
        <div class="archetype-name" style="color:${archetype.color};">${archetype.name}</div>
        <div class="archetype-row">
          <div class="archetype-tag" style="color:${archetype.color};background:rgba(0,0,0,0.07);">
            <span>Superpower</span>${archetype.superpower}
          </div>
          <div class="archetype-tag" style="color:${archetype.color};background:rgba(0,0,0,0.07);">
            <span>Watch out for</span>${archetype.blindspot}
          </div>
        </div>
      </div>
    </div>`;

  // ── Readiness stat ──────────────────────────────────
  const readColor = readiness >= 75 ? 'var(--success-deep)' : readiness >= 50 ? 'var(--purple)' : 'var(--warning-deep)';
  document.getElementById('insightReadiness').innerHTML = `
    <div class="is-label">Career readiness</div>
    <div class="is-value" style="color:${readColor};">${readiness}%</div>
    <div class="is-sub">Ready for <strong>${state.target}</strong> level right now</div>`;

  // ── Calibration stat ────────────────────────────────
  const calibContent = {
    under: { dot:'#F59E0B', msg:'You may be underselling yourself based on your experience. Revisit a few ratings with a peer.' },
    over:  { dot:'#EF4444', msg:'Some ratings may be aspirational. Expert means consistently leading others — check with a manager.' },
    calibrated: { dot:'#22C55E', msg:'Your self-ratings look well-calibrated for your years of experience.' }
  }[calib];
  document.getElementById('insightCalibration').innerHTML = `
    <div class="is-label">Experience signal</div>
    <div class="is-signal" style="margin-bottom:6px;">
      <div class="is-signal-dot" style="background:${calibContent.dot};"></div>
      <strong style="font-size:var(--text-base);">${calib === 'calibrated' ? 'Well calibrated' : calib === 'under' ? 'Possibly under-rated' : 'Check your ratings'}</strong>
    </div>
    <div class="is-sub">${calibContent.msg}</div>`;

  // ── AI Readiness stat ───────────────────────────────
  document.getElementById('insightAIReadiness').innerHTML = `
    <div class="is-label">AI readiness</div>
    <div class="is-signal" style="margin-bottom:6px;">
      <div class="is-signal-dot" style="background:${aiRead.dot};"></div>
      <strong style="font-size:var(--text-base);">${aiRead.label}</strong>
    </div>
    <div class="is-sub">${aiRead.msg}</div>`;

  // ── 3 Insight cards ─────────────────────────────────
  // Card 1: Strengths
  const strengthHTML = strengths.length ? strengths.map(s => {
    const self = state.skills[s.id]||0;
    const atTarget = self >= tv;
    return `<div class="ic-skill">${s.name}<div class="ic-skill-sub">${LEVEL_NAMES[self]} ${atTarget ? '· At target ✓' : '· Your strongest'}</div></div>`;
  }).join('') : '<div class="ic-value">Keep building — you\'re making progress.</div>';

  // Card 2: Critical gap
  const gapHTML = critGap ? `
    <div class="ic-skill">${critGap.skill.name}</div>
    <div class="ic-skill-sub" style="color:var(--warning-deep);font-weight:600;">${LEVEL_NAMES[critGap.self]||'Not rated'} → ${LEVEL_NAMES[Math.round(tv)]} needed</div>
    <div class="ic-value" style="margin-top:4px;">${getRationale(critGap.skill.id)}</div>` : '<div class="ic-value">You\'re at or above target in all skills! 🎉</div>';

  // Card 3: Skills vs Behaviours
  const balanceMsg = {
    'high-skills':     'Your craft is ahead of how you operate. Focus on visibility and influence.',
    'high-behaviours': 'Your professional maturity is strong. Time to close the craft gaps.',
    'both-low':        'Focus on fundamentals. Behaviour maturity follows real project experience.',
    'both-high':       'Strong across both. You may be closer to levelling up than you think.',
    'balanced':        'Good balance between craft and working style. Keep building both steadily.'
  }[balance.type];

  document.getElementById('insightCards').innerHTML = `
    <div class="insight-card" style="border-top-color:var(--success);">
      <div class="ic-label">✦ Where you shine</div>
      <div class="ic-skills">${strengthHTML}</div>
    </div>
    <div class="insight-card" style="border-top-color:var(--warning);">
      <div class="ic-label">⚠ Biggest unlock</div>
      ${gapHTML}
    </div>
    <div class="insight-card" style="border-top-color:var(--info);">
      <div class="ic-label">⚖ Skills vs Behaviours</div>
      <div class="ic-bar-wrap">
        <div class="ic-bar-row">
          <span style="width:60px;">Craft</span>
          <div class="ic-bar-bg"><div class="ic-bar-fill" style="width:${balance.skillPct}%;background:var(--purple);"></div></div>
          <div class="ic-bar-pct">${balance.skillPct}%</div>
        </div>
        <div class="ic-bar-row">
          <span style="width:60px;">Behaviours</span>
          <div class="ic-bar-bg"><div class="ic-bar-fill" style="width:${balance.behPct}%;background:var(--yellow-deep);"></div></div>
          <div class="ic-bar-pct">${balance.behPct}%</div>
        </div>
      </div>
      <div class="ic-value">${balanceMsg}</div>
    </div>`;

  // ── One-level-up plan ───────────────────────────────
  const bRank = { developing:0, practising:1, consistent:2 };
  const lowestBeh = [...BEHAVIOURS].sort((a,b) => (bRank[state.behaviours[a.id]]||0)-(bRank[state.behaviours[b.id]]||0))[0];
  const quickWinSkill = SKILLS.map(s => ({ s, gap:tv-(state.skills[s.id]||0) }))
    .filter(g => g.gap > 0 && g.gap <= 1).sort((a,b) => a.gap-b.gap)[0];

  const behActions = {
    'customer-understanding': 'Talk to one user about a problem you\'re currently designing for',
    'delivering-outcomes':    'Track the metric your next design decision is meant to move',
    'iteration':              'Set a rule: test with a real user before any design goes hi-fi',
    'shared-responsibility':  'Schedule a working session with your PM or engineer before the next kickoff',
    'transparency':           'Write a 5-sentence decision log the next time you make a major design call',
    'learning-agility':       'Spend 30 minutes a week exploring one new tool or method — then share what you found with someone',
    'custom-focus':           'Ask your manager what \'great\' looks like for your current role'
  };

  const practiceItem = critGap ? `
    <div class="olu-item">
      <div class="olu-icon" style="background:var(--purple-tint);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
      <div class="olu-body">
        <div class="olu-type">Practice this skill</div>
        <div class="olu-text">${critGap.skill.name}</div>
        <div class="olu-hint">${(SKILL_RESOURCES[critGap.skill.id]||[])[0]?.title || 'Start with one focused project in this area'}</div>
      </div>
    </div>` : '';

  const behItem = lowestBeh ? `
    <div class="olu-item">
      <div class="olu-icon" style="background:var(--yellow-tint);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
      <div class="olu-body">
        <div class="olu-type">Strengthen this behaviour</div>
        <div class="olu-text">${lowestBeh.name}</div>
        <div class="olu-hint">${behActions[lowestBeh.id] || 'Make this behaviour a deliberate habit in your next sprint'}</div>
      </div>
    </div>` : '';

  const quickWinItem = quickWinSkill ? `
    <div class="olu-item">
      <div class="olu-icon" style="background:var(--success-tint);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
      <div class="olu-body">
        <div class="olu-type">Quick win</div>
        <div class="olu-text">${quickWinSkill.s.name}</div>
        <div class="olu-hint">You're close — one real project will close this gap</div>
      </div>
    </div>` : '';

  const learningAgility = state.behaviours['learning-agility'];
  const agilityNote = learningAgility === 'consistent' ? `
    <div class="olu-note">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> <strong>Your advantage:</strong> Your learning agility is strong — you tend to close skill gaps faster than average. Use that.
    </div>` : '';

  const items = [practiceItem, behItem, quickWinItem].filter(Boolean);
  if (items.length) {
    document.getElementById('insightOneLevelUp').innerHTML = `
      <div class="one-level-up">
        <div class="olu-head">If you only do 3 things</div>
        <div class="olu-items">${items.join('')}</div>
        ${agilityNote}
      </div>`;
  }
}

function hexToRgba(hex, alpha) {
  hex = (hex || '').trim().replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  if (hex.length !== 6) return `rgba(107,63,238,${alpha})`;
  const r = parseInt(hex.substring(0,2), 16), g = parseInt(hex.substring(2,4), 16), b = parseInt(hex.substring(4,6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function buildRadar() {
  // Read the active theme's colors so the chart matches whichever tokens file is loaded
  // (default purple/yellow, or the training-editorial terracotta/lime override).
  const cs = getComputedStyle(document.documentElement);
  const purple     = (cs.getPropertyValue('--purple') || '#6B3FEE').trim();
  const yellowDeep = (cs.getPropertyValue('--yellow-deep') || '#C9A400').trim();
  const fontBody   = (cs.getPropertyValue('--font-body') || "'Public Sans', system-ui").trim() || "'Public Sans', system-ui";
  const textSecondary = (cs.getPropertyValue('--text-secondary') || '#6B6084').trim();

  const SHORT_LABELS = {
    'user-research':            'User Research',
    'information-architecture': 'Info Arch',
    'interaction-design':       'Interaction',
    'visual-design':            'Visual Design',
    'writing':                  'Writing',
    'service-design':           'Service Design',
    'prototyping':              'Prototyping',
    'frontend-development':     'Frontend Dev',
    'system-design':            'Systems',
    'ai-workflow':              'AI Workflow',
    'ai-features':              'AI Features',
    'stakeholder-management':   'Stakeholders',
    'storytelling':             'Storytelling'
  };
  const labels = SKILLS.map(s => SHORT_LABELS[s.id] || s.name.split(' ').slice(0,2).join(' '));
  const selfData = SKILLS.map(s => state.skills[s.id] || 0);
  const tv = TARGET_LEVELS[state.target] || 2;
  if (radarChart) radarChart.destroy();
  radarChart = new Chart(document.getElementById('radarChart').getContext('2d'), {
    type: 'radar',
    data: {
      labels,
      datasets: [
        { label: 'Your rating', data: selfData, backgroundColor: hexToRgba(purple, 0.2), borderColor: hexToRgba(purple, 0.9), borderWidth: 2.5, pointBackgroundColor: purple, pointRadius: 4 },
        { label: 'Target',      data: SKILLS.map(() => tv), backgroundColor: hexToRgba(yellowDeep, 0.08), borderColor: yellowDeep, borderWidth: 2, borderDash: [5,4], pointBackgroundColor: yellowDeep, pointRadius: 3 }
      ]
    },
    options: {
      responsive: true,
      scales: { r: { min:0, max:4, ticks:{ stepSize:1, display:false }, grid:{ color:'rgba(0,0,0,0.06)' }, angleLines:{ color:'rgba(0,0,0,0.06)' }, pointLabels:{ font:{ family:fontBody, size:11, weight:'500' }, color:textSecondary } } },
      plugins: { legend: { display: false } },
      animation: { duration: 800 }
    }
  });
}

function buildPriorityGaps() {
  const tv        = TARGET_LEVELS[state.target] || 2;
  const dirSkills = getDirectionSkills();
  const depr      = state.deprioritised || [];
  const el        = document.getElementById('priorityGaps');

  const allGaps = SKILLS.map(s => ({ skill:s, self:state.skills[s.id]||0, gap:tv-(state.skills[s.id]||0) }))
    .filter(g => g.gap > 0).sort((a,b) => b.gap-a.gap);

  if (!allGaps.length) {
    el.innerHTML = '<div style="background:#fff;border:1.5px solid var(--border-default);border-radius:var(--radius-lg);padding:24px;text-align:center"><div style="font-size:32px;margin-bottom:8px">🎉</div><strong>You\'re at or above target in all skills!</strong></div>';
    return;
  }

  // Split into on-path and outside-focus
  const onPath = dirSkills
    ? allGaps.filter(g => dirSkills.includes(g.skill.id) && !depr.includes(g.skill.id))
    : allGaps.filter(g => !depr.includes(g.skill.id));
  const outsideFocus = allGaps.filter(g => !onPath.find(p => p.skill.id === g.skill.id));

  const tv_label = LEVEL_NAMES[Math.round(tv)];
  let html = onPath.slice(0,3).map((g,i) => `
    <div class="priority-card">
      <div class="p-rank">${i+1}</div>
      <div>
        <div class="p-name">${g.skill.name}</div>
        <div class="p-gap">Currently ${LEVEL_NAMES[g.self]||'Not rated'} → Target ${tv_label}</div>
        <div class="p-why">${getRationale(g.skill.id)}</div>
      </div>
    </div>`).join('');

  if (!onPath.length) {
    html = '<div style="padding:16px;text-align:center;color:var(--text-secondary);font-size:var(--text-sm)">No gaps in your chosen direction — great position to be in. See full breakdown below.</div>';
  }

  if (outsideFocus.length && dirSkills) {
    html += `<div class="outside-focus">
      <div class="of-label">Outside your current focus</div>
      <div class="of-chips">${outsideFocus.map(g => `
        <div class="of-chip">
          <span class="of-chip-name">${g.skill.name}</span>
          <span class="of-chip-gap">${LEVEL_NAMES[g.self]||'—'} → ${tv_label}</span>
        </div>`).join('')}
      </div>
      <div class="of-note">These gaps exist but sit outside your stated direction. You can revisit them later.</div>
    </div>`;
  }

  el.innerHTML = html;
}

function getRationale(id) {
  return ({
    'user-research':           'Strong research foundation is the single biggest multiplier for design decisions at any level.',
    'information-architecture':'IA shapes every navigation decision. Weak IA often can\'t be fixed by visual design alone.',
    'interaction-design':      'Interaction craft separates designers who deliver screens from designers who deliver experiences.',
    'visual-design':           'Visual polish signals professionalism and is often the first thing stakeholders respond to.',
    'writing':                 'Microcopy and content strategy are increasingly core designer responsibilities, not handoffs.',
    'service-design':          'Connecting user journeys across touchpoints is essential for senior and lead-level work.',
    'prototyping':             'The ability to make ideas tangible fast accelerates every phase of product development.',
    'frontend-development':    'Designers who can speak in code build significantly stronger relationships with engineering teams.',
    'system-design':           'Design systems thinking is a force multiplier — one decision scales to hundreds of components.',
    'ai-workflow':             'AI fluency is fast becoming a baseline expectation. Designers who use AI well ship more and learn faster.',
    'ai-features':             'Most products now include AI-powered functionality. Knowing how to design for it is a distinct, in-demand skill.',
    'stakeholder-management':  'Your ability to manage stakeholders often determines whether great design actually ships — or gets deprioritised.',
    'storytelling':            'The ability to frame your work as a narrative is what gets design a seat at the table in high-stakes decisions.'
  })[id] || 'Closing this gap will directly support your growth toward your target level.';
}

function buildPathway() {
  const tv        = TARGET_LEVELS[state.target] || 2;
  const dirSkills = getDirectionSkills();
  const depr      = state.deprioritised || [];
  const el        = document.getElementById('learningPathway');

  let skills = SKILLS.filter(s => (state.skills[s.id]||0) < tv);
  if (dirSkills) {
    const onPath = skills.filter(s => dirSkills.includes(s.id) && !depr.includes(s.id));
    skills = onPath.length ? onPath : skills.filter(s => !depr.includes(s.id));
  } else {
    skills = skills.filter(s => !depr.includes(s.id));
  }
  skills = skills.sort((a,b) => (tv-(state.skills[b.id]||0))-(tv-(state.skills[a.id]||0))).slice(0,5);

  if (!skills.length) {
    el.innerHTML = '<div style="padding:20px;text-align:center;font-size:14px;color:var(--text-secondary)">No skill gaps in your chosen direction.</div>';
    return;
  }
  el.innerHTML = skills.map(s => `
    <div class="pw-group">
      <div class="pw-label">${s.name}</div>
      ${(SKILL_RESOURCES[s.id]||[]).map(r => `<div class="pw-item"><span class="pw-dot"></span>${r.title}</div>`).join('')}
    </div>`).join('');
}

function buildBehaviourSummary() {
  const bc = { developing:'badge-developing', practising:'badge-practising', consistent:'badge-consistent' };
  const bn = { developing:'Developing', practising:'Practising', consistent:'Consistent' };
  document.getElementById('behaviourSummary').innerHTML = BEHAVIOURS.map(b => {
    const v = state.behaviours[b.id] || 'developing';
    return `<div class="beh-row"><span>${b.name}</span><span class="badge-pill ${bc[v]}">${bn[v]}</span></div>`;
  }).join('');
}

// ── PDF ──────────────────────────────────────────────────────────
async function downloadPDF() {
  trackEvent('Downloaded assessment PDF', {});
  const btn = document.getElementById('pdfBtn');
  btn.innerHTML = '<span class="loading-spinner"></span> Generating…';
  btn.disabled = true;
  try {
    
    const doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });
    const W=210, H=297, m=18, cW=W-m*2;
    const tv  = TARGET_LEVELS[state.target] || 2;
    // Read the active theme's colors so the PDF matches whichever tokens file is
    // loaded (default purple/yellow, or the training-editorial terracotta/lime override) —
    // jsPDF draws to its own canvas and can't read CSS, so this has to happen once, here.
    const _cs = getComputedStyle(document.documentElement);
    const _rgb = (name, fallback) => {
      let hex = (_cs.getPropertyValue(name) || '').trim().replace('#', '');
      if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
      if (hex.length !== 6) return fallback;
      return [parseInt(hex.substring(0,2),16), parseInt(hex.substring(2,4),16), parseInt(hex.substring(4,6),16)];
    };
    const pu = _rgb('--purple', [107,63,238]), ye = _rgb('--yellow', [245,208,40]);
    const g8 = _rgb('--text-primary', [45,37,70]), g6 = _rgb('--text-secondary', [107,96,132]), g2 = _rgb('--border-default', [224,220,233]);
    const gr=[16,185,129], or_=[217,119,6];

    // ── Pre-compute insights ────────────────────────────────────
    const archetype = getArchetype();
    const readiness = getReadinessScore();
    const calib     = getCalibration();
    const aiRead    = getAIReadiness();
    const strengths = getStrengthSkills();
    const critGap   = getCriticalGap();
    const balance   = getSkillVsBehaviourBalance();
    const bRank     = { developing:0, practising:1, consistent:2 };
    const lowestBeh = [...BEHAVIOURS].sort((a,b)=>(bRank[state.behaviours[a.id]]||0)-(bRank[state.behaviours[b.id]]||0))[0];
    const quickWin  = SKILLS.map(s=>({s,gap:tv-(state.skills[s.id]||0)})).filter(g=>g.gap>0&&g.gap<=1).sort((a,b)=>a.gap-b.gap)[0];
    const topGaps   = SKILLS.map(s=>({skill:s,self:state.skills[s.id]||0,gap:tv-(state.skills[s.id]||0)})).filter(g=>g.gap>0).sort((a,b)=>b.gap-a.gap).slice(0,3);
    const pwSkills  = SKILLS.filter(s=>(state.skills[s.id]||0)<tv).sort((a,b)=>(tv-(state.skills[b.id]||0))-(tv-(state.skills[a.id]||0))).slice(0,5);

    // ── Helpers ────────────────────────────────────────────────
    const archetypeRgb = {
      craftsperson:{ bg:[255,253,232], bd:[245,208,40],  tx:[180,140,0]   },
      researcher:  { bg:[219,234,254], bd:[147,197,253], tx:[37,99,235]   },
      strategist:  { bg:[220,252,231], bd:[134,239,172], tx:[22,163,74]   },
      communicator:{ bg:[252,228,236], bd:[244,143,177], tx:[194,24,91]   },
      influencer:  { bg:[236,254,255], bd:[103,232,249], tx:[8,145,178]   },
      allrounder:  { bg:[234,224,255], bd:[196,181,253], tx:[107,63,238]  }
    };
    function pHead(title) {
      doc.setFillColor(...pu); doc.rect(0,0,W,10,'F');
      doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(255,255,255);
      doc.text(title, m, 7);
    }
    function secHead(label, yPos) {
      doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(...g8);
      doc.text(label, m, yPos);
      doc.setDrawColor(...g2); doc.line(m, yPos+2, W-m, yPos+2);
      return yPos+8;
    }
    const behHints = {
      'customer-understanding':'Talk to one user about a problem you\'re currently designing for',
      'define-success':'Involve cross-functional partners in your next discovery session',
      'measure-outcomes':'Track the metric your next design decision is meant to move',
      'iterate':'Test with a real user before any design goes hi-fi',
      'shared-responsibility':'Schedule a working session with your PM or engineer',
      'transparency':'Write a decision log the next time you make a major design call',
      'learning-agility':'Spend 30 min/week on a new tool or method — then share it'
    };

    // ════════════════════════════════════════════════════════════
    // PAGE 1 — Cover + Radar + Skill Snapshot
    // ════════════════════════════════════════════════════════════
    doc.setFillColor(...pu); doc.rect(0,0,W,38,'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(18); doc.setTextColor(255,255,255);
    doc.text('Product Designer Self-Assessment', m, 17);
    doc.setFont('helvetica','normal'); doc.setFontSize(10);
    doc.text('Prepared by Winnie Nguyen · UX Product Designer & Mentor', m, 28);
    let y=50;
    doc.setFont('helvetica','bold'); doc.setFontSize(22); doc.setTextColor(...g8);
    doc.text(state.name, m, y); y+=9;
    doc.setFont('helvetica','normal'); doc.setFontSize(11); doc.setTextColor(...g6);
    doc.text(state.experience+' experience  ·  Targeting '+state.target+' level', m, y); y+=6;
    doc.setFontSize(9); doc.text('Completed '+new Date().toLocaleDateString('en-AU',{day:'numeric',month:'long',year:'numeric'}), m, y); y+=12;
    const img = document.getElementById('radarChart').toDataURL('image/png',1);
    doc.addImage(img,'PNG', m+(cW-130)/2, y, 130, 90); y+=98;
    doc.setFillColor(...pu); doc.circle(m+3,y-1,2,'F');
    doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(...g6);
    doc.text('Your rating', m+7, y);
    doc.setFillColor(...ye); doc.circle(m+45,y-1,2,'F');
    doc.text('Target ('+state.target+')', m+49, y); y+=12;
    y = secHead('Skill Snapshot', y);
    const colW = cW/3;
    SKILLS.forEach((s,i)=>{
      const sv=state.skills[s.id]||0, gap=tv-sv, xC=m+(i%3)*colW;
      if(i%3===0&&i>0) y+=10;
      doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(...g6);
      doc.text(s.name.substring(0,20), xC, y);
      doc.setFont('helvetica','bold'); doc.setFontSize(9);
      doc.setTextColor(...(gap>0?pu:gr));
      doc.text(LEVEL_NAMES[sv]+(gap>0?' ↑':' ✓'), xC, y+4.5);
    }); y+=16;
    footer(doc,1,W,H,m,g6,pu);

    // ════════════════════════════════════════════════════════════
    // PAGE 2 — Insights Dashboard
    // ════════════════════════════════════════════════════════════
    doc.addPage(); y=m;
    pHead('Insights Dashboard');
    y=18;

    // — Archetype card —
    const ac = archetypeRgb[archetype.id] || archetypeRgb.allrounder;
    doc.setFillColor(...ac.bg); doc.setDrawColor(...ac.bd);
    doc.roundedRect(m, y, cW, 38, 3, 3, 'FD');
    doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(...ac.tx);
    doc.text('YOUR DESIGNER PROFILE', m+6, y+8);
    doc.setFont('helvetica','bold'); doc.setFontSize(15); doc.setTextColor(...ac.tx);
    doc.text(archetype.name, m+6, y+17);
    // Superpower
    doc.setFont('helvetica','bold'); doc.setFontSize(7); doc.setTextColor(...ac.tx);
    doc.text('Superpower:', m+6, y+26);
    doc.setFont('helvetica','normal');
    const spLines = doc.splitTextToSize(archetype.superpower, cW/2-14);
    doc.text(spLines[0]||'', m+6, y+31);
    // Blindspot
    const bsX = m + cW/2 + 2;
    doc.setFont('helvetica','bold'); doc.setFontSize(7); doc.setTextColor(...ac.tx);
    doc.text('Watch out for:', bsX, y+26);
    doc.setFont('helvetica','normal');
    const bsLines = doc.splitTextToSize(archetype.blindspot, cW/2-14);
    doc.text(bsLines[0]||'', bsX, y+31);
    y+=44;

    // — 3 stat boxes —
    const sw = (cW-8)/3;
    const calibLabel = calib==='calibrated'?'Calibrated ✓':calib==='under'?'Under-rated':'Check ratings';
    const calibSub   = calib==='calibrated'?'Ratings match your experience':calib==='under'?'You may be selling yourself short':'Some ratings may be aspirational';
    [
      { label:'CAREER READINESS', value:readiness+'%', sub:'Ready for '+state.target+' level' },
      { label:'EXPERIENCE SIGNAL', value:calibLabel, sub:calibSub },
      { label:'AI READINESS', value:aiRead.label, sub:aiRead.msg.substring(0,55)+'…' }
    ].forEach((st,i)=>{
      const sx = m + i*(sw+4);
      doc.setFillColor(248,247,251); doc.setDrawColor(...g2);
      doc.roundedRect(sx, y, sw, 28, 2, 2, 'FD');
      doc.setFont('helvetica','bold'); doc.setFontSize(7); doc.setTextColor(...g6);
      doc.text(st.label, sx+4, y+7);
      doc.setFont('helvetica','bold'); doc.setFontSize(11); doc.setTextColor(...pu);
      doc.text(st.value, sx+4, y+17);
      doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(...g6);
      doc.text(doc.splitTextToSize(st.sub, sw-8)[0]||'', sx+4, y+23);
    });
    y+=34;

    // — 3 insight cards —
    y = secHead('Key Insights', y);
    const cw3 = (cW-8)/3;

    // Card 1: Where you shine
    doc.setFillColor(240,253,244); doc.setDrawColor(134,239,172);
    doc.roundedRect(m, y, cw3, 40, 2, 2, 'FD');
    doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(22,163,74);
    doc.text('WHERE YOU SHINE', m+4, y+8);
    let cy2=y+16;
    strengths.forEach(s=>{
      doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(...g8);
      doc.text(s.name.substring(0,22), m+4, cy2); cy2+=5;
      doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(...g6);
      const atTgt = (state.skills[s.id]||0) >= tv;
      doc.text(LEVEL_NAMES[state.skills[s.id]||0]+(atTgt?' · At target ✓':' · Strongest'), m+4, cy2); cy2+=7;
    });

    // Card 2: Biggest unlock
    const c2x = m+cw3+4;
    doc.setFillColor(255,251,235); doc.setDrawColor(253,230,138);
    doc.roundedRect(c2x, y, cw3, 40, 2, 2, 'FD');
    doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(...or_);
    doc.text('BIGGEST UNLOCK', c2x+4, y+8);
    if(critGap){
      doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(...g8);
      doc.text(critGap.skill.name.substring(0,20), c2x+4, y+17);
      doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(...or_);
      doc.text((LEVEL_NAMES[critGap.self]||'—')+' → '+(LEVEL_NAMES[Math.round(tv)]||'—'), c2x+4, y+24);
      doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(...g6);
      const rLines = doc.splitTextToSize(getRationale(critGap.skill.id), cw3-8);
      doc.text(rLines.slice(0,2), c2x+4, y+31);
    }

    // Card 3: Skills vs Behaviours
    const c3x = m+(cw3+4)*2;
    doc.setFillColor(239,246,255); doc.setDrawColor(147,197,253);
    doc.roundedRect(c3x, y, cw3, 40, 2, 2, 'FD');
    doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(37,99,235);
    doc.text('SKILLS VS BEHAVIOURS', c3x+4, y+8);
    const barW = cw3-12;
    doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(...g6);
    doc.text('Craft', c3x+4, y+17);
    doc.setFillColor(...g2); doc.rect(c3x+4, y+19, barW, 3, 'F');
    doc.setFillColor(...pu); doc.rect(c3x+4, y+19, barW*(balance.skillPct/100), 3, 'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(7); doc.setTextColor(...pu);
    doc.text(balance.skillPct+'%', c3x+cw3-4, y+21, {align:'right'});
    doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(...g6);
    doc.text('Behaviours', c3x+4, y+28);
    doc.setFillColor(...g2); doc.rect(c3x+4, y+30, barW, 3, 'F');
    doc.setFillColor(245,208,40); doc.rect(c3x+4, y+30, barW*(balance.behPct/100), 3, 'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(7); doc.setTextColor(180,140,0);
    doc.text(balance.behPct+'%', c3x+cw3-4, y+32, {align:'right'});
    const bMsg = {'high-skills':'Craft ahead — build influence.','high-behaviours':'Maturity strong — close craft gaps.','both-low':'Focus on fundamentals first.','both-high':'Strong across both — ready to level up.','balanced':'Good balance — keep building both.'}[balance.type];
    doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(...g6);
    doc.text(doc.splitTextToSize(bMsg, cw3-8)[0]||'', c3x+4, y+38);
    y+=46;

    // — One-level-up plan —
    y = secHead('If You Only Do 3 Things', y);
    const plans = [
      critGap   ? { icon:'📚', type:'Practice this skill',       text:critGap.skill.name,  hint:(SKILL_RESOURCES[critGap.skill.id]||[])[0]?.title||'Take on one focused project in this area' } : null,
      lowestBeh ? { icon:'🎯', type:'Strengthen this behaviour',  text:lowestBeh.name,      hint:behHints[lowestBeh.id]||'Make this a deliberate habit in your next sprint' } : null,
      quickWin  ? { icon:'⚡', type:'Quick win',                  text:quickWin.s.name,     hint:'You\'re close — one real project will close this gap' } : null
    ].filter(Boolean);
    const pw3 = (cW-8)/3;
    plans.forEach((p,i)=>{
      const px = m + i*(pw3+4);
      doc.setFillColor(248,247,251); doc.setDrawColor(...g2);
      doc.roundedRect(px, y, pw3, 26, 2, 2, 'FD');
      doc.setFont('helvetica','bold'); doc.setFontSize(7); doc.setTextColor(...pu);
      doc.text(p.type.toUpperCase(), px+4, y+7);
      doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(...g8);
      doc.text(p.text.substring(0,22), px+4, y+14);
      doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(...g6);
      doc.text(doc.splitTextToSize(p.hint, pw3-8)[0]||'', px+4, y+20);
    });
    y+=32;
    footer(doc,2,W,H,m,g6,pu);

    // ════════════════════════════════════════════════════════════
    // PAGE 3 — Learning Pathway
    // ════════════════════════════════════════════════════════════
    doc.addPage(); y=m;
    pHead('Your Personalised Learning Pathway');
    y=18;

    // — Top 3 priority gaps —
    y = secHead('Top Areas to Focus', y);
    topGaps.forEach((g,i)=>{
      doc.setFillColor(248,247,251); doc.setDrawColor(...g2);
      doc.roundedRect(m, y, cW, 24, 2, 2, 'FD');
      // rank circle
      doc.setFillColor(...pu); doc.circle(m+7, y+12, 4.5, 'F');
      doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(255,255,255);
      doc.text(String(i+1), m+7, y+15, {align:'center'});
      // skill + gap
      doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(...g8);
      doc.text(g.skill.name, m+16, y+9);
      doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(...pu);
      doc.text((LEVEL_NAMES[g.self]||'Not rated')+'  →  '+(LEVEL_NAMES[Math.round(tv)]||'')+' needed', m+16, y+16);
      // rationale — right column
      doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(...g6);
      const rLines = doc.splitTextToSize(getRationale(g.skill.id), cW-100);
      rLines.slice(0,2).forEach((ln,li)=> doc.text(ln, m+100, y+9+li*5));
      y+=28;
    });
    y+=6;

    // — Resources —
    y = secHead('Recommended Resources', y);
    pwSkills.forEach(s=>{
      const resources = SKILL_RESOURCES[s.id]||[];
      if(!resources.length) return;
      doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(...pu);
      doc.text(s.name, m, y); y+=5;
      resources.forEach(r=>{
        doc.setFillColor(234,224,255); doc.roundedRect(m, y, cW, 8, 1, 1, 'F');
        doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(...g8);
        doc.text('› '+r.title, m+4, y+5.5);
        y+=10;
      });
      y+=4;
    });
    footer(doc,3,W,H,m,g6,pu);

    // ════════════════════════════════════════════════════════════
    // PAGE 4 — Full Skill Breakdown + Behaviours
    // ════════════════════════════════════════════════════════════
    doc.addPage(); y=m;
    pHead('Core Skills — Full Assessment');
    y=18;
    [['SKILL',m],['SELF',m+90],['TARGET',m+125],['GAP',m+158]].forEach(([t,x])=>{
      doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(...g6); doc.text(t,x,y);
    }); y+=3;
    doc.setDrawColor(...g2); doc.line(m,y,W-m,y); y+=5;
    SKILLS.forEach((s,i)=>{
      const sv=state.skills[s.id]||0, gap=tv-sv;
      if(i%2===0){doc.setFillColor(248,247,251); doc.rect(m-2,y-3.5,cW+4,9,'F');}
      doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(...g8);
      doc.text(s.name, m, y); doc.text(LEVEL_NAMES[sv]||'—', m+90, y); doc.text(LEVEL_NAMES[Math.round(tv)]||'—', m+125, y);
      doc.setTextColor(...(gap>0?pu:gr)); doc.text(gap>0?'+'+gap.toFixed(1):'✓', m+158, y); y+=9;
    });
    y+=8; doc.setDrawColor(...g2); doc.line(m,y,W-m,y); y+=8;
    doc.setFont('helvetica','bold'); doc.setFontSize(11); doc.setTextColor(...g8);
    doc.text('Operating Behaviours', m, y); y+=6;
    BEHAVIOURS.forEach((b,i)=>{
      const v=state.behaviours[b.id]||'developing';
      if(i%2===0){doc.setFillColor(248,247,251); doc.rect(m-2,y-3.5,cW+4,9,'F');}
      doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(...g8); doc.text(b.name,m,y);
      doc.setFont('helvetica','bold'); doc.setTextColor(...pu);
      doc.text({developing:'Developing',practising:'Practising',consistent:'Consistent'}[v], m+100, y); y+=9;
    });
    footer(doc,4,W,H,m,g6,pu);

    // ════════════════════════════════════════════════════════════
    // PAGE 5 — Coaching Notes (only if any were captured)
    // ════════════════════════════════════════════════════════════
    const noteItems = [
      ...SKILLS.map(s=>({ id:s.id, name:s.name, note:(state.notes[s.id]||'').trim(), level:LEVEL_NAMES[state.skills[s.id]||0]||'Not rated' })),
      ...BEHAVIOURS.map(b=>({ id:b.id, name:b.name, note:(state.notes[b.id]||'').trim(), level:({developing:'Developing',practising:'Practising',consistent:'Consistent'}[state.behaviours[b.id]])||'Not rated' }))
    ].filter(x=>x.note);
    const adviceById = {}; getPlaybookMatches().forEach(a=>{ adviceById[a.sourceId]=a; });
    let pageNo = 4;
    if (noteItems.length) {
      doc.addPage(); pageNo=5; y=m;
      pHead('Your Notes'); y=20;
      doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(...g6);
      doc.text('The context you added while rating each area — with tailored advice where it applies.', m, y); y+=8;

      noteItems.forEach(x=>{
        const a = adviceById[x.id];
        const noteLines = doc.splitTextToSize(x.note, cW-4);
        let diagLines=[], moveLines=[], planLines=[];
        let blockH = 12 + noteLines.length*4.6 + 6;
        if (a) {
          diagLines = doc.splitTextToSize(a.diagnosis, cW-4);
          moveLines = a.moves.map(mv=>doc.splitTextToSize('•  '+mv, cW-8));
          planLines = doc.splitTextToSize('In your plan: '+a.plan, cW-14);
          blockH += 8 + diagLines.length*4.4 + 6 + moveLines.reduce((s,l)=>s+l.length*4.4,0) + 6 + planLines.length*4.4 + 8;
        }
        if (y + blockH > H-18) { footer(doc,pageNo,W,H,m,g6,pu); doc.addPage(); pageNo++; y=m; pHead('Your Notes'); y=20; }

        doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(...g8);
        doc.text(x.name, m, y);
        doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(...pu);
        doc.text(x.level, W-m, y, {align:'right'}); y+=6;
        doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(...g6);
        noteLines.forEach(ln=>{ doc.text(ln, m, y); y+=4.6; });

        if (a) {
          y+=3;
          doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(...pu);
          doc.text(a.theme, m, y); y+=5.5;
          doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(...g6);
          diagLines.forEach(ln=>{ doc.text(ln, m, y); y+=4.4; }); y+=2;
          doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(...g8); doc.text('Try this:', m, y); y+=5;
          doc.setFont('helvetica','normal'); doc.setTextColor(...g6);
          moveLines.forEach(lines=>{ lines.forEach(ln=>{ doc.text(ln, m+2, y); y+=4.4; }); }); y+=2;
          doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(...g8);
          doc.text('Grows: ', m, y); doc.setFont('helvetica','normal'); doc.setTextColor(...g6); doc.text(a.skills, m+14, y); y+=5;
          doc.setFont('helvetica','bold'); doc.setTextColor(...g8); doc.text('Resource: ', m, y); doc.setFont('helvetica','normal'); doc.setTextColor(...g6); doc.text(a.resource, m+19, y); y+=6;
          doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(...pu);
          planLines.forEach(ln=>{ doc.text(ln, m, y); y+=4.4; });
          y+=4;
        }

        y+=3; doc.setDrawColor(...g2); doc.line(m, y, W-m, y); y+=7;
      });
      footer(doc,pageNo,W,H,m,g6,pu);
    }

    doc.save('design-assessment-'+(state.name||'results').replace(/[^a-z0-9]/gi,'-').toLowerCase()+'.pdf');
  } catch(e) { console.error(e); alert('PDF generation failed. Try again.'); }
  finally { btn.innerHTML='⬇ Save My Results — Download PDF'; btn.disabled=false; }
}

function footer(doc,p,W,H,m,g6,pu) {
  doc.setDrawColor(224,220,233); doc.line(m,H-14,W-m,H-14);
  doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(...g6);
  doc.text('Winnie Nguyen · UX Product Designer & Mentor',m,H-8);
  doc.setTextColor(...pu); doc.text('Page '+p,W-m,H-8,{align:'right'});
}

// ── INIT ─────────────────────────────────────────────────────────
export function init() {
  // Opened via a shared/revisited results link (?r=...) — decode it and
  // jump straight to the report, skipping the quiz entirely.
  const sharedCode = new URLSearchParams(location.search).get('r');
  if (sharedCode) {
    const decoded = decodeReportState(sharedCode);
    if (decoded) {
      state = { name:'', email:'', experience:'', target:'', skills:{}, behaviours:{}, directions:[], deprioritised:[], notes:{}, ...decoded };
      buildResults();
      showScreen('screen-results');
      setGlobalProgress(100);
      return;
    }
  }

  const has = loadState();
  if (has && state.name) {
    restoreForm();
    document.getElementById('resumeBanner').style.display = 'flex';
  }
  // Live floating label for selects
  document.querySelectorAll('.select-field__input').forEach(sel => {
    sel.addEventListener('change', () => {
      sel.classList.toggle('has-value', !!sel.value);
    });
  });
}

export const getState = () => state
export { startAssessment, prevQuestion, nextQuestion, backToQuestions, submitDirection, downloadPDF, openShareModal, copyShareLink, clearAndRestart, trackEvent, selectDirection, toggleDepr }

// Some buttons are created as HTML strings while the results are built (direction cards, program links),
// and their inline onclick handlers look these functions up on window.
Object.assign(window, { selectDirection, toggleDepr, trackEvent })
