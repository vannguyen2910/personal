import { ProgramShell, MentorSection, TestimonialSection, Curriculum, LeadForm } from '../../../components/program'
import { sessions } from './systematic-ai-prototyping.sessions.js'

const FORMATS = [
    { value: "1:1 Coaching", en: "1:1 Coaching", vi: "Kèm 1:1" },
    { value: "Group Training", en: "Group Training", vi: "Học nhóm" },
  ]

function Hero() {
  return (
    <header className="hero">
        <div className="wrap">
          <div className="hero-top">
            <div className="hero-badges">
              <span className="hero-badge"><span className="lang-en">Master Class</span><span className="lang-vi">Master Class</span></span>
              <span className="hero-badge"><span className="lang-en">UI/UX Designer</span><span className="lang-vi">UI/UX Designer</span></span>
              <span className="hero-badge"><span className="lang-en">Product Design</span><span className="lang-vi">Product Design</span></span>
            </div>
          </div>

          <div className="hero-grid">
            <div>
              <h1 className="hero-lines">
                <span><span><em className="it">Systematic</em></span></span>
                <span><span><span className="mark"><span>AI Prototyping</span></span></span></span>
              </h1>
              <p className="hero-desc"><span className="lang-en">Build AI prototypes from your real Figma files. Reuse what you've already built and set smart rules once, so you scale faster and stop burning through your AI credits.</span><span className="lang-vi">Build AI prototype từ chính file Figma của bạn. Tái sử dụng những gì đã có và đặt rule thông minh 1 lần, để scale nhanh hơn và không cháy hết AI credit.</span></p>
              <a href="#mentor" className="hero-mentor">
                <img src="/training/assets/avatar.png" alt="Winnie Nguyen" className="hero-mentor-avatar"/>
                <span className="hero-mentor-text">
                  <strong>Winnie Nguyen</strong>
                  <span>UX Product Design Educator</span>
                </span>
              </a>
              <div className="hero-cta">
                <a href="#closing" className="btn btn-dark"><span className="lang-en">Enroll Now</span><span className="lang-vi">Đăng Ký Khoá Học</span></a>
                <a href="#curriculum" className="btn btn-ghost"><span className="lang-en">View Curriculum</span><span className="lang-vi">Xem nội dung khoá học</span></a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat"><strong>4</strong><span><span className="lang-en">Sessions · 2 weeks</span><span className="lang-vi">Buổi học · 2 tuần</span></span></div>
                <div className="hero-stat"><strong>3 Tools</strong><span><span className="lang-en">Figma Make · Claude · Cursor</span><span className="lang-vi">Figma Make · Claude · Cursor</span></span></div>
                <div className="hero-stat"><strong>1:1 or Group</strong><span><span className="lang-en">Format</span><span className="lang-vi">Hình thức</span></span></div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-ring pp-ring"></div>
              <div className="blob blob-1 float-a"></div>
              <div className="blob-dot pp-dot"></div>

              <div className="pp-phone">
                <div className="pp-line-1"></div>
                <div className="pp-line-2"></div>
                <div className="pp-block-lg"></div>
                <div className="pp-block-row"><span></span><span></span></div>
                <div className="pp-cta"></div>
              </div>

              <span className="pp-badge pp-badge-figma float-b">Figma Make</span>
              <span className="pp-badge pp-badge-claude float-c">Claude</span>
              <span className="pp-badge pp-badge-cursor float-a">Cursor</span>

              <span className="material-symbols-rounded pp-spark pp-spark-1" aria-hidden="true">stars_2</span>
              <span className="material-symbols-rounded pp-spark pp-spark-2" aria-hidden="true">stars_2</span>
              <span className="material-symbols-rounded pp-spark pp-spark-3" aria-hidden="true">stars_2</span>
            </div>
          </div>
        </div>
      </header>
  )
}

