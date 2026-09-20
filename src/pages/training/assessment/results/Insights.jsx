import {
  SKILLS, BEHAVIOURS, TARGET_LEVELS, LEVEL_NAMES, SKILL_RESOURCES, BEHAVIOUR_ACTIONS, CALIBRATION_CONTENT, BALANCE_MESSAGES,
} from '../data.js'
import {
  getArchetype, getReadinessScore, getCalibration, getAIReadiness, getStrengthSkills, getCriticalGap,
  getSkillVsBehaviourBalance, getRationale,
} from '../scoring.js'

export function ArchetypeCard({ s }) {
  const a = getArchetype(s)
  return (
    <div className="archetype-card" style={{ background: a.bg, borderColor: a.border }}>
      <div className="archetype-emoji">{a.emoji}</div>
      <div style={{ flex: 1 }}>
        <div className="archetype-label" style={{ color: a.color }}>Your designer profile</div>
        <div className="archetype-name" style={{ color: a.color }}>{a.name}</div>
        <div className="archetype-row">
          <div className="archetype-tag" style={{ color: a.color, background: 'rgba(0,0,0,0.07)' }}>
            <span>Superpower</span>{a.superpower}
          </div>
          <div className="archetype-tag" style={{ color: a.color, background: 'rgba(0,0,0,0.07)' }}>
            <span>Watch out for</span>{a.blindspot}
          </div>
        </div>
      </div>
    </div>
  )
}

export function StatCards({ s }) {
  const readiness = getReadinessScore(s)
  const readColor = readiness >= 75 ? 'var(--success-deep)' : readiness >= 50 ? 'var(--purple)' : 'var(--warning-deep)'
  const calib = getCalibration(s)
  const calibContent = CALIBRATION_CONTENT[calib]
  const aiRead = getAIReadiness(s)
  return (
    <div className="insight-stats">
      <div className="insight-stat" id="insightReadiness">
        <div className="is-label">Career readiness</div>
        <div className="is-value" style={{ color: readColor }}>{readiness}%</div>
        <div className="is-sub">Ready for <strong>{s.target}</strong> level right now</div>
      </div>
      <div className="insight-stat" id="insightCalibration">
        <div className="is-label">Experience signal</div>
        <div className="is-signal" style={{ marginBottom: '6px' }}>
          <div className="is-signal-dot" style={{ background: calibContent.dot }}></div>
          <strong style={{ fontSize: 'var(--text-base)' }}>
            {calib === 'calibrated' ? 'Well calibrated' : calib === 'under' ? 'Possibly under-rated' : 'Check your ratings'}
          </strong>
        </div>
        <div className="is-sub">{calibContent.msg}</div>
      </div>
      <div className="insight-stat" id="insightAIReadiness">
        <div className="is-label">AI readiness</div>
        <div className="is-signal" style={{ marginBottom: '6px' }}>
          <div className="is-signal-dot" style={{ background: aiRead.dot }}></div>
          <strong style={{ fontSize: 'var(--text-base)' }}>{aiRead.label}</strong>
        </div>
        <div className="is-sub">{aiRead.msg}</div>
      </div>
    </div>
  )
}

