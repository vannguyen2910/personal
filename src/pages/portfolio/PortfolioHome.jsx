import { useState } from 'react'
import { ContactModal } from '../../components/contact'
import { caseStudies } from '../../data/caseStudies.js'
import { BEHANCE_URL, LINKEDIN_URL } from '../../data/site.js'

// This page uses the editorial ("program") design system, not the portfolio one.
function HomeCaseCard({ study }) {
  return (
    <a href={study.href} target="_blank" rel="noopener" className="case-card">
      <div className="case-card-media">
        <img src={study.cover} alt={study.coverAlt} />
        {study.badge && <span className="case-card-badge">{study.badge}</span>}
      </div>
      <div className="case-card-body">
        <span className="case-card-meta">{study.meta}</span>
        <h3>{study.title}</h3>
        <p>{study.home.description}</p>
        <span className="case-card-cta">View case study</span>
      </div>
    </a>
  )
}

export default function PortfolioHome() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)
  const featured = caseStudies.filter((s) => s.home)

  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <a href="/portfolio/index.html" className="nav-logo"><img src="/portfolio/images/logo-nav.svg" alt="Winnie Nguyen" /></a>
          <div className="nav-actions">
            <button onClick={openContact} className="btn btn-dark">Contact</button>
          </div>
        </div>
      </nav>

      <ContactModal accent="coral" links={['email', 'linkedin', 'behance']} open={contactOpen} onClose={() => setContactOpen(false)} />

      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <h1><span className="it">Outcomes</span> over pixels.</h1>
              <p className="hero-desc">11+ years in product design. I've spent the last few shifting from shipping screens to shipping outcomes, aligning squads, coaching designers, and building the research and governance systems that make good design the default, not the exception.</p>
              <div className="hero-cta">
                <a href="/portfolio/work.html" className="btn btn-dark">View my work</a>
                <a href="/portfolio/files/Winnie-Nguyen-Resume.pdf" download className="btn btn-ghost">Resume</a>
              </div>
            </div>
            <div className="hero-portrait-wrap">
              <div className="decor lime float-a"></div>
              <div className="decor coral float-b"></div>
              <div className="hero-portrait">
                <img src="/portfolio/images/headshot.jpg" alt="Winnie Nguyen" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="work-section">
        <div className="wrap">
          <div className="section-head">
            <h2>Highlighted work</h2>
          </div>
          <div className="case-grid">
            {featured.map((study) => (
              <HomeCaseCard key={study.href} study={study} />
            ))}
          </div>
          <div className="work-more">
            <a href="/portfolio/work.html" className="btn btn-ghost">See more work →</a>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="kicker on-dark" style={{ justifyContent: 'center' }}><span className="bracket">[</span>Let's talk<span className="bracket">]</span></span>
          <h2 style={{ marginTop: '.8rem' }}>Always happy to compare notes</h2>
          <p style={{ color: 'rgba(245,239,226,.72)', maxWidth: '520px', margin: '1rem auto 0', fontSize: '.96rem', lineHeight: 1.6 }}>Take a closer look at the work above, or explore more on Behance — I'm always up for talking shop or hearing about new opportunities.</p>
          <div className="closing-cta" style={{ justifyContent: 'center' }}>
            <button onClick={openContact} className="btn btn-lime">Get in touch</button>
            <a href={BEHANCE_URL} target="_blank" rel="noopener" className="btn btn-ghost" style={{ borderColor: 'rgba(245,239,226,.4)', color: 'var(--cream)' }}>Explore more on Behance ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <p>© 2026 Winnie Nguyen · Senior Product Designer</p>
          <div className="footer-links">
            <a href="#" onClick={(e) => { e.preventDefault(); openContact() }}>Contact</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}
