import { useEffect, useState } from 'react'
import CountUp from '../../../components/CountUp.jsx'

function ContactModal({ open, onClose }) {
  return (
    <div id="contactModal" className={`modal-overlay${open ? ' open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
        <div className="modal" style={{ maxWidth: '440px' }}>
          <button className="modal-close" onClick={onClose}>✕</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <img src="/portfolio/images/headshot-square.jpg" alt="Winnie Nguyen" style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: '0' }}/>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '700', color: 'var(--text-primary)' }}>Winnie Nguyen</div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: '2px' }}>UX Product Design Educator</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="mailto:nguyenphuctuongvan@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-md)', textDecoration: 'none', color: 'var(--text-primary)', transition: 'var(--transition)' }}>
              <span style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: 'var(--purple-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--purple)" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
              </span>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: '2px' }}>Email</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: '500' }}>nguyenphuctuongvan@gmail.com</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/winnienguyen2910/" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-md)', textDecoration: 'none', color: 'var(--text-primary)', transition: 'var(--transition)' }}>
              <span style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: 'var(--purple-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                <svg width="16" height="16" fill="var(--purple)" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </span>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: '2px' }}>LinkedIn</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: '500' }}>linkedin.com/in/winnienguyen2910</div>
              </div>
            </a>
          </div>
        </div>
      </div>
  )
}

function Nav() {
  return (
    <nav>
        <div className="nav-inner">
          <a href="/training/index.html" className="nav-logo"><img src="/training/assets/Logo.svg" alt="Winnie Nguyen"/></a>
          <div className="nav-links">
            <a href="#process">Process</a>
            <a href="#programs">Programs</a>
            <a href="#about">About</a>
            <a href="/training/self-assessment.html" className="btn-primary">Run Self-assessment <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M12 4H5M12 4V11"/></svg></a>
          </div>
        </div>
      </nav>
  )
}

function Hero() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="hero">
          <div className="hero-left">
            <p className="hero-eyebrow animate d1">UX Product Design Educator</p>
            <h1 className="hero-title animate d2">
              Designing<br/><em>better</em><br/><span className="mark"><span>designers.</span></span>
            </h1>
            <p className="hero-desc animate d3">
              A hands-on training experience built for designers who want to develop real UX intuition — not just surface-level skills.
            </p>
            <div className="hero-actions animate d4">
              <a href="/training/self-assessment.html" className="btn-primary">Run Self-assessment <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M12 4H5M12 4V11"/></svg></a>
              <a href="https://adplist.org/mentors/winnie-nguyen" target="_blank" rel="noopener" className="btn-ghost">Connect on ADPList <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M12 4H5M12 4V11"/></svg></a>
            </div>
          </div>

          <div className="hero-right animate d3">
            <div className="hero-illustration" aria-hidden="true">
              <img src="/training/assets/hero-uiux-illustration.svg" alt="" width="296" height="293"/>
            </div>
          </div>
        </div>
      </div>
  )
}

function Recognition() {
  return (
    <div className="recognition">
        <div className="recognition-inner">
          <div className="rec-header animate d1">
            <p className="rec-eyebrow">You're not alone</p>
            <h2 className="rec-title">Sound familiar?</h2>
            <p className="rec-subtitle">Most designers hit these moments at some point. Recognising where you're stuck is the first step to moving forward.</p>
          </div>
          <ul className="pain-list">

            <li className="animate d2">
              <em>01</em>
              <div>
                <h3>Stuck at mid-level for longer than expected</h3>
                <p>You're shipping good work and hitting your goals. But Senior keeps feeling out of reach, and no one is giving you clear, specific feedback on what's actually holding you back.</p>
              </div>
            </li>

            <li className="animate d3">
              <em>02</em>
              <div>
                <h3>No senior designer around you to learn from</h3>
                <p>You're the most experienced designer on your team — or close to it. Feedback comes from PMs, not designers. You're growing, but you're mostly figuring it out alone.</p>
              </div>
            </li>

            <li className="animate d4">
              <em>03</em>
              <div>
                <h3>Your portfolio exists — but it's not converting</h3>
                <p>You've done real, solid work. But interviews aren't coming, or they stall at the portfolio review. You can't tell if it's the work itself, the framing, or how the story is told.</p>
              </div>
            </li>

            <li className="animate d5">
              <em>04</em>
              <div>
                <h3>Unsure what AI actually means for your design career</h3>
                <p>Everyone's saying AI is changing everything. You want to stay relevant and future-proof your skills — but you're not sure which direction to go, or where to start.</p>
              </div>
            </li>

          </ul>
        </div>
      </div>
  )
}

function Programs() {
  return (
    <div className="programs" id="programs">
        <div className="programs-inner">
          <div className="programs-head animate d1">
            <p className="section-label">Programs</p>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>Structured programs to <em style={{ whiteSpace: 'nowrap' }}>level up</em></h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>Beyond 1:1 mentoring, these are structured programs built around your own real work.</p>
          </div>
          <div className="programs-grid">
            <a href="/training/programs/ui-ux-fundamentals.html" className="program-card animate d1">
              <div className="program-card-visual" aria-hidden="true">
                <span className="pc-ring"></span>
                <span className="spc-core"></span>
              </div>
              <div className="program-card-body">
                <div className="program-card-tags">
                  <span className="program-card-tag">1:1 or Group</span>
                  <span className="program-card-level is-beginner">Beginner</span>
                </div>
                <h3>UI/UX Design Fundamentals</h3>
                <p>Your first real design process, built step by step, from problem to portfolio-ready case study. 12 sessions, weekly, over about 3 months.</p>
                <span className="program-card-link">View program</span>
              </div>
            </a>
            <a href="/training/programs/junior-to-mid-level.html" className="program-card animate d2">
              <div className="program-card-visual" aria-hidden="true">
                <span className="pc-ring"></span>
                <span className="pc-steps">
                  <span className="pc-step"></span>
                  <span className="pc-step"></span>
                  <span className="pc-step"></span>
                </span>
                <span className="pc-climber"></span>
              </div>
              <div className="program-card-body">
                <div className="program-card-tags">
                  <span className="program-card-tag">1:1 or Group</span>
                  <span className="program-card-level is-intermediate">Intermediate</span>
                </div>
                <h3>UX Product Design Roadmap to Mid-Level</h3>
                <p>Learn to run a full UX process yourself, not just execute a screen. 12 sessions, weekly, over about 3 months.</p>
                <span className="program-card-link">View program</span>
              </div>
            </a>
            <a href="/training/programs/mid-to-senior.html" className="program-card animate d3">
              <div className="program-card-visual" aria-hidden="true">
                <span className="pc-ring"></span>
                <span className="spc-ring2"></span>
                <span className="spc-ring3"></span>
                <span className="spc-core"></span>
                <span className="spc-pulse"></span>
              </div>
              <div className="program-card-body">
                <div className="program-card-tags">
                  <span className="program-card-tag">1:1 or Group</span>
                  <span className="program-card-level is-advanced">Advanced</span>
                </div>
                <h3>UX Product Design Roadmap to Senior</h3>
                <p>Defend decisions with evidence, not gut feel, and own projects end-to-end. 12 sessions, weekly, over 3 months.</p>
                <span className="program-card-link">View program</span>
              </div>
            </a>
            <a href="/training/programs/systematic-ai-prototyping.html" className="program-card animate d4">
              <div className="program-card-visual" aria-hidden="true">
                <span className="pc-ring"></span>
                <span className="ppc-blob"></span>
                <span className="ppc-phone">
                  <span className="ppc-line-1"></span>
                  <span className="ppc-line-2"></span>
                </span>
                <svg className="ppc-spark" viewBox="0 0 24 24" width="12" height="12"><path d="M12 0 C12 6 14 10 20 12 C14 14 12 18 12 24 C12 18 10 14 4 12 C10 10 12 6 12 0 Z"/></svg>
              </div>
              <div className="program-card-body">
                <div className="program-card-tags">
                  <span className="program-card-tag">Video · 1:1 · Group</span>
                  <span className="program-card-level is-intermediate">Intermediate</span>
                </div>
                <h3>Systematic AI Prototyping for UX Product Designer</h3>
                <p>Stop prompting screen by screen. Define your design system once, then let AI build consistently at any scale.</p>
                <span className="program-card-link">View program</span>
              </div>
            </a>
          </div>
        </div>
      </div>
  )
}

function HowItWorks() {
  return (
    <div className="how-it-works" id="process">
        <div className="hiw-inner">
          <div className="hiw-header animate d1">
            <p className="section-label">The process</p>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>How it works</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>Three steps, no commitment until you're ready.</p>
          </div>
          <div className="session-list">
            <div className="session-row animate d2">
              <div className="idx">01</div>
              <div>
                <span className="step-tag">Free · 15 min</span>
                <h3>Take the self-assessment</h3>
                <p>Map your skills across 9 core design areas and 6 professional behaviours. See exactly where you stand — and where the gaps are — before we even talk.</p>
              </div>
            </div>
            <div className="session-row animate d3">
              <div className="idx">02</div>
              <div>
                <span className="step-tag">Free · 20 min</span>
                <h3>Book a discovery call</h3>
                <p>We'll talk through your results, your goals, and what's been holding you back. No pitch, no commitment. Just a clear-eyed look at where you want to go.</p>
              </div>
            </div>
            <div className="session-row animate d4">
              <div className="idx">03</div>
              <div>
                <span className="step-tag">Structured program</span>
                <h3>Build your growth plan</h3>
                <p>Get a tailored roadmap with regular sessions, real feedback on your actual work, and accountability built in — so growth stops being something you plan and starts being something you do.</p>
              </div>
            </div>
          </div>
          <div className="hiw-cta animate d5">
            <a href="/training/self-assessment.html" className="btn-primary">Start with the free assessment <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M12 4H5M12 4V11"/></svg></a>
          </div>
        </div>
      </div>
  )
}

function Mentor() {
  return (
    <section className="mentor" id="about">
        <div className="mentor-grid">
          <div className="mentor-photo-wrap animate d3">
            <div className="mentor-ring float-a"></div>
            <img src="/training/assets/GV5.jpg" alt="Winnie Nguyen" className="mentor-photo"/>
            <div className="mentor-badge">
              <strong>50+</strong>
              <span>designers mentored</span>
            </div>
          </div>

          <div className="mentor-text animate d1">
            <p className="section-label">About</p>
            <h2 className="section-title" style={{ marginTop: '10px' }}>Training that <em>sticks.</em></h2>
            <p>
              I'm a <strong>UX Product Design Educator</strong> based in Vietnam, with a Master of UX &amp; Service Design, helping designers and teams build genuine design intuition, not just surface-level skills.
            </p>
            <p>
              With 10+ years as a UX product designer and experience mentoring 50+ designers through ADPList and private programs, I've developed a practical, human-centred approach to teaching design, one that bridges real-world product work with structured learning.
            </p>
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
      </section>
  )
}

function WhatAMentorAdds() {
  return (
    <div>
        <div className="mentor-value">
          <div className="mv-header animate d1">
            <p className="section-label" style={{ textAlign: 'center', display: 'block' }}>What changes</p>
            <h2 className="section-title" style={{ marginBottom: '14px', textAlign: 'center' }}>What shifts when you have someone in your corner</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.75', textAlign: 'center' }}>There's no shortage of great design resources, courses, and communities. A mentor works differently — focused entirely on your situation, your work, and your next move.</p>
          </div>
          <div className="mv-grid">
            <div className="mv-item animate d2">
              <div className="mv-num">01</div>
              <h3>Guidance applied to your specific situation</h3>
              <p>You don't need more frameworks. You need someone who can look at your actual work, your specific career challenge, and tell you what to do next — not what works in general.</p>
            </div>
            <div className="mv-item animate d3">
              <div className="mv-num">02</div>
              <h3>The honest feedback that's hard to get elsewhere</h3>
              <p>A mentor gives you the kind of direct, specific feedback that's rare in most workplaces — grounded in real product design experience, with your growth as the only agenda.</p>
            </div>
            <div className="mv-item animate d4">
              <div className="mv-num">03</div>
              <h3>Accountability that keeps you moving forward</h3>
              <p>Regular sessions with someone genuinely invested in your progress create momentum that self-study rarely does — even when the day-to-day gets in the way.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

function Stats() {
  return (
    <div className="stats-strip">
        <div className="stats-inner">
          <div className="stat animate d1">
            <CountUp target={10} suffix="+" />
            <div className="stat-label">Years in UX</div>
          </div>
          <div className="stat animate d2">
            <CountUp target={50} suffix="+" />
            <div className="stat-label">Designers Mentored</div>
          </div>
          <div className="stat animate d3">
            <div className="stat-number">Top 30%</div>
            <div className="stat-label">ADPList Mentor</div>
          </div>
          <div className="stat animate d4">
            <CountUp target={2} />
            <div className="stat-label">Active Programs</div>
          </div>
        </div>
      </div>
  )
}

function Testimonials() {
  return (
    <div className="testimonials">
        <div className="testi-inner">

          <div className="testi-left animate d1">
            <p className="section-label">What designers say</p>
            <h2 className="testi-heading">Words from people I've worked with</h2>
            <p className="testi-desc">Designers at different stages of their careers, working towards different goals — all mentored through ADPList.</p>
            <a href="https://adplist.org/mentors/winnie-nguyen" target="_blank" rel="noopener" className="testi-adp-link">Read all reviews on ADPList</a>
          </div>

          <div className="testi-grid">

            <div className="testi-card animate d2">
              <div className="testi-quote">&ldquo;</div>
              <p className="testi-text">She created an encouraging atmosphere where learning felt both joyful and insightful. Her advice on leadership combined practical experience with strong academic grounding, making every session meaningful and applicable.</p>
              <div className="testi-author">
                <div className="testi-name">William Nguyen</div>
                <div className="testi-role">Product Designer · CDG Group</div>
              </div>
            </div>

            <div className="testi-card animate d3">
              <div className="testi-quote">&ldquo;</div>
              <p className="testi-text">Winnie gave me insightful suggestions and clear direction, which really helped me reflect on how to improve. She shared lots of helpful resources that will definitely support me in growing my skillset. Highly recommended!</p>
              <div className="testi-author">
                <div className="testi-name">Wendy Lin</div>
                <div className="testi-role">UI/UX Designer</div>
              </div>
            </div>

            <div className="testi-card featured animate d4">
              <div className="testi-quote">&ldquo;</div>
              <p className="testi-text">She guided me through my questions to clarify my career path and how to grow myself. She kindly shared her experiences and introduced me to useful ways to gain skill sets to move closer to my goal of becoming a Product Designer. I feel thankful and I'm looking forward to talking to her more.</p>
              <div className="testi-author">
                <div className="testi-name">Uyen Dong Thi My</div>
                <div className="testi-role">UI/UX Designer</div>
              </div>
            </div>

          </div>
        </div>

        {/* IN THE ROOM */}
        <div className="gallery-inner gallery-dark-spacer">
          <div className="gallery-track-wrap">
          <div className="gallery-track">

            <div className="ig-card animate d1">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="Winnie Nguyen" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/IMG_0030.JPG" alt="A session in the UX Mastery Class" className="ig-card-photo" style={{ objectPosition: '15% 15%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>One session in the UX Mastery Class, held remotely over Zoom.</p>
            </div>

            <div className="ig-card animate d2">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="Winnie Nguyen" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/IMG_3508.JPG" alt="Design Thinking master class at NAB Starcamp" className="ig-card-photo" style={{ objectPosition: '35% 20%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Co-facilitated a Design Thinking master class for 70+ participants at NAB's Starcamp program.</p>
            </div>

            <div className="ig-card animate d3">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="Winnie Nguyen" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/IMG_4940.JPG" alt="Teaching a UI/UX class at CoderSchool" className="ig-card-photo" style={{ objectPosition: '78% 25%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Teaching a UI/UX class at CoderSchool, back when I was one of their instructors.</p>
            </div>

            <div className="ig-card animate d4">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="Winnie Nguyen" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/IMG_4941.JPG" alt="Coder School talk" className="ig-card-photo" style={{ objectPosition: '62% 25%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Speaking at Coder School about guiding designers, not just instructing them.</p>
            </div>

            <div className="ig-card animate d5">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="Winnie Nguyen" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/496B9E18-E77B-43FC-B2B1-85A179436076.jpg" alt="UI/UX Hackathon warmup" className="ig-card-photo" style={{ objectPosition: 'center 25%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Wrapping up the UI/UX Hackathon warmup with this year's cohort.</p>
            </div>

            <div className="ig-card animate d6">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="Winnie Nguyen" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/4EDAED0F-BBC9-4FDE-87BC-DCF8EEA37851.jpg" alt="Hackathon warmup day at FPT Polytechnic" className="ig-card-photo" style={{ objectPosition: '35% 20%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Hackathon warmup day, an event for FPT Polytechnic.</p>
            </div>

            <div className="ig-card animate d1">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="Winnie Nguyen" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/_MG_3033-2.jpg" alt="Hackathon warmup day" className="ig-card-photo" style={{ objectPosition: '40% 30%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Behind the scenes on Hackathon warmup day.</p>
            </div>

            <div className="ig-card animate d3">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="Winnie Nguyen" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/IMG_8591.jpg" alt="Design Thinking Master Class at NAB" className="ig-card-photo" style={{ objectPosition: '32% 30%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Running a Design Thinking Master Class for Product, Engineering, and Design at NAB.</p>
            </div>

            <div className="ig-card animate d4">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="Winnie Nguyen" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/_DSC8210.jpg" alt="Final showcase day for UX Mastery class" className="ig-card-photo" style={{ objectPosition: 'center 20%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Final showcase day for the UX Mastery class.</p>
            </div>

            <div className="ig-card" aria-hidden="true">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/IMG_0030.JPG" alt="" className="ig-card-photo" style={{ objectPosition: '15% 15%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>One session in the UX Mastery Class, held remotely over Zoom.</p>
            </div>

            <div className="ig-card" aria-hidden="true">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/IMG_3508.JPG" alt="" className="ig-card-photo" style={{ objectPosition: '35% 20%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Co-facilitated a Design Thinking master class for 70+ participants at NAB's Starcamp program.</p>
            </div>

            <div className="ig-card" aria-hidden="true">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/IMG_4940.JPG" alt="" className="ig-card-photo" style={{ objectPosition: '78% 25%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Teaching a UI/UX class at CoderSchool, back when I was one of their instructors.</p>
            </div>

            <div className="ig-card" aria-hidden="true">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/IMG_4941.JPG" alt="" className="ig-card-photo" style={{ objectPosition: '62% 25%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Speaking at Coder School about guiding designers, not just instructing them.</p>
            </div>

            <div className="ig-card" aria-hidden="true">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/496B9E18-E77B-43FC-B2B1-85A179436076.jpg" alt="" className="ig-card-photo" style={{ objectPosition: 'center 25%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Wrapping up the UI/UX Hackathon warmup with this year's cohort.</p>
            </div>

            <div className="ig-card" aria-hidden="true">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/4EDAED0F-BBC9-4FDE-87BC-DCF8EEA37851.jpg" alt="" className="ig-card-photo" style={{ objectPosition: '35% 20%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Hackathon warmup day, an event for FPT Polytechnic.</p>
            </div>

            <div className="ig-card" aria-hidden="true">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/_MG_3033-2.jpg" alt="" className="ig-card-photo" style={{ objectPosition: '40% 30%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Behind the scenes on Hackathon warmup day.</p>
            </div>

            <div className="ig-card" aria-hidden="true">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/IMG_8591.jpg" alt="" className="ig-card-photo" style={{ objectPosition: '32% 30%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Running a Design Thinking Master Class for Product, Engineering, and Design at NAB.</p>
            </div>

            <div className="ig-card" aria-hidden="true">
              <div className="ig-card-header">
                <img src="/training/assets/avatar.png" alt="" className="ig-card-avatar"/>
                <span className="ig-card-handle">winwinnie2910</span>
              </div>
              <img src="/training/assets/class-images/_DSC8210.jpg" alt="" className="ig-card-photo" style={{ objectPosition: 'center 20%' }}/>
              <div className="ig-card-actions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H12l-5 3 .9-4.5A8.5 8.5 0 1 1 21 11.5z"/></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>
                <svg className="ig-card-bookmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>
              </div>
              <p className="ig-card-caption"><strong>winwinnie2910</strong>Final showcase day for the UX Mastery class.</p>
            </div>

          </div>
          </div>
        </div>
      </div>
  )
}

function Quote() {
  return (
    <div className="quote-section">
        <div className="quote-inner">
          <div>
            <p className="quote-label">Philosophy</p>
            <h3 className="quote-side-title">What I believe about design education</h3>
          </div>
          <div>
            <p className="quote-text">
              Good design education doesn't just teach tools or processes — it teaches people how to see. My job is to build that vision in every student I work with.
            </p>
            <p className="quote-author">— Winnie Nguyen, UX Product Design Educator</p>
          </div>
        </div>
      </div>
  )
}

function FinalCta() {
  return (
    <div className="final-cta">
        <div className="final-cta-inner">
          <p className="section-label">Ready to start?</p>
          <h2>See where you stand — it takes 15 minutes</h2>
          <p>The self-assessment is free, takes about 15 minutes, and gives you a personalised skills map with a learning pathway before you ever speak to me. It's the best first step.</p>
          <div className="final-cta-actions">
            <a href="/training/self-assessment.html" className="btn-primary">Run self-assessment, free <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M12 4H5M12 4V11"/></svg></a>
            <a href="https://adplist.org/mentors/winnie-nguyen" target="_blank" rel="noopener" className="btn-ghost">Or connect on ADPList <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M12 4H5M12 4V11"/></svg></a>
          </div>
          <p className="cta-note">No account needed · Results shown instantly · Takes ~15 min</p>
        </div>
      </div>
  )
}

function Footer({ onContact }) {
  return (
    <footer>
        <div className="footer-inner">
          <p>© 2026 Winnie Nguyen · UX Product Design Educator</p>
          <div className="footer-links">
            <a href="#" onClick={(e) => { e.preventDefault(); onContact() }}>Contact</a>
            <a href="https://www.linkedin.com/in/winnienguyen2910" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </footer>
  )
}

export default function TrainingHub() {
  const [contactOpen, setContactOpen] = useState(false)

  // scroll-triggered fade-in for every .animate element
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )
    document.querySelectorAll('.animate').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <Nav />
      <Hero />
      <Recognition />
      <Programs />
      <HowItWorks />
      <Mentor />
      <WhatAMentorAdds />
      <Stats />
      <Testimonials />
      <Quote />
      <FinalCta />
      <Footer onContact={() => setContactOpen(true)} />
    </>
  )
}
