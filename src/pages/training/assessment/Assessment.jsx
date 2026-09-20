import { useEffect } from 'react'
import { ContactModal } from '../../../components/contact'
import { startAssessment, prevQuestion, nextQuestion, backToQuestions, submitDirection, downloadPDF, openShareModal, copyShareLink, clearAndRestart, trackEvent, getState, init } from './engine.js'

// The assessment flow (welcome, 15 questions, direction picker, results) is driven by ./engine.js,
// which keeps the quiz state and fills in the results. This component renders the page's fixed markup.
export default function Assessment() {
  useEffect(() => { init() }, [])

  return (
    <>
    {/* ── Contact modal ── */}
    <ContactModal id="contactModal" accent="purple" role="UX Product Design Educator" />

    {/* ── Header ── */}
    <header className="site-header">
      <a href="/training/index.html" className="nav-logo">
        <img src="/training/assets/Logo.svg" alt="Winnie Nguyen"/>
      </a>
      <button className="header-link" onClick={(e) => { trackEvent('Clicked contact', {completed: getState().completedAt ? 'yes' : 'no'}); document.getElementById('contactDialog').classList.add('open') }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Contact me
      </button>
    </header>

    {/* ── Contact dialog ── */}
    <ContactModal id="contactDialog" accent="purple" role="UX Product Design Mentor" image="/training/assets/GV5.jpg" links={['email', 'linkedin', 'adplist']} />

    {/* ── Share results dialog ── */}
    <div id="shareDialog" className="modal-overlay" onClick={(e) => { if(e.target===e.currentTarget)e.currentTarget.classList.remove('open') }}>
      <div className="modal" style={{ maxWidth: '440px' }}>
        <button className="modal-close" onClick={(e) => { document.getElementById('shareDialog').classList.remove('open') }}>✕</button>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>Share your results</div>
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '18px' }}>Anyone with this link can open your report — send it to someone, or save it to come back to later.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 6px 6px 14px', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-md)', background: 'var(--gray-100)' }}>
          <input id="shareLinkInput" type="text" readOnly style={{ flex: '1', minWidth: '0', border: 'none', background: 'none', fontSize: 'var(--text-sm)', color: 'var(--text-primary)', outline: 'none' }}/>
          <button onClick={(e) => { copyShareLink() }} id="shareCopyBtn" style={{ flexShrink: '0', display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 14px', border: 'none', borderRadius: 'var(--radius-sm)', background: 'var(--text-primary)', color: '#fff', fontSize: 'var(--text-sm)', fontWeight: '600', cursor: 'pointer', transition: 'var(--transition)' }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span id="shareCopyLabel">Copy</span>
          </button>
        </div>
      </div>
    </div>

    {/* ── Global progress ── */}
    <div className="progress-wrap"><div className="progress-bar" id="progressBar"></div></div>


    {/* ════════════════════════════════════════════════════════
         SCREEN 0 — WELCOME
    ════════════════════════════════════════════════════════ */}
    <div id="screen-0" className="screen active">
      <div className="welcome-wrap">

        {/* LEFT: hero */}
        <div>
          <div className="welcome-eyebrow">UX Product Design Assessment</div>
          <h1 className="welcome-title">Know where<br/>you stand.</h1>
          <p className="welcome-desc">This self-assessment maps your skills against a professional product design framework. You'll get a personalised learning pathway based on your gaps — and a clear next step to accelerate your growth.</p>
          <div className="mentor-card">
            <img src="/training/assets/GV5.jpg" alt="Winnie Nguyen" className="mentor-avatar"/>
            <div>
              <div className="mentor-name">Winnie Nguyen</div>
              <div className="mentor-role">UX Product Design Mentor</div>
            </div>
          </div>
        </div>

        {/* RIGHT: form */}
        <div>
          <div id="resumeBanner" style={{ display: 'none' }} className="resume-banner">
            <span>💾</span>
            <div><strong>Welcome back!</strong> Your answers are saved.</div>
            <span className="restart" onClick={(e) => { clearAndRestart() }}>Start over</span>
          </div>

          <div className="form-card">
            <div className="form-card-title">About you</div>

            <div className="input-field">
              <input type="text" id="inputName" placeholder=" "/>
              <label htmlFor="inputName">Your name *</label>
            </div>
            <div className="input-field">
              <input type="email" id="inputEmail" placeholder=" "/>
              <label htmlFor="inputEmail">Email address *</label>
            </div>
            <div className="form-2col">
              <div className="select-field">
                <select id="inputExperience" className="select-field__input" defaultValue="">
                  <option value="" disabled></option>
                  <option value="0–1 years">0–1 years</option>
                  <option value="1–3 years">1–3 years</option>
                  <option value="3–5 years">3–5 years</option>
                  <option value="5–10 years">5–10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
                <label htmlFor="inputExperience" className="select-field__label">Years of experience *</label>
              </div>
              <div className="select-field">
                <select id="inputTarget" className="select-field__input" defaultValue="">
                  <option value="" disabled></option>
                  <option value="Associate">Associate Designer</option>
                  <option value="Mid">Mid Designer</option>
                  <option value="Senior">Senior Designer</option>
                  <option value="Lead">Lead Designer</option>
                  <option value="Principal">Principal Designer</option>
                </select>
                <label htmlFor="inputTarget" className="select-field__label">Target level *</label>
              </div>
            </div>

            <div className="form-meta">Takes about 15–20 minutes · Progress saved automatically</div>

            <button className="btn btn-primary btn-full" onClick={(e) => { startAssessment() }}>Start assessment &nbsp;›</button>
          </div>
        </div>

      </div>
    </div>


    {/* ════════════════════════════════════════════════════════
         SCREEN Q — QUESTION (one at a time)
    ════════════════════════════════════════════════════════ */}
    <div id="screen-q" className="screen">
      <div className="q-wrap">

        <div className="q-meta">
          <div className="q-eyebrow" id="qEyebrow">Core Skill 1 of 9</div>
          <div className="q-counter" id="qCounter">1 / 15</div>
        </div>

        <h2 className="q-section-title" id="qSectionTitle">Core Skills</h2>
        <p className="q-section-desc" id="qSectionDesc">Expand each card to read what each level looks like, then select the level that best describes you right now.</p>

        <div className="q-card">
          <div className="q-card-title" id="qCardTitle">—</div>
          <div className="q-card-desc" id="qCardDesc">—</div>
          <div id="qOptions"></div>
        </div>

        <div className="nav-row">
          <button className="btn-ghost" onClick={(e) => { prevQuestion() }}>← Back</button>
          <button className="btn btn-primary" id="qNextBtn" onClick={(e) => { nextQuestion() }}>
            <span id="qNextLabel">Next</span> &nbsp;›
          </button>
        </div>

      </div>
    </div>


    {/* ════════════════════════════════════════════════════════
         SCREEN DIRECTION
    ════════════════════════════════════════════════════════ */}
    <div id="screen-direction" className="screen">
      <div className="q-wrap">

        <div className="q-meta">
          <div className="q-eyebrow">Career Direction</div>
          <div className="q-counter">Almost there</div>
        </div>

        <h2 className="q-section-title">Where do you want to go?</h2>
        <p className="direction-intro">Your skill gaps tell you what's missing — but not all gaps matter equally. Pick up to 3 directions you want to develop toward so we can focus your results on what's actually relevant to your path.</p>

        <div className="direction-grid" id="directionGrid"></div>

        <div className="depr-section">
          <div className="depr-heading">Anything you're intentionally not focusing on?</div>
          <div className="depr-sub">Optional — select skills you're deliberately deprioritising right now. They'll still appear in your full breakdown, but won't drive your recommendations.</div>
          <div className="depr-chips" id="deprChips"></div>
        </div>

        <div className="nav-row" style={{ marginTop: '32px' }}>
          <button className="btn-ghost" onClick={(e) => { backToQuestions() }}>← Back</button>
          <button className="btn btn-primary" id="dirNextBtn" onClick={(e) => { submitDirection() }}>
            See my results &nbsp;›
          </button>
        </div>

      </div>
    </div>


    {/* ════════════════════════════════════════════════════════
         SCREEN RESULTS
    ════════════════════════════════════════════════════════ */}
    <div id="screen-results" className="screen">
      <div className="results-wrap">

        <div className="results-hero">
          <div className="rh-label">Your Assessment Results</div>
          <div className="rh-name" id="heroName">—</div>
          <div className="rh-meta" id="heroMeta">—</div>
          <div className="rh-date" id="heroDate">—</div>
          <div id="heroDirection"></div>
        </div>

        {/* ── New: Archetype + stats + insight cards ── */}
        <div id="insightArchetype"></div>
        <div className="insight-stats">
          <div className="insight-stat" id="insightReadiness"></div>
          <div className="insight-stat" id="insightCalibration"></div>
          <div className="insight-stat" id="insightAIReadiness"></div>
        </div>
        <div className="insight-cards" id="insightCards"></div>

        <div className="chart-card">
          <canvas id="radarChart"></canvas>
          <div className="chart-legend">
            <span><span className="legend-dot" style={{ background: 'var(--purple)' }}></span>Your rating</span>
            <span><span className="legend-dot" style={{ background: 'var(--yellow)', border: '2px dashed var(--yellow-deep)' }}></span>Target level</span>
          </div>
        </div>

        {/* ── New: One-level-up plan ── */}
        <div id="insightOneLevelUp"></div>

        <div className="res-section-head" id="focusAreasHead">
          <h3>Your top focus areas</h3>
          <p id="focusAreasDesc">Ranked by gap size within your chosen direction.</p>
        </div>
        <div id="priorityGaps"></div>

        <div className="res-section-head">
          <h3>Your personalised learning pathway</h3>
          <p>Resources matched to your skill gaps on your chosen path.</p>
        </div>
        <div id="learningPathway" className="pathway-wrap"></div>

        <div className="res-section-head"><h3>Operating behaviours summary</h3></div>
        <div id="behaviourSummary" className="beh-summary"></div>

        <div className="res-section-head" id="coachingNotesHead" style={{ display: 'none' }}>
          <h3>Your notes</h3>
          <p>The context and examples you added — with tailored advice where a note points to something specific.</p>
        </div>
        <div id="coachingNotes"></div>

        <div id="recommendedProgram"></div>

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

      </div>
    </div>

    <footer>
      <div className="footer-inner">
        <p>© 2026 Winnie Nguyen · UX Product Design Educator</p>
        <div className="footer-links">
          <a href="#" onClick={(e) => { trackEvent('Clicked contact', {completed: getState().completedAt ? 'yes' : 'no'}); document.getElementById('contactModal').classList.add('open'); e.preventDefault(); }}>Contact</a>
          <a href="https://www.linkedin.com/in/winnienguyen2910" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </footer>

    {/* ════════════════════════════════════════════════════════
         JAVASCRIPT
    ════════════════════════════════════════════════════════ */}
    </>
  )
}