export function InsightCards({ s }) {
  const tv = TARGET_LEVELS[s.target] || 2
  const strengths = getStrengthSkills(s)
  const critGap = getCriticalGap(s)
  const balance = getSkillVsBehaviourBalance(s)
  return (
    <div className="insight-cards" id="insightCards">
      <div className="insight-card" style={{ borderTopColor: 'var(--success)' }}>
        <div className="ic-label">✦ Where you shine</div>
        <div className="ic-skills">
          {strengths.length ? strengths.map((sk) => {
            const self = s.skills[sk.id] || 0
            const atTarget = self >= tv
            return (
              <div className="ic-skill" key={sk.id}>
                {sk.name}
                <div className="ic-skill-sub">{LEVEL_NAMES[self]} {atTarget ? '· At target ✓' : '· Your strongest'}</div>
              </div>
            )
          }) : <div className="ic-value">Keep building — you're making progress.</div>}
        </div>
      </div>
      <div className="insight-card" style={{ borderTopColor: 'var(--warning)' }}>
        <div className="ic-label">⚠ Biggest unlock</div>
        {critGap ? (
          <>
            <div className="ic-skill">{critGap.skill.name}</div>
            <div className="ic-skill-sub" style={{ color: 'var(--warning-deep)', fontWeight: 600 }}>
              {LEVEL_NAMES[critGap.self] || 'Not rated'} → {LEVEL_NAMES[Math.round(tv)]} needed
            </div>
            <div className="ic-value" style={{ marginTop: '4px' }}>{getRationale(critGap.skill.id)}</div>
          </>
        ) : <div className="ic-value">You're at or above target in all skills! 🎉</div>}
      </div>
      <div className="insight-card" style={{ borderTopColor: 'var(--info)' }}>
        <div className="ic-label">⚖ Skills vs Behaviours</div>
        <div className="ic-bar-wrap">
          <div className="ic-bar-row">
            <span style={{ width: '60px' }}>Craft</span>
            <div className="ic-bar-bg"><div className="ic-bar-fill" style={{ width: `${balance.skillPct}%`, background: 'var(--purple)' }}></div></div>
            <div className="ic-bar-pct">{balance.skillPct}%</div>
          </div>
          <div className="ic-bar-row">
            <span style={{ width: '60px' }}>Behaviours</span>
            <div className="ic-bar-bg"><div className="ic-bar-fill" style={{ width: `${balance.behPct}%`, background: 'var(--yellow-deep)' }}></div></div>
            <div className="ic-bar-pct">{balance.behPct}%</div>
          </div>
        </div>
        <div className="ic-value">{BALANCE_MESSAGES[balance.type]}</div>
      </div>
    </div>
  )
}

const iconProps = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

function ActionItem({ tint, icon, type, text, hint }) {
  return (
    <div className="olu-item">
      <div className="olu-icon" style={{ background: tint }}><svg {...iconProps}>{icon}</svg></div>
      <div className="olu-body">
        <div className="olu-type">{type}</div>
        <div className="olu-text">{text}</div>
        <div className="olu-hint">{hint}</div>
      </div>
    </div>
  )
}

// "If you only do 3 things": one skill to practise, one behaviour to strengthen, one quick win.
export function OneLevelUp({ s }) {
  const tv = TARGET_LEVELS[s.target] || 2
  const critGap = getCriticalGap(s)
  const bRank = { developing: 0, practising: 1, consistent: 2 }
  const lowestBeh = [...BEHAVIOURS].sort((a, b) => (bRank[s.behaviours[a.id]] || 0) - (bRank[s.behaviours[b.id]] || 0))[0]
  const quickWinSkill = SKILLS.map((sk) => ({ s: sk, gap: tv - (s.skills[sk.id] || 0) }))
    .filter((g) => g.gap > 0 && g.gap <= 1).sort((a, b) => a.gap - b.gap)[0]
  const agility = s.behaviours['learning-agility']

  const items = [
    critGap && (
      <ActionItem key="practice" tint="var(--purple-tint)" type="Practice this skill" text={critGap.skill.name}
        hint={(SKILL_RESOURCES[critGap.skill.id] || [])[0]?.title || 'Start with one focused project in this area'}
        icon={<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>} />
    ),
    lowestBeh && (
      <ActionItem key="behaviour" tint="var(--yellow-tint)" type="Strengthen this behaviour" text={lowestBeh.name}
        hint={BEHAVIOUR_ACTIONS[lowestBeh.id] || 'Make this behaviour a deliberate habit in your next sprint'}
        icon={<><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>} />
    ),
    quickWinSkill && (
      <ActionItem key="quickwin" tint="var(--success-tint)" type="Quick win" text={quickWinSkill.s.name}
        hint="You're close — one real project will close this gap"
        icon={<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />} />
    ),
  ].filter(Boolean)

  if (!items.length) return <div id="insightOneLevelUp"></div>
  return (
    <div id="insightOneLevelUp">
      <div className="one-level-up">
        <div className="olu-head">If you only do 3 things</div>
        <div className="olu-items">{items}</div>
        {agility === 'consistent' && (
          <div className="olu-note">
            <svg {...iconProps}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>{' '}
            <strong>Your advantage:</strong> Your learning agility is strong — you tend to close skill gaps faster than average. Use that.
          </div>
        )}
      </div>
    </div>
  )
}