function Pain() {
  return (
    <section className="pain on-dark">
        <div className="wrap">
          <span className="kicker"><span className="lang-en">Common problem</span><span className="lang-vi">Vấn đề thường gặp</span></span>
          <p className="pain-headline reveal"><span className="lang-en">AI can build a screen. The problem starts with <em>the next one.</em></span><span className="lang-vi">AI build được 1 màn hình. Vấn đề bắt đầu từ <em>màn hình tiếp theo.</em></span></p>

          <ul className="pain-list">
            <li className="reveal reveal-d1"><em>01</em><span><span className="lang-en">You give AI a screenshot. It builds something close.</span><span className="lang-vi">Bạn đưa AI 1 screenshot. Nó build ra thứ gì đó gần đúng.</span></span></li>
            <li className="reveal reveal-d2"><em>02</em><span><span className="lang-en">Ask for the next screen — the spacing shifts, the button looks different, the component gets rebuilt from scratch.</span><span className="lang-vi">Yêu cầu màn hình tiếp theo — spacing lệch đi, button trông khác, component bị build lại từ đầu.</span></span></li>
            <li className="reveal reveal-d3"><em>03</em><span><span className="lang-en">By screen 4, you're spending more time fixing AI than building with it.</span><span className="lang-vi">Đến màn hình thứ 4, bạn dành nhiều thời gian sửa AI hơn là build cùng AI.</span></span></li>
            <li className="reveal reveal-d3"><em>04</em><span><span className="lang-en">Every fix is another prompt, and every re-explanation is more credit. Soon the credits are gone and the prototype isn't finished.</span><span className="lang-vi">Mỗi lần sửa là thêm 1 prompt, mỗi lần giải thích lại là tốn thêm credit. Chẳng mấy chốc credit hết mà prototype vẫn chưa xong.</span></span></li>
          </ul>

          <p className="pain-insight reveal"><span className="lang-en">The problem isn't that AI can't build. <em>It's that AI doesn't know your product, and you pay to re-explain it every time.</em></span><span className="lang-vi">Vấn đề không phải AI không build được. <em>Mà là AI không hiểu sản phẩm của bạn, và bạn phải trả tiền để giải thích lại mỗi lần.</em></span></p>
        </div>
      </section>
  )
}

function Who() {
  return (
    <section className="who" id="audience">
        <div className="wrap">
          <div className="who-grid">
            <div className="reveal">
              <span className="kicker"><span className="lang-en">Who it's for</span><span className="lang-vi">Dành cho ai</span></span>
              <p className="who-headline" style={{ marginTop: '1.2rem' }}><span className="lang-en">This is for you <span className="mark"><span>if...</span></span></span><span className="lang-vi">Đây là khoá học dành cho bạn <span className="mark"><span>nếu...</span></span></span></p>
            </div>
            <div className="reveal reveal-d2">
              <ul className="for-you-list">
                <li><span className="lang-en">You're a Product Designer who already knows Figma</span><span className="lang-vi">Bạn là Product Designer đã biết dùng Figma</span></li>
                <li><span className="lang-en">You have real designs or a design system to work with</span><span className="lang-vi">Bạn có sẵn thiết kế thật hoặc 1 design system để làm việc</span></li>
                <li><span className="lang-en">You've tried prototyping with AI, but the results don't stay consistent</span><span className="lang-vi">Bạn đã thử prototype bằng AI, nhưng kết quả không nhất quán</span></li>
                <li><span className="lang-en">You want to move faster without giving up control over the design</span><span className="lang-vi">Bạn muốn nhanh hơn mà không mất quyền kiểm soát thiết kế</span></li>
                <li><span className="lang-en">You want to build something people can actually click through and test</span><span className="lang-vi">Bạn muốn build ra thứ mọi người thật sự click qua và test được</span></li>
              </ul>
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
            <span className="walkaway-badge">
              <span className="material-symbols-rounded" aria-hidden="true">wand_stars</span>
              <span className="lang-en">What you walk away with</span><span className="lang-vi">Học xong bạn làm được gì</span>
            </span>
            <p className="walkaway-headline"><span className="lang-en">A <span className="mark"><span>prototype pattern</span></span> and smart rules AI can read. A prototype that runs in the browser, whether 3 screens or 30, built with <span className="mark"><span>a fraction of the credits</span></span>. Coherent enough to demo for stakeholders.</span><span className="lang-vi">Một <span className="mark"><span>prototype pattern</span></span> và bộ rule thông minh AI đọc được. Một prototype chạy được trong trình duyệt, dù 3 hay 30 màn hình, build với <span className="mark"><span>chỉ 1 phần nhỏ credit</span></span>. Đủ mạch lạc để demo cho stakeholder.</span></p>
          </div>
        </div>
      </section>
  )
}

