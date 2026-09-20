import { memo } from 'react'
import { useResults } from './store.js'
import { DIRECTIONS } from '../data.js'
import { downloadPDF, openShareModal } from '../engine.js'
import { ArchetypeCard, StatCards, InsightCards, OneLevelUp } from './Insights.jsx'
import RadarCard from './RadarCard.jsx'
import { PriorityGaps, LearningPathway, BehaviourSummary, CoachingNotes, RecommendedPrograms } from './Sections.jsx'

// The call to action, the PDF and share buttons, and the "About me" block. They never change, and the PDF
// export swaps the PDF button's label directly, so React must not re-render them.
const Closing = memo(function Closing() {
  return (
    <>
      <div className="cta-block">
                <div className="cta-eyebrow">Ready to level up?</div>
                <div className="cta-title">Turn your gaps into a growth plan</div>
                <div className="cta-sub">A 1-on-1 session with Winnie can help you build a structured, realistic roadmap — with accountability built in.</div>
                <div className="cta-btns">
                  <a href="https://adplist.org/mentors/winnie-nguyen" target="_blank" className="btn btn-primary">Book a Free Discovery Call</a>
                  <button onClick={(e) => { downloadPDF() }} className="btn btn-outline" id="pdfBtn">Download PDF</button>
                  <button onClick={(e) => { openShareModal() }} className="btn btn-outline" id="shareBtn">Copy Link</button>
                </div>
                <div className="cta-note">The free discovery call is a 20-min conversation — no commitment, no pitch. Just clarity on where to go next.</div>
              </div>

              <div className="res-section-head">
                <h3>About me</h3>
              </div>
              <div className="mentor-grid" style={{ marginBottom: '20px' }}>
                <div className="mentor-photo-wrap">
                  <div className="mentor-ring float-a"></div>
                  <img src="/training/assets/GV5.jpg" alt="Winnie Nguyen" className="mentor-photo"/>
                  <div className="mentor-badge">
                    <strong>50+</strong>
                    <span>designers mentored</span>
                  </div>
                </div>
                <div className="mentor-text">
                  <p>I'm a <strong>Senior Product Designer &amp; UX Product Design Educator</strong> based in Vietnam, with a Master of UX &amp; Service Design, helping designers and teams build genuine design intuition, not just surface-level skills.</p>
                  <p>With 10+ years as a UX product designer and experience mentoring 50+ designers through ADPList, UX Boot Camp, and private programs, I've developed a practical, human-centred approach to teaching design, one that bridges real-world product work with structured learning.</p>
                  <div className="mentor-social">
                    <a href="https://adplist.org/mentors/winnie-nguyen" target="_blank" rel="noopener" className="mentor-social-icon" title="ADPList" aria-label="ADPList">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/>
                        <path d="M8.3 10.65 C6.35 8.7 7.4 7.35 8.3 8.55 C9.2 7.35 10.25 8.7 8.3 10.65 Z" fill="currentColor"/>
                        <path d="M15.7 10.65 C13.75 8.7 14.8 7.35 15.7 8.55 C16.6 7.35 17.65 8.7 15.7 10.65 Z" fill="currentColor"/>
                        <path d="M8.3 13.3 C9.3 15 10.6 15.8 12 15.8 C13.4 15.8 14.7 15 15.7 13.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/winnienguyen2910/" target="_blank" rel="noopener" className="mentor-social-icon" title="LinkedIn" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                        <path fill="#fff" d="M19 19h-3v-4.7c0-1.1 0-2.6-1.6-2.6-1.6 0-1.9 1.3-1.9 2.5V19h-3V9.5h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.7V19zM6.7 8.1a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM8.2 19H5.2V9.5h3V19z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
    </>
  )
})

function Hero({ s }) {
  const date = s ? new Date(s.completedAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }) : ''
  const selDirs = s ? (s.directions || []).map((id) => DIRECTIONS.find((d) => d.id === id)).filter(Boolean) : []
  return (
    <div className="results-hero">
      <div className="rh-label">Your Assessment Results</div>
      <div className="rh-name" id="heroName">{s ? s.name : '—'}</div>
      <div className="rh-meta" id="heroMeta">{s ? `${s.experience} experience · Targeting ${s.target} level` : '—'}</div>
      <div className="rh-date" id="heroDate">{s ? `Completed ${date}` : '—'}</div>
      <div id="heroDirection">
        {selDirs.map((d) => <span className="rh-direction" key={d.id}>{d.emoji} {d.name}</span>)}
      </div>
    </div>
  )
}

// The results screen. The quiz engine shows it (adds the "active" class) and publishes the answers to the store.
export default function ResultsScreen() {
  const s = useResults()
  const selDirs = s ? (s.directions || []).map((id) => DIRECTIONS.find((d) => d.id === id)).filter(Boolean) : []
  return (
    <div id="screen-results" className="screen">
      <div className="results-wrap">
        <Hero s={s} />
        <div id="insightArchetype">{s && <ArchetypeCard s={s} />}</div>
        {s && <StatCards s={s} />}
        {s && <InsightCards s={s} />}
        <RadarCard s={s} />
        {s && <OneLevelUp s={s} />}

        <div className="res-section-head" id="focusAreasHead">
          <h3>{selDirs.length ? 'Your top focus areas on your path' : 'Your top 3 focus areas'}</h3>
          <p id="focusAreasDesc">
            {selDirs.length
              ? `Ranked by gap size within your chosen direction${selDirs.length > 1 ? 's' : ''}. Skills outside your focus are shown separately.`
              : 'Ranked by gap between your current rating and your target level.'}
          </p>
        </div>
        {s && <PriorityGaps s={s} />}

        <div className="res-section-head">
          <h3>Your personalised learning pathway</h3>
          <p>Resources matched to your skill gaps on your chosen path.</p>
        </div>
        {s && <LearningPathway s={s} />}

        <div className="res-section-head"><h3>Operating behaviours summary</h3></div>
        {s && <BehaviourSummary s={s} />}

        {s && <CoachingNotes s={s} />}
        {s && <RecommendedPrograms s={s} />}

        <Closing />
      </div>
    </div>
  )
}
