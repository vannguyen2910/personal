import { ProgramShell, MentorSection, TestimonialSection, Curriculum, LeadForm } from '../../components/program'
import { program, formats } from './program.content.js'
import { sessions } from './program.sessions.js'

// Shows the English and Vietnamese version of one text; the language toggle picks which is visible.
const T = ({ v }) => (
  <>
    <span className="lang-en">{v.en}</span>
    <span className="lang-vi">{v.vi}</span>
  </>
)

const Check = () => (
  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8.5l3 3 7-7"/></svg></span>
)

function Hero() {
  const { hero } = program
  const [l1, l2, l3] = hero.lines
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-top">
          <div className="hero-badges"><span className="hero-badge"><T v={hero.badge} /></span></div>
        </div>
        <div className="hero-grid">
          <div>
            <h1 className="hero-lines">
              <span><span><T v={l1} /></span></span>
              <span><span><em className="it"><T v={l2} /></em></span></span>
              <span><span><span className="mark"><span><T v={l3} /></span></span>.</span></span>
            </h1>
            <p className="hero-desc"><T v={hero.description} /></p>
            <div className="hero-cta">
              <a href="#closing" className="btn btn-dark"><span className="lang-en">Enroll Now</span><span className="lang-vi">Đăng Ký Khoá Học</span></a>
              <a href="/training/self-assessment.html" className="btn btn-ghost"><span className="lang-en">Free self-assessment</span><span className="lang-vi">Tự đánh giá năng lực</span></a>
            </div>
            <div className="hero-stats">
              {hero.stats.map((s, i) => (
                <div className="hero-stat" key={i}>
                  <strong>{typeof s.value === 'string' ? s.value : <T v={s.value} />}</strong>
                  <span><T v={s.label} /></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function Pain() {
  const { pain } = program
  return (
    <section className="pain on-dark">
      <div className="wrap">
        <span className="kicker"><span className="lang-en">Sound familiar?</span><span className="lang-vi">Đã từng như thế này chưa?</span></span>
        <p className="pain-headline reveal"><T v={pain.headline} /> <em><T v={pain.emphasis} /></em></p>
        <ul className="pain-list">
          {pain.points.map((p, i) => (
            <li key={i} className={`reveal reveal-d${i + 1}`}><em>{String(i + 1).padStart(2, '0')}</em><span><T v={p} /></span></li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Who() {
  const { who } = program
  return (
    <section className="who">
      <div className="wrap">
        <div className="who-grid">
          <div className="reveal">
            <span className="kicker"><span className="lang-en">Who it's for</span><span className="lang-vi">Dành cho ai</span></span>
            <p className="who-headline" style={{ marginTop: '1.2rem' }}><T v={who.headline} /></p>
          </div>
          <div className="who-card reveal reveal-d2">
            <div className="num">{who.bigNumber}</div>
            <p><T v={who.body} /></p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Walkaway() {
  return (
    <section className="walkaway">
      <div className="wrap">
        <div className="walkaway-card reveal">
          <span className="walkaway-badge"><span className="lang-en">What you walk away with</span><span className="lang-vi">Bạn sẽ mang về được gì</span></span>
          <p className="walkaway-headline"><T v={program.walkaway.headline} /></p>
        </div>
      </div>
    </section>
  )
}

function CurriculumSection() {
  const { curriculum } = program
  return (
    <section className="curriculum" id="curriculum">
      <div className="wrap">
        <div className="curriculum-head reveal">
          <span className="kicker"><span className="lang-en">The curriculum</span><span className="lang-vi">Giáo trình</span></span>
          <h2 style={{ marginTop: '1rem' }}><T v={curriculum.title} /></h2>
        </div>
        <Curriculum sessions={sessions} />
        <p className="curriculum-note reveal"><T v={curriculum.note} /></p>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="pricing-head reveal">
          <span className="kicker"><span className="lang-en">Investment</span><span className="lang-vi">Đầu tư</span></span>
          <h2><span className="lang-en">Choose your format.</span><span className="lang-vi">Chọn hình thức phù hợp.</span></h2>
        </div>
        <div className="pricing-grid">
          {program.pricing.plans.map((plan, i) => (
            <div key={plan.format} className={`pricing-card ${plan.dark ? 'is-dark' : 'is-light'} reveal${i ? ' reveal-d2' : ''}`}>
              <div className="pricing-card-head">
                <span className="pricing-card-name"><T v={plan.name} /></span>
                <span className="pricing-badge"><T v={plan.badge} /></span>
              </div>
              <div className="pricing-price">{plan.price}<span><T v={plan.per} /></span></div>
              <p className="pricing-total"><span className="lang-en">Full program:</span><span className="lang-vi">Trọn khóa:</span> <b>{plan.total}</b></p>
              <div className="pricing-features">
                {plan.features.map((f, k) => (
                  <div className="pricing-feature" key={k}>
                    <Check />
                    <div>
                      <div className="pricing-feature-title"><T v={f.title} /></div>
                      <div className="pricing-feature-desc"><T v={f.desc} /></div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#closing" className={`btn ${plan.dark ? 'btn-lime' : 'btn-dark'}`} data-format={plan.format}>
                <span className="lang-en">Enroll</span><span className="lang-vi">Đăng Ký</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Closing() {
  const { closing } = program
  return (
    <section className="closing" id="closing">
      <div className="wrap">
        <div className="closing-grid">
          <div className="reveal">
            <span className="kicker"><T v={closing.title} /></span>
            <div className="closing-cta" style={{ marginTop: '1.5rem' }}>
              <LeadForm subject={`New coaching inquiry: ${program.name}`} source={`${program.name} Program: Contact Form`} formats={formats} />
            </div>
          </div>
          <div className="format-list reveal reveal-d2">
            {closing.rows.map((r, i) => (
              <div className="format-row" key={i}><span><T v={r.label} /></span><span><T v={r.value} /></span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ProgramPage() {
  return (
    <ProgramShell>
      <Hero />
      <Pain />
      <Who />
      <Walkaway />
      <CurriculumSection />
      <Pricing />
      <MentorSection />
      <TestimonialSection />
      <Closing />
    </ProgramShell>
  )
}