function CurriculumSection() {
  return (
    <section className="curriculum" id="curriculum">
        <div className="wrap">
          <div className="curriculum-head reveal">
            <span className="kicker"><span className="lang-en">The curriculum</span><span className="lang-vi">Nội dung khoá học</span></span>
            <h2 style={{ marginTop: '1rem' }}><span className="lang-en">What you build,<br/><em style={{ fontStyle: 'normal', color: 'var(--coral)' }}>session by session.</em></span><span className="lang-vi">Mỗi buổi,<br/><em style={{ fontStyle: 'normal', color: 'var(--coral)' }}>bạn xây dựng được gì.</em></span></h2>
          </div>

          <Curriculum sessions={sessions} />
        </div>
      </section>
  )
}

function Pricing() {
  return (
    <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="pricing-head reveal">
            <span className="kicker"><span className="lang-en">Pricing</span><span className="lang-vi">Học phí</span></span>
            <h2><span className="lang-en">Choose your format.</span><span className="lang-vi">Chọn hình thức phù hợp.</span></h2>
          </div>

          <div className="pricing-grid">

            <div className="pricing-card is-light reveal reveal-d1">
              <div className="pricing-card-head">
                <span className="pricing-card-name">1:1 Coaching</span>
                <span className="pricing-badge"><span className="lang-en">Most Focused</span><span className="lang-vi">Tập trung nhất</span></span>
              </div>
              <div className="pricing-price">3.000.000₫</div>

              <div className="pricing-facts">
                <div className="pricing-fact"><div className="pricing-fact-num">4</div><div className="pricing-fact-label"><span className="lang-en">Sessions</span><span className="lang-vi">Buổi học</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">2 wks</span><span className="lang-vi">2 tuần</span></div><div className="pricing-fact-label"><span className="lang-en">Duration</span><span className="lang-vi">Thời lượng</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">2x/week</span><span className="lang-vi">2 lần/tuần</span></div><div className="pricing-fact-label"><span className="lang-en">Cadence</span><span className="lang-vi">Tần suất</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">90 min</span><span className="lang-vi">90 phút</span></div><div className="pricing-fact-label"><span className="lang-en">Per session</span><span className="lang-vi">Mỗi buổi</span></div></div>
              </div>

              <div className="pricing-features">
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 13c0-3 2.5-5 6-5s6 2 6 5M8 8a3 3 0 100-6 3 3 0 000 6z"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">1:1 Support</span><span className="lang-vi">Đồng hành 1:1</span></div><div className="pricing-feature-desc"><span className="lang-en">Throughout all 4 sessions.</span><span className="lang-vi">Xuyên suốt cả 4 buổi.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 13l3-9 3 9M4.5 9.5h3M9 13l3-9 3 9"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Real Project</span><span className="lang-vi">Dự án thật</span></div><div className="pricing-feature-desc"><span className="lang-en">Apply directly to your own project.</span><span className="lang-vi">Áp dụng trực tiếp trên dự án của bạn.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 13c0-3 2.5-5 6-5s6 2 6 5M8 8a3 3 0 100-6 3 3 0 000 6z"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Direct Feedback</span><span className="lang-vi">Phản hồi trực tiếp</span></div><div className="pricing-feature-desc"><span className="lang-en">On the exact prototype pattern you build.</span><span className="lang-vi">Trên đúng prototype pattern bạn build.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2.5" y="3" width="11" height="10.5" rx="1.5"/><path d="M2.5 6h11M5.5 1.5v3M10.5 1.5v3"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Flexible Schedule</span><span className="lang-vi">Lịch linh hoạt</span></div><div className="pricing-feature-desc"><span className="lang-en">On your own timeline.</span><span className="lang-vi">Theo tiến độ của bạn.</span></div></div>
                </div>
              </div>

              <a href="#closing" className="btn btn-dark" data-format="1:1 Coaching"><span className="lang-en">Enroll</span><span className="lang-vi">Đăng Ký</span></a>
            </div>

            <div className="pricing-card is-dark reveal reveal-d2">
              <div className="pricing-card-head">
                <span className="pricing-card-name">Group Training</span>
                <span className="pricing-badge"><span className="lang-en">Best Value</span><span className="lang-vi">Tiết kiệm nhất</span></span>
              </div>
              <div className="pricing-price">1.500.000₫</div>
              <p className="pricing-total"><span className="lang-en">Per person</span><span className="lang-vi">Mỗi người</span> <span className="pricing-total-label"><span className="lang-en">· groups of 3–5</span><span className="lang-vi">· nhóm 3–5 người</span></span></p>

              <div className="pricing-facts">
                <div className="pricing-fact"><div className="pricing-fact-num">4</div><div className="pricing-fact-label"><span className="lang-en">Sessions</span><span className="lang-vi">Buổi học</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">2 wks</span><span className="lang-vi">2 tuần</span></div><div className="pricing-fact-label"><span className="lang-en">Duration</span><span className="lang-vi">Thời lượng</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">2x/week</span><span className="lang-vi">2 lần/tuần</span></div><div className="pricing-fact-label"><span className="lang-en">Cadence</span><span className="lang-vi">Tần suất</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">90 min</span><span className="lang-vi">90 phút</span></div><div className="pricing-fact-label"><span className="lang-en">Per session</span><span className="lang-vi">Mỗi buổi</span></div></div>
              </div>

              <div className="group-cohort-note">
                <span className="group-cohort-note-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1.5 13c0-2.5 2-4 4-4s4 1.5 4 4M5.5 6.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM9.7 5.2c.3-.1.6-.2 1-.2 2 0 4 1.5 4 4M10.8 2.3c.9.2 1.5 1 1.5 1.9"/></svg></span>
                <div>
                  <div className="group-cohort-note-title"><span className="lang-en">Building your own cohort</span><span className="lang-vi">Tự rủ nhóm cùng học</span></div>
                  <div className="group-cohort-note-body"><span className="lang-en">Group training starts once there's a full cohort, so it may take a little longer to kick off than 1:1. If you know a few designers who'd want this too, bring them with you — I'll take it from there.</span><span className="lang-vi">Học nhóm chỉ bắt đầu khi đã đủ người, nên có thể mất thêm thời gian hơn so với học 1:1. Nếu bạn biết vài designer khác cũng đang cần điều này, hãy rủ họ cùng đăng ký — phần còn lại để mình lo.</span></div>
                </div>
              </div>

              <div className="pricing-features">
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 13l3-9 3 9M4.5 9.5h3M9 13l3-9 3 9"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Same Content</span><span className="lang-vi">Cùng nội dung</span></div><div className="pricing-feature-desc"><span className="lang-en">4 sessions, learned in a group of 3–5.</span><span className="lang-vi">4 buổi, học theo nhóm 3–5 người.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1.5 13c0-2.5 2-4 4-4s4 1.5 4 4M5.5 6.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM9.7 5.2c.3-.1.6-.2 1-.2 2 0 4 1.5 4 4M10.8 2.3c.9.2 1.5 1 1.5 1.9"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Peer Feedback</span><span className="lang-vi">Phản hồi chéo</span></div><div className="pricing-feature-desc"><span className="lang-en">From the group, not just the mentor.</span><span className="lang-vi">Từ nhóm học, không chỉ từ mentor.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v3M8 11v3M2 8h3M11 8h3M4.5 4.5l2 2M9.5 9.5l2 2M11.5 4.5l-2 2M6.5 9.5l-2 2"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Steady Pace</span><span className="lang-vi">Nhịp học đều đặn</span></div><div className="pricing-feature-desc"><span className="lang-en">With people alongside you.</span><span className="lang-vi">Có bạn đồng hành.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 1.5v13M11 4.2c0-1.2-1.3-2.2-3-2.2s-3 1-3 2.3c0 3 6 1.4 6 4.4 0 1.3-1.3 2.3-3 2.3s-3-1-3-2.2"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Lower Cost</span><span className="lang-vi">Chi phí thấp hơn</span></div><div className="pricing-feature-desc"><span className="lang-en">Same full content.</span><span className="lang-vi">Cùng nội dung đầy đủ.</span></div></div>
                </div>
              </div>

              <a href="#closing" className="btn btn-lime" data-format="Group Training"><span className="lang-en">Enroll</span><span className="lang-vi">Đăng Ký</span></a>
            </div>

          </div>
        </div>
      </section>
  )
}

