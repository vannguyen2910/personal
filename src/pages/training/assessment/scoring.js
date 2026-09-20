import { SKILLS, BEHAVIOURS, DIRECTIONS, TARGET_LEVELS, PLAYBOOK, ARCHETYPES, RATIONALES, DEFAULT_RATIONALE } from './data.js'

// Scoring and matching for the results. Every function takes the quiz state as its argument and changes nothing.

export function getDirectionSkills(state) {
  const dirs = (state.directions||[]).map(id => DIRECTIONS.find(d => d.id === id)).filter(Boolean);
  if (!dirs.length) return null;
  return [...new Set(dirs.flatMap(d => d.skills))];
}

export function getPlaybookMatches(state) {
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

export function getArchetype(state) {
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

export function getReadinessScore(state) {
  const tv = TARGET_LEVELS[state.target] || 2;
  const skillScore = SKILLS.reduce((sum,s) => sum + Math.min((state.skills[s.id]||0)/tv, 1), 0) / SKILLS.length;
  const bMap = { developing:0, practising:0.5, consistent:1 };
  const behScore = BEHAVIOURS.reduce((sum,b) => sum + (bMap[state.behaviours[b.id]]||0), 0) / BEHAVIOURS.length;
  return Math.round((skillScore * 0.7 + behScore * 0.3) * 100);
}

export function getCalibration(state) {
  const avgSkill = SKILLS.reduce((s,sk) => s + (state.skills[sk.id]||0), 0) / SKILLS.length;
  const expRanges = { '0–1 years':[0,1.8], '1–3 years':[0.8,2.5], '3–5 years':[1.5,3.0], '5–10 years':[2.0,3.5], '10+ years':[2.5,4.0] };
  const range = expRanges[state.experience];
  if (!range) return 'calibrated';
  if (avgSkill < range[0]) return 'under';
  if (avgSkill > range[1]) return 'over';
  return 'calibrated';
}

export function getStrengthSkills(state) {
  const tv = TARGET_LEVELS[state.target] || 2;
  const atOrAbove = SKILLS.filter(s => (state.skills[s.id]||0) >= tv);
  if (atOrAbove.length >= 1) return atOrAbove.slice(0,2);
  return [...SKILLS].sort((a,b) => (state.skills[b.id]||0)-(state.skills[a.id]||0)).slice(0,2);
}

export function getCriticalGap(state) {
  const tv        = TARGET_LEVELS[state.target] || 2;
  const dirSkills = getDirectionSkills(state);
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

export function getAIReadiness(state) {
  const avg = ((state.skills['ai-workflow']||0) + (state.skills['ai-features']||0)) / 2;
  if (avg >= 3) return { label:'AI Ready', dot:'#16A34A', msg:'You\'re integrating AI into your practice — this puts you ahead of most designers right now.' };
  if (avg >= 2) return { label:'AI Growing', dot:'#D97706', msg:'You\'re building AI skills. Deepening your practice here will become a clear differentiator.' };
  return { label:'AI Early', dot:'#6B3FEE', msg:'AI fluency is fast becoming a baseline expectation. This is a high-leverage area to build next.' };
}

export function getSkillVsBehaviourBalance(state) {
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

export function getRationale(id) {
  return RATIONALES[id] || DEFAULT_RATIONALE
}

export function hexToRgba(hex, alpha) {
  hex = (hex || '').trim().replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  if (hex.length !== 6) return `rgba(107,63,238,${alpha})`;
  const r = parseInt(hex.substring(0,2), 16), g = parseInt(hex.substring(2,4), 16), b = parseInt(hex.substring(4,6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
