import { SKILLS, BEHAVIOURS, TARGET_LEVELS, LEVEL_NAMES, SKILL_RESOURCES, PROGRAMS } from '../data.js'
import { getDirectionSkills, getRationale, getPlaybookMatches } from '../scoring.js'
import { trackEvent } from '../engine.js'

export function PriorityGaps({ s }) {
  const tv = TARGET_LEVELS[s.target] || 2
  const dirSkills = getDirectionSkills(s)
  const depr = s.deprioritised || []
  const allGaps = SKILLS.map((sk) => ({ skill: sk, self: s.skills[sk.id] || 0, gap: tv - (s.skills[sk.id] || 0) }))
    .filter((g) => g.gap > 0).sort((a, b) => b.gap - a.gap)

  if (!allGaps.length) {
    return (
      <div id="priorityGaps">
        <div style={{ background: '#fff', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎉</div>
          <strong>You're at or above target in all skills!</strong>
        </div>
      </div>
    )
  }

  // gaps inside the chosen direction come first; the rest are shown separately
  const onPath = dirSkills
    ? allGaps.filter((g) => dirSkills.includes(g.skill.id) && !depr.includes(g.skill.id))
    : allGaps.filter((g) => !depr.includes(g.skill.id))
  const outsideFocus = allGaps.filter((g) => !onPath.find((p) => p.skill.id === g.skill.id))
  const tvLabel = LEVEL_NAMES[Math.round(tv)]

  return (
    <div id="priorityGaps">
      {onPath.length ? onPath.slice(0, 3).map((g, i) => (
        <div className="priority-card" key={g.skill.id}>
          <div className="p-rank">{i + 1}</div>
          <div>
            <div className="p-name">{g.skill.name}</div>
            <div className="p-gap">Currently {LEVEL_NAMES[g.self] || 'Not rated'} → Target {tvLabel}</div>
            <div className="p-why">{getRationale(g.skill.id)}</div>
          </div>
        </div>
      )) : (
        <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
          No gaps in your chosen direction — great position to be in. See full breakdown below.
        </div>
      )}
      {outsideFocus.length > 0 && dirSkills && (
        <div className="outside-focus">
          <div className="of-label">Outside your current focus</div>
          <div className="of-chips">
            {outsideFocus.map((g) => (
              <div className="of-chip" key={g.skill.id}>
                <span className="of-chip-name">{g.skill.name}</span>
                <span className="of-chip-gap">{LEVEL_NAMES[g.self] || '—'} → {tvLabel}</span>
              </div>
            ))}
          </div>
          <div className="of-note">These gaps exist but sit outside your stated direction. You can revisit them later.</div>
        </div>
      )}
    </div>
  )
}

export function LearningPathway({ s }) {
  const tv = TARGET_LEVELS[s.target] || 2
  const dirSkills = getDirectionSkills(s)
  const depr = s.deprioritised || []
  let skills = SKILLS.filter((sk) => (s.skills[sk.id] || 0) < tv)
  if (dirSkills) {
    const onPath = skills.filter((sk) => dirSkills.includes(sk.id) && !depr.includes(sk.id))
    skills = onPath.length ? onPath : skills.filter((sk) => !depr.includes(sk.id))
  } else {
    skills = skills.filter((sk) => !depr.includes(sk.id))
  }
  skills = skills.sort((a, b) => (tv - (s.skills[b.id] || 0)) - (tv - (s.skills[a.id] || 0))).slice(0, 5)

  return (
    <div id="learningPathway" className="pathway-wrap">
      {skills.length ? skills.map((sk) => (
        <div className="pw-group" key={sk.id}>
          <div className="pw-label">{sk.name}</div>
          {(SKILL_RESOURCES[sk.id] || []).map((r) => (
            <div className="pw-item" key={r.title}><span className="pw-dot"></span>{r.title}</div>
          ))}
        </div>
      )) : (
        <div style={{ padding: '20px', textAlign: 'center', fontSize: '14px', color: 'var(--text-secondary)' }}>No skill gaps in your chosen direction.</div>
      )}
    </div>
  )
}

const BEHAVIOUR_BADGE = { developing: 'badge-developing', practising: 'badge-practising', consistent: 'badge-consistent' }
const BEHAVIOUR_NAME = { developing: 'Developing', practising: 'Practising', consistent: 'Consistent' }

export function BehaviourSummary({ s }) {
  return (
    <div id="behaviourSummary" className="beh-summary">
      {BEHAVIOURS.map((b) => {
        const v = s.behaviours[b.id] || 'developing'
        return (
          <div className="beh-row" key={b.id}><span>{b.name}</span><span className={`badge-pill ${BEHAVIOUR_BADGE[v]}`}>{BEHAVIOUR_NAME[v]}</span></div>
        )
      })}
    </div>
  )
}

// The student's own notes, with matching coaching advice attached under the note that triggered it.
export function CoachingNotes({ s }) {
  const items = [
    ...SKILLS.map((sk) => ({ id: sk.id, name: sk.name, note: (s.notes[sk.id] || '').trim(), level: LEVEL_NAMES[s.skills[sk.id] || 0] || 'Not rated' })),
    ...BEHAVIOURS.map((b) => ({ id: b.id, name: b.name, note: (s.notes[b.id] || '').trim(), level: BEHAVIOUR_NAME[s.behaviours[b.id]] || 'Not rated' })),
  ].filter((x) => x.note)
  if (!items.length) {
    return (
      <>
        <div className="res-section-head" id="coachingNotesHead" style={{ display: 'none' }}>
          <h3>Your notes</h3>
          <p>The context and examples you added — with tailored advice where a note points to something specific.</p>
        </div>
        <div id="coachingNotes"></div>
      </>
    )
  }
  const matchById = {}
  getPlaybookMatches(s).forEach((m) => { matchById[m.sourceId] = m })
  return (
    <>
      <div className="res-section-head" id="coachingNotesHead">
        <h3>Your notes</h3>
        <p>The context and examples you added — with tailored advice where a note points to something specific.</p>
      </div>
      <div id="coachingNotes">
        {items.map((x) => {
          const m = matchById[x.id]
          return (
            <div className={`cn-item${m ? ' has-advice' : ''}`} key={x.id}>
              <div className="cn-skill">{x.name}</div>
              <div className="cn-level">{x.level}</div>
              <div className="cn-note">{x.note}</div>
              {m && (
                <div className="cn-advice">
                  <div className="cn-advice-theme">🗣️ {m.theme}</div>
                  <div className="cn-advice-diag">{m.diagnosis}</div>
                  <div className="cn-advice-movelabel">Try this</div>
                  <ul className="cn-advice-moves">{m.moves.map((mv) => <li key={mv}>{mv}</li>)}</ul>
                  <div className="cn-advice-meta"><div><strong>Grows:</strong> {m.skills}</div><div><strong>Resource:</strong> {m.resource}</div></div>
                  <div className="cn-advice-plan"><strong>In your plan:</strong> {m.plan}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

const PROGRAM_VISUALS = {
  beginner: <><span className="pc-ring"></span><span className="spc-core"></span></>,
  steps: <><span className="pc-ring"></span><span className="pc-steps"><span className="pc-step"></span><span className="pc-step"></span><span className="pc-step"></span></span><span className="pc-climber"></span></>,
  senior: <><span className="pc-ring"></span><span className="spc-ring2"></span><span className="spc-ring3"></span><span className="spc-core"></span><span className="spc-pulse"></span></>,
  ai: <><span className="pc-ring"></span><span className="ppc-blob"></span><span className="ppc-phone"><span className="ppc-line-1"></span><span className="ppc-line-2"></span></span><svg className="ppc-spark" viewBox="0 0 24 24" width="12" height="12"><path d="M12 0 C12 6 14 10 20 12 C14 14 12 18 12 24 C12 18 10 14 4 12 C10 10 12 6 12 0 Z" /></svg></>,
}

// Programs that fit this student. A student can match more than one.
export function RecommendedPrograms({ s }) {
  const programs = PROGRAMS.filter((p) => p.matches(s))
  if (!programs.length) return <div id="recommendedProgram"></div>
  return (
    <div id="recommendedProgram">
      <div className="res-section-head">
        <h3>Recommended for you</h3>
        <p>A structured way to close these gaps — not just a list of resources.</p>
      </div>
      <div className="programs-grid">
        {programs.map((program) => (
          <a href={program.href} className="program-card" key={program.href}
            onClick={() => trackEvent('Clicked recommended program', { program: program.title, href: program.href })}>
            <div className="program-card-visual" aria-hidden="true">{PROGRAM_VISUALS[program.visual] || PROGRAM_VISUALS.steps}</div>
            <div className="program-card-body">
              <div className="program-card-tags">
                <span className="program-card-tag">{program.tag}</span>
                <span className={`program-card-level ${program.level}`}>{program.levelLabel}</span>
              </div>
              <h3>{program.title}</h3>
              <p>{program.desc}</p>
              <span className="program-card-link">View program</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