function Closing() {
  return (
    <section className="closing" id="closing">
        <div className="wrap">
          <div className="closing-grid">
            <div className="reveal">
              <span className="kicker"><span className="lang-en">Ready to start?</span><span className="lang-vi">Sẵn sàng bắt đầu?</span></span>
              <h2 style={{ marginTop: '1rem' }}><span className="lang-en">Ready to stop rebuilding the same context?<br/><em style={{ fontStyle: 'normal', color: 'var(--lime)' }}>Bring a real Figma file.</em></span><span className="lang-vi">Sẵn sàng thôi dựng lại context mỗi lần chưa?<br/><em style={{ fontStyle: 'normal', color: 'var(--lime)' }}>Mang theo 1 file Figma thật.</em></span></h2>
              <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: 'rgba(245,239,226,.75)', maxWidth: '38ch' }}><span className="lang-en">We'll turn it into a working prototype together.</span><span className="lang-vi">Cùng nhau biến nó thành 1 prototype chạy được.</span></p>
              <div className="closing-cta">
                <LeadForm subject="New inquiry: Systematic AI Prototyping course" source="AI Prototyping Course \u2014 Contact Form" formats={FORMATS} />
                <a href="/training/self-assessment.html" className="btn btn-ghost lead-form-secondary" style={{ borderColor: 'rgba(245,239,226,.4)', color: 'var(--cream)' }}>
                  <span className="lang-en">Or start with the free self-assessment</span><span className="lang-vi">Hoặc bắt đầu với bài tự đánh giá miễn phí</span>
                </a>
              </div>
            </div>

            <div className="format-list reveal reveal-d2">
              <div className="format-row"><span><span className="lang-en">Format</span><span className="lang-vi">Hình thức</span></span><span>Video · 1:1 · Group</span></div>
              <div className="format-row"><span><span className="lang-en">Delivery</span><span className="lang-vi">Triển khai</span></span><span><span className="lang-en">Online via Google Meet or Zoom</span><span className="lang-vi">Online qua Google Meet hoặc Zoom</span></span></div>
              <div className="format-row"><span><span className="lang-en">Language</span><span className="lang-vi">Ngôn ngữ</span></span><span><span className="lang-en">Vietnamese</span><span className="lang-vi">Tiếng Việt</span></span></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default function SystematicAiPrototyping() {
  return (
    <ProgramShell navVi={{ curriculum: 'Nội dung', mentor: 'Giảng viên' }}>
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
