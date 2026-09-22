import { jsPDF } from 'jspdf'
import {
  SKILLS, BEHAVIOURS, SKILL_RESOURCES, DIRECTIONS, TARGET_LEVELS, LEVEL_NAMES, TOTAL_Q, PROGRAMS,
} from './data.js'
import * as scoring from './scoring.js'
import { publishResults } from './results/store.js'
import { resizeRadar } from './results/RadarCard.jsx'

// ── STATE ────────────────────────────────────────────────────────
const STORAGE_KEY = 'winnie_assessment_v4';
let state = { name:'', email:'', experience:'', target:'', skills:{}, behaviours:{}, directions:[], deprioritised:[], notes:{} };
let questionIndex = 0;
let currentScreenId = 'screen-0';

// Scoring helpers bound to the current quiz state (the PDF export and the "completed" event use them).
const getDirectionSkills = () => scoring.getDirectionSkills(state);
const getPlaybookMatches = () => scoring.getPlaybookMatches(state);
const getArchetype = () => scoring.getArchetype(state);
const getReadinessScore = () => scoring.getReadinessScore(state);
const getCalibration = () => scoring.getCalibration(state);
const getStrengthSkills = () => scoring.getStrengthSkills(state);
const getCriticalGap = () => scoring.getCriticalGap(state);
const getAIReadiness = () => scoring.getAIReadiness(state);
const getSkillVsBehaviourBalance = () => scoring.getSkillVsBehaviourBalance(state);
const getRationale = scoring.getRationale;

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
// A finished report is saved to a small free Google Apps Script + Sheet
// store (see REPORT_STORE_URL) and the link just carries the short code it
// hands back, not the report itself — so the link stays a few dozen
// characters no matter how much someone writes in their notes.
// Email is left out of what's saved: it's never shown in the report itself.
// Notes are left out too: they're free text that shaped this person's own
// coaching-advice matching (still on their downloaded PDF) — keeping them
// out of the shared store means a stranger's personal answers are never
// sitting behind a link someone else could open.
const REPORT_STORE_URL = 'https://script.google.com/macros/s/AKfycbw3o9agEjhiv0UXX0mAZ_VyCuTwz6D45uN_GtN7ERP0Ti4uTR9r9gP7q0cdHoq1sjlg/exec';

async function saveReportState(s) {
  const payload = {
    name: s.name, experience: s.experience, target: s.target,
    skills: s.skills, behaviours: s.behaviours,
    directions: s.directions, deprioritised: s.deprioritised,
    completedAt: s.completedAt
  };
  try {
    const res = await fetch(REPORT_STORE_URL, { method: 'POST', body: JSON.stringify(payload) });
    const out = await res.json();
    return out.code || null;
  } catch (e) {
    console.error('Could not save results to the report store', e);
    return null;
  }
}

// Earlier versions of this tool packed the whole report into the code itself
// (a long base64 blob) instead of saving it and handing back a short code.
// Those already-shared links must keep working, so anything longer than a
// short store code is decoded locally the old way instead of looked up.
function decodeLegacyReportState(code) {
  try {
    let b64 = code.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    const json = decodeURIComponent(Array.prototype.map.call(atob(b64),
      c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(json);
  } catch (e) {
    console.error('Could not read legacy results link', e);
    return null;
  }
}

async function loadReportState(code) {
  if (code.length > 20) return decodeLegacyReportState(code);
  try {
    const res = await fetch(REPORT_STORE_URL + '?code=' + encodeURIComponent(code));
    const out = await res.json();
    if (out.error) { console.error('Could not read results from link:', out.error); return null; }
    return out.data;
  } catch (e) {
    console.error('Could not read results from link', e);
    return null;
  }
}

// The report save is fire-and-forget from submitDirection so results render
// instantly; this lets the share dialog wait for it if someone clicks
// "Copy Link" in the brief window before the short code comes back, instead
// of showing a link with no report attached to it. Only set on a fresh
// completion — null when viewing a revisited link, whose URL is already correct.
let pendingSave = null;

async function openShareModal() {
  const label = document.getElementById('shareCopyLabel');
  label.textContent = 'Copy';
  document.getElementById('shareDialog').classList.add('open');
  document.getElementById('shareLinkInput').value = pendingSave ? 'Preparing your link…' : location.href;
  if (pendingSave) {
    await pendingSave;
    document.getElementById('shareLinkInput').value = location.href;
  }
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
  // The radar chart may have been drawn while this screen was hidden; let it re-measure.
  if (id === 'screen-results') resizeRadar();
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
  pendingSave = finishNewReport().finally(() => { pendingSave = null; });
}

// Saves a newly finished report to the store, swaps the address bar over to
// the short link once it comes back, then sends the "completed" tracking
// email with that link. Fire-and-forget from submitDirection so the results
// screen renders instantly and doesn't wait on the network round-trip.
// Only called for a fresh completion — never from init()'s revisit path,
// otherwise reopening a shared link would save a duplicate copy every time.
async function finishNewReport() {
  const code = await saveReportState(state);
  if (code) {
    state.shareCode = code;
    history.replaceState(null, '', location.pathname + '?r=' + code);
  }
  const dirNames = (state.directions||[]).map(id => (DIRECTIONS.find(d => d.id === id)||{}).name).filter(Boolean).join(', ');
  trackEvent('Self-assessment completed', {
    archetype: getArchetype().name,
    readiness_score: getReadinessScore() + '%',
    directions: dirNames,
    results_link: code ? (location.origin + location.pathname + '?r=' + code) : '(link unavailable — report store failed)'
  });
}

// ── RESULTS ──────────────────────────────────────────────────────

// The results themselves are drawn by the React components in ./results. This just records when the
// quiz was finished and hands the answers over to them.
function buildResults() {
  if (!state.completedAt) state.completedAt = Date.now();
  publishResults(state);
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
export async function init() {
  // Opened via a shared/revisited results link (?r=...) — look it up (or
  // decode it locally if it's an old-style long link) and jump straight to
  // the report, skipping the quiz entirely.
  const sharedCode = new URLSearchParams(location.search).get('r');
  if (sharedCode) {
    const decoded = await loadReportState(sharedCode);
    if (decoded) {
      state = { name:'', email:'', experience:'', target:'', skills:{}, behaviours:{}, directions:[], deprioritised:[], notes:{}, ...decoded, shareCode: sharedCode };
      buildResults();
      showScreen('screen-results');
      setGlobalProgress(100);
      return;
    }
    // Bad or expired code — fall through to the normal start screen below.
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
