import { useEffect } from 'react'

export default function StyleGuide() {
  // curriculum accordion demo: one session row open at a time
  useEffect(() => {
    const rows = [...document.querySelectorAll('.session-row')]
    const handlers = rows.map((row) => {
      const onClick = () => {
        const wasOpen = row.classList.contains('is-open')
        rows.forEach((r) => { r.classList.remove('is-open'); r.setAttribute('aria-expanded', 'false') })
        if (!wasOpen) { row.classList.add('is-open'); row.setAttribute('aria-expanded', 'true') }
      }
      row.addEventListener('click', onClick)
      return [row, onClick]
    })
    return () => handlers.forEach(([row, fn]) => row.removeEventListener('click', fn))
  }, [])

  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <div className="nav-mark">Winnie · Design System</div>
          <a href="/training/index.html" className="nav-back">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 3L5 8l5 5"/></svg>{' '}Hub{' '}</a>
        </div>
      </nav>

      <div className="sg-page">

        {/* Header */}
        <div style={{ padding: '2.5rem 0 3rem' }}>
          <span className="kicker"><span className="bracket">01</span> Living Style Guide</span>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: '800', letterSpacing: '-.02em', fontSize: 'clamp(2.2rem,4vw,3rem)', marginTop: '.6rem' }}>{' '}Program <em style={{ fontStyle: 'normal', color: 'var(--coral)' }}>Design System</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--ink-70)', maxWidth: '560px', marginTop: '.8rem', lineHeight: '1.6' }}>{' '}Terracotta / lime editorial system for program pages only — separate from the main site's Purple/Yellow system.
            Edit <code className="sgc">assets/css/program-tokens.css</code> and <code className="sgc">assets/css/program-components.css</code> —
            every program page inherits automatically. To build a new program page, copy{' '}<code className="sgc">training/programs/junior-to-mid-level.html</code> and swap the content.{' '}</p>
        </div>

        <hr className="sg-divider"/>

        {/* ── COLOR ─────────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Color</h2>
          <p className="sg-section-desc">Cream base · terracotta primary accent · lime secondary accent · near-black navy for dark sections.</p>

          <div className="sg-group">
            <div className="sg-group-title">Base</div>
            <div className="sg-swatch-grid">
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: '#FFFFFF', borderBottom: '1px solid #eee' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Cream</div><div className="sg-swatch__value">--cream · #FFFFFF</div></div></div>
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: '#FFFDF7', borderBottom: '1px solid #eee' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Paper</div><div className="sg-swatch__value">--paper · #FFFDF7</div></div></div>
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: '#16140F' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Ink</div><div className="sg-swatch__value">--ink · #16140F</div></div></div>
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: 'rgba(22,20,15,.7)' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Ink 70%</div><div className="sg-swatch__value">--ink-70</div></div></div>
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: 'rgba(22,20,15,.5)' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Ink 50%</div><div className="sg-swatch__value">--ink-50</div></div></div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Accents</div>
            <div className="sg-swatch-grid">
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: '#D9713F' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Coral</div><div className="sg-swatch__value">--coral · #D9713F</div></div></div>
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: '#F7D9C4' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Coral Tint</div><div className="sg-swatch__value">--coral-tint</div></div></div>
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: '#3FCF6E' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Lime</div><div className="sg-swatch__value">--lime · #3FCF6E</div></div></div>
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: '#2FA85A' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Lime Dim</div><div className="sg-swatch__value">--lime-dim</div></div></div>
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: '#E7C468' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Lavender</div><div className="sg-swatch__value">--lavender · mustard</div></div></div>
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: '#F5E2A6' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Lavender Tint</div><div className="sg-swatch__value">--lavender-tint</div></div></div>
            </div>
          </div>

          <div className="sg-group">
            <div className="sg-group-title">Dark sections</div>
            <div className="sg-swatch-grid">
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: '#15181C' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Forest</div><div className="sg-swatch__value">--forest · pain section</div></div></div>
              <div className="sg-swatch"><div className="sg-swatch__block" style={{ background: '#0D0F12' }}></div><div className="sg-swatch__info"><div className="sg-swatch__name">Forest 2</div><div className="sg-swatch__value">--forest-2 · testimonial/closing</div></div></div>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── TYPOGRAPHY ──────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Typography</h2>
          <p className="sg-section-desc">Manrope for both display and body — <code className="sgc">--serif</code> and <code className="sgc">--sans</code> both point to it.</p>

          <div>
            <div className="type-row"><div className="type-row__meta">Hero h1</div><div className="type-row__sample" style={{ fontFamily: 'var(--serif)', fontWeight: '800', fontSize: '2.6rem', letterSpacing: '-.03em', lineHeight: '.98' }}>Learn as a Junior.</div></div>
            <div className="type-row"><div className="type-row__meta">Section h2</div><div className="type-row__sample" style={{ fontFamily: 'var(--serif)', fontWeight: '800', fontSize: '2rem', letterSpacing: '-.02em' }}>What each session builds.</div></div>
            <div className="type-row"><div className="type-row__meta">Card h3</div><div className="type-row__sample" style={{ fontFamily: 'var(--serif)', fontWeight: '700', fontSize: '1.22rem' }}>Design Thinking for UX</div></div>
            <div className="type-row"><div className="type-row__meta">Body</div><div className="type-row__sample" style={{ fontSize: '1.06rem', color: 'var(--ink-70)', lineHeight: '1.5' }}>A structured 1:1 or small-group program for early-career designers.</div></div>
            <div className="type-row"><div className="type-row__meta">Kicker</div><div className="type-row__sample"><span className="kicker"><span className="bracket">01</span> Section label</span></div></div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── MARKER HIGHLIGHT ──────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Marker Highlight</h2>
          <p className="sg-section-desc">Animated hand-drawn underline behind a word. Usage: <code className="sgc">&lt;span class="mark"&gt;&lt;span&gt;word&lt;/span&gt;&lt;/span&gt;</code></p>
          <p style={{ fontFamily: 'var(--serif)', fontWeight: '800', fontSize: '2rem' }}>act like a <span className="mark"><span>Senior.</span></span></p>
        </section>

        <hr className="sg-divider"/>

        {/* ── BUTTONS ────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Buttons</h2>
          <p className="sg-section-desc">Pill-shaped, three variants. All support an optional trailing arrow SVG that shifts on hover.</p>
          <div className="sg-row">
            <a href="#" className="btn btn-dark" onClick={(e) => { e.preventDefault() }}>Let's talk <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M12 4H5M12 4V11"/></svg></a>
            <a href="#" className="btn btn-ghost" onClick={(e) => { e.preventDefault() }}>Free self-assessment <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M12 4H5M12 4V11"/></svg></a>
            <a href="#" className="btn btn-lime" onClick={(e) => { e.preventDefault() }}>Let's talk <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M12 4H5M12 4V11"/></svg></a>
          </div>
          <p className="sg-label" style={{ marginTop: '1rem' }}>Classes: .btn-dark (on light bg) · .btn-ghost (outline) · .btn-lime (on dark bg)</p>
        </section>

        <hr className="sg-divider"/>

        {/* ── HERO BADGE + TAG PILL ────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Badges &amp; Tags</h2>
          <div className="sg-group">
            <div className="sg-group-title">Hero badge</div>
            <div className="sg-row">
              <span className="hero-badge">1:1 or Group (3–5)</span>
              <span className="hero-badge">Junior / Early-Career</span>
              <span className="hero-badge">1–3 yrs experience</span>
            </div>
          </div>
          <div className="sg-group">
            <div className="sg-group-title">Tag pill (on dark)</div>
            <div className="sg-demo-box dark" style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
              <span className="tag-pill">UX Process</span>
              <span className="tag-pill">Facilitation</span>
              <span className="tag-pill">Leadership</span>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── CURRICULUM ACCORDION ─────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Session Accordion</h2>
          <p className="sg-section-desc">Click a row to expand. Only one session stays open at a time. Used for the curriculum list.</p>

          <div className="session-list" style={{ maxWidth: '640px' }}>
            <div className="phase-label"><span className="phase-dot"></span><span>Understand</span></div>

            <div className="session-row" tabIndex="0" role="button" aria-expanded="false">
              <div className="idx">01</div>
              <div>
                <div className="session-row-top">
                  <div>
                    <h3>Design Thinking for UX</h3>
                    <p>Learn to run the design process yourself, not just follow one.</p>
                  </div>
                  <span className="session-chevron"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6l4 4 4-4"/></svg></span>
                </div>
                <div className="session-detail-wrap"><div className="session-detail-inner"><div className="session-detail">
                  <div>
                    <span className="session-detail-label">Learning objective</span>
                    <ul>
                      <li>Map the design process end to end, from discovery to delivery</li>
                      <li>Identify which phase your current project is actually in</li>
                    </ul>
                  </div>
                  <div>
                    <span className="session-detail-label">What you'll achieve</span>
                    <ul>
                      <li>A clear map of your project against a structured process</li>
                      <li>Confidence to explain the process to stakeholders</li>
                    </ul>
                  </div>
                </div></div></div>
              </div>
            </div>

            <div className="session-row" tabIndex="0" role="button" aria-expanded="false">
              <div className="idx">02</div>
              <div>
                <div className="session-row-top">
                  <div>
                    <h3>Customer Understanding</h3>
                    <p>Ground every decision in real user friction and evidence, not assumption.</p>
                  </div>
                  <span className="session-chevron"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6l4 4 4-4"/></svg></span>
                </div>
                <div className="session-detail-wrap"><div className="session-detail-inner"><div className="session-detail">
                  <div>
                    <span className="session-detail-label">Learning objective</span>
                    <ul><li>Learn interview techniques that surface real friction, not opinions</li></ul>
                  </div>
                  <div>
                    <span className="session-detail-label">What you'll achieve</span>
                    <ul><li>Real interview notes from your own project</li></ul>
                  </div>
                </div></div></div>
              </div>
            </div>
          </div>
          <p className="sg-label" style={{ marginTop: '1rem' }}>Structure: .session-list &gt; .phase-label + .session-row (idx, session-row-top, session-chevron, session-detail-wrap)</p>
        </section>

        <hr className="sg-divider"/>

        {/* ── PAIN LIST (dark) ─────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Pain List</h2>
          <p className="sg-section-desc">Numbered list for a dark, full-bleed "recognition" section.</p>
          <div className="sg-demo-box dark on-dark" style={{ padding: '2.5rem' }}>
            <span className="kicker">You're not alone</span>
            <ul className="pain-list" style={{ marginTop: '1.5rem' }}>
              <li><em>01</em><div><h3 style={{ fontFamily: 'var(--serif)', color: '#fff', fontWeight: '700', fontSize: '1.05rem', marginBottom: '.3rem' }}>Stuck at mid-level</h3><p style={{ color: 'rgba(245,239,226,.65)', fontSize: '.92rem' }}>You're shipping good work, but Senior still feels out of reach.</p></div></li>
            </ul>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── CASE STUDY CARD ───────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Case Study Card</h2>
          <p className="sg-section-desc">Media + meta/title/desc/cta card for a portfolio-style work grid. The badge in the media corner is optional.</p>

          <div className="case-grid" style={{ maxWidth: '700px' }}>
            <a href="#" className="case-card" onClick={(e) => { e.preventDefault() }}>
              <div className="case-card-media">
                <div style={{ width: '100%', height: '100%', background: 'var(--lavender-tint)' }}></div>
                <span className="case-card-badge">View on Behance ↗</span>
              </div>
              <div className="case-card-body">
                <span className="case-card-meta">Client · Role · Year</span>
                <h3>Project title</h3>
                <p>One or two lines describing the work and the outcome.</p>
                <span className="case-card-cta">View case study</span>
              </div>
            </a>
          </div>
          <p className="sg-label" style={{ marginTop: '1rem' }}>Structure: .case-grid &gt; .case-card &gt; .case-card-media (img + optional .case-card-badge) + .case-card-body (.case-card-meta, h3, p, .case-card-cta)</p>
        </section>

        <hr className="sg-divider"/>

        {/* ── TESTIMONIAL CARD ──────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Testimonial</h2>
          <div className="sg-demo-box darkest testimonial" style={{ padding: '2.5rem 2.5rem 0' }}>
            <div className="testimonial-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="testimonial-card">
                <div className="quote-mark">"</div>
                <blockquote>My first session with Winnie was really amazing. She gives the whole picture and is easy to understand.</blockquote>
                <div className="author">Đạt Nguyễn Hoàng Hữu</div>
                <div className="role">Product Designer, ChoTot (Carousell)</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── LEAD FORM ─────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Lead Form</h2>
          <p className="sg-section-desc">Inline inquiry form. Submits via fetch to a Formspree endpoint, shows a success message inline — never leaves the page.</p>
          <div className="sg-demo-box dark" style={{ padding: '2.5rem' }}>
            <form className="lead-form" onSubmit={(e) => { e.preventDefault() }}>
              <div className="lead-form-row">
                <input type="text" placeholder="Your name"/>
                <input type="email" placeholder="Your email"/>
              </div>
              <button type="submit" className="btn btn-lime lead-form-submit">Let's talk <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M12 4H5M12 4V11"/></svg></button>
              <p className="lead-form-note">I'll reply by email within 1–2 business days.</p>
            </form>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── FORMAT ROW ────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Format List</h2>
          <p className="sg-section-desc">Spec-sheet rows for program details (sessions, cadence, tuition, etc.)</p>
          <div className="sg-demo-box dark" style={{ maxWidth: '420px', padding: '1rem 2rem' }}>
            <div className="format-list">
              <div className="format-row"><span>Format</span><span>1:1 or Group (3–5)</span></div>
              <div className="format-row"><span>Sessions</span><span>8 × 90 min</span></div>
              <div className="format-row tuition"><span>Tuition</span><span>Let's talk</span></div>
            </div>
          </div>
        </section>

        <hr className="sg-divider"/>

        {/* ── FOOTER ────────────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Footer</h2>
          <p className="sg-section-desc">Copyright left, link row right. Wrap a "Contact" link's onclick to open the Contact Modal below instead of a plain mailto.</p>
          <footer style={{ borderTop: '1px solid var(--line)' }}>
            <div className="wrap footer-inner">
              <p>© 2026 Winnie Nguyen · Senior Product Designer</p>
              <div className="footer-links">
                <a href="#" onClick={(e) => { e.preventDefault() }}>Contact</a>
                <a href="#" onClick={(e) => { e.preventDefault() }}>LinkedIn</a>
              </div>
            </div>
          </footer>
          <p className="sg-label" style={{ marginTop: '1rem' }}>Structure: footer &gt; .wrap.footer-inner &gt; p + .footer-links</p>
        </section>

        <hr className="sg-divider"/>

        {/* ── CONTACT MODAL ─────────────────────────────────────── */}
        <section className="sg-section">
          <h2 className="sg-section-title">Contact Modal</h2>
          <p className="sg-section-desc">Open with <code className="sgc">document.getElementById('contactModal').classList.add('open')</code> — e.g. from a nav button or the footer's Contact link.</p>
          <button type="button" className="btn btn-dark" onClick={(e) => { document.getElementById('sgContactModal').classList.add('open') }}>Contact</button>

          <div id="sgContactModal" className="modal-overlay" onClick={(e) => { if(e.target===e.currentTarget)e.currentTarget.classList.remove('open') }}>
            <div className="modal">
              <button className="modal-close" onClick={(e) => { document.getElementById('sgContactModal').classList.remove('open') }}>✕</button>
              <div className="contact-person">
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--coral-tint)', flexShrink: '0' }}></div>
                <div>
                  <div className="contact-person-name">Winnie Nguyen</div>
                  <div className="contact-person-role">Senior Product Designer</div>
                </div>
              </div>
              <div className="contact-links">
                <a className="contact-row" href="#" onClick={(e) => { e.preventDefault() }}>
                  <span className="contact-row-icon">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--coral)" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                  </span>
                  <div>
                    <div className="contact-row-label">Email</div>
                    <div className="contact-row-value">nguyenphuctuongvan@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <p className="sg-label" style={{ marginTop: '1rem' }}>Structure: .modal-overlay &gt; .modal (.modal-close, .contact-person, .contact-links &gt; .contact-row)</p>
        </section>

      </div>
    </>
  )
}
