import { ProgramShell, MentorSection, TestimonialSection, Curriculum, LeadForm } from '../../../../design-system/components/program'
import { sessions } from './ai-design-workflow.sessions.js'

const FORMATS = [
  { value: "1:1 Coaching", en: "1:1 Coaching", vi: "Kèm 1:1" },
  { value: "Group Cohort", en: "Group Cohort", vi: "Lớp nhóm" },
]

const STAGES = [
  { en: 'Discover', vi: 'Discover' },
  { en: 'Define', vi: 'Define' },
  { en: 'Develop', vi: 'Develop' },
  { en: 'Deliver', vi: 'Deliver' },
]

function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-top">
          <div className="hero-badges">
            <span className="hero-badge"><span className="lang-en">Program</span><span className="lang-vi">Chương trình</span></span>
            <span className="hero-badge"><span className="lang-en">Mid / Senior Designer</span><span className="lang-vi">Mid / Senior Designer</span></span>
            <span className="hero-badge"><span className="lang-en">UI/UX Product Design</span><span className="lang-vi">UI/UX Product Design</span></span>
          </div>
        </div>

        <div className="hero-grid">
          <div>
            <h1 className="hero-lines">
              <span><span><em className="it">AI Design</em></span></span>
              <span><span><span className="mark"><span>Workflow</span></span></span></span>
            </h1>
            <p className="hero-desc"><span className="lang-en">A repeatable way to work with AI, from the business question to a tested, handoff-ready prototype. Every step's output feeds the next, and every output passes a review gate.</span><span className="lang-vi">Một cách làm việc với AI có thể lặp lại, từ business questions đến prototype đã test và sẵn sàng handoff. Output của mỗi bước là input của bước sau, và mỗi output đều qua 1 gate kiểm tra.</span></p>
            <a href="#mentor" className="hero-mentor">
              <img src="/training/assets/avatar.png" alt="Winnie Nguyen" className="hero-mentor-avatar"/>
              <span className="hero-mentor-text">
                <strong>Winnie Nguyen</strong>
                <span>UX Product Design Educator</span>
              </span>
            </a>
            <div className="hero-cta">
              <a href="#closing" className="btn btn-dark"><span className="lang-en">Join the Waitlist</span><span className="lang-vi">Đăng Ký Danh Sách Chờ</span></a>
              <a href="#curriculum" className="btn btn-ghost"><span className="lang-en">View Curriculum</span><span className="lang-vi">Xem nội dung khoá học</span></a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>10</strong><span><span className="lang-en">Sessions · 90 min weekly</span><span className="lang-vi">Buổi học · 90 phút/tuần</span><span className="hero-stat-sub"><span className="lang-en">~2.5 months</span><span className="lang-vi">~2,5 tháng</span></span></span></div>
              <div className="hero-stat"><strong>7–8</strong><span><span className="lang-en">Designers per cohort</span><span className="lang-vi">Designer mỗi lớp</span></span></div>
              <div className="hero-stat"><strong>1</strong><span><span className="lang-en">Your own real case, start to finish</span><span className="lang-vi">Case thật của bạn, từ đầu đến cuối</span></span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-ring adw-ring"></div>
            <div className="adw-stages" aria-hidden="true">
              {STAGES.map((s, i) => (
                <div className="adw-stage" key={s.en}>
                  <span className="adw-stage-num">0{i + 1}</span>
                  <span className="adw-stage-name"><span className="lang-en">{s.en}</span><span className="lang-vi">{s.vi}</span></span>
                  <svg className="adw-stage-star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0 C12 6 14 10 20 12 C14 14 12 18 12 24 C12 18 10 14 4 12 C10 10 12 6 12 0 Z"/></svg>
                  <span className="adw-stage-gate"></span>
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
  return (
    <section className="pain on-dark">
      <div className="wrap">
        <span className="kicker"><span className="lang-en">Common problem</span><span className="lang-vi">Vấn đề thường gặp</span></span>
        <p className="pain-headline reveal"><span className="lang-en">Using AI is easy. <em>Trusting what comes out is the hard part.</em></span><span className="lang-vi">Dùng AI thì dễ. <em>Tin được kết quả AI trả về mới là phần khó.</em></span></p>

        <ul className="pain-list">
          <li className="reveal reveal-d1"><em>01</em><span><span className="lang-en">You wait for the PRD, then turn it into screens. If AI can do that part, where does that leave you?</span><span className="lang-vi">Bạn chờ PRD, rồi biến nó thành design. Nếu AI làm được phần đó, vị trí của bạn ở đâu?</span></span></li>
          <li className="reveal reveal-d2"><em>02</em><span><span className="lang-en">You use AI here and there, but each task starts from zero. Nothing carries over to the next step.</span><span className="lang-vi">Bạn dùng AI chỗ này chỗ kia, nhưng mỗi task lại bắt đầu từ số 0. Không có gì carry over sang bước sau.</span></span></li>
          <li className="reveal reveal-d3"><em>03</em><span><span className="lang-en">AI summaries sound confident. You are not sure which parts are real, and you cannot trace them back to a source.</span><span className="lang-vi">AI Summaries nghe rất tự tin. Bạn không chắc phần nào là thật, và không truy ngược được về source.</span></span></li>
          <li className="reveal reveal-d4"><em>04</em><span><span className="lang-en">When a stakeholder asks "why this design?", the answer is scattered across chats and files.</span><span className="lang-vi">Khi stakeholder hỏi "sao lại design thế này?", câu trả lời nằm rải rác trong các cuộc chat và file.</span></span></li>
        </ul>

        <p className="pain-insight reveal"><span className="lang-en">AI won't replace designers. <em>Designers who run a clear workflow with AI will replace those who don't.</em></span><span className="lang-vi">AI sẽ không thay thế designer. <em>Designer có workflow rõ ràng với AI sẽ thay thế người không có.</em></span></p>
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
              <li><span className="lang-en">You are a mid or senior UI/UX product designer with solid design foundations</span><span className="lang-vi">Bạn là UI/UX product designer mid hoặc senior với nền tảng thiết kế vững</span></li>
              <li><span className="lang-en">You want to move upstream and help shape the requirement, not just receive it</span><span className="lang-vi">Bạn muốn tham gia sớm hơn và cùng shape requirement, không chỉ nhận nó</span></li>
              <li><span className="lang-en">You have a real case to work on (or we provide one)</span><span className="lang-vi">Bạn có 1 case thật để làm (hoặc mình cung cấp)</span></li>
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
          <p className="walkaway-headline"><span className="lang-en">A <span className="mark"><span>repeatable workflow</span></span> and an <span className="mark"><span>Experience Hub</span></span> that links every decision to its evidence.</span><span className="lang-vi">Một <span className="mark"><span>workflow lặp lại được</span></span> và 1 <span className="mark"><span>Experience Hub</span></span> kết nối mỗi decision với evidence tương ứng.</span></p>
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
          <h2 style={{ marginTop: '1rem' }}><span className="lang-en">What you'll<br/><em style={{ fontStyle: 'normal', color: 'var(--coral)' }}>learn.</em></span><span className="lang-vi">Bạn sẽ<br/><em style={{ fontStyle: 'normal', color: 'var(--coral)' }}>học gì.</em></span></h2>
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
              <div className="pricing-price pricing-price-tba"><span className="lang-en">To be announced</span><span className="lang-vi">Sẽ công bố</span></div>

              <div className="pricing-facts">
                <div className="pricing-fact"><div className="pricing-fact-num">10</div><div className="pricing-fact-label"><span className="lang-en">Sessions</span><span className="lang-vi">Buổi học</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">~2.5 mo</span><span className="lang-vi">~2,5 tháng</span></div><div className="pricing-fact-label"><span className="lang-en">Duration</span><span className="lang-vi">Thời lượng</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">Weekly</span><span className="lang-vi">Hàng tuần</span></div><div className="pricing-fact-label"><span className="lang-en">Cadence</span><span className="lang-vi">Tần suất</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">90 min</span><span className="lang-vi">90 phút</span></div><div className="pricing-fact-label"><span className="lang-en">Per session</span><span className="lang-vi">Mỗi buổi</span></div></div>
              </div>

              <div className="pricing-features">
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 13c0-3 2.5-5 6-5s6 2 6 5M8 8a3 3 0 100-6 3 3 0 000 6z"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">1:1 Support</span><span className="lang-vi">Đồng hành 1:1</span></div><div className="pricing-feature-desc"><span className="lang-en">Throughout all 10 sessions.</span><span className="lang-vi">Xuyên suốt cả 10 buổi.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 13l3-9 3 9M4.5 9.5h3M9 13l3-9 3 9"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Real Project</span><span className="lang-vi">Dự án thật</span></div><div className="pricing-feature-desc"><span className="lang-en">Apply directly to your own case.</span><span className="lang-vi">Áp dụng trực tiếp trên case của bạn.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 13c0-3 2.5-5 6-5s6 2 6 5M8 8a3 3 0 100-6 3 3 0 000 6z"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Direct Feedback</span><span className="lang-vi">Phản hồi trực tiếp</span></div><div className="pricing-feature-desc"><span className="lang-en">On your own workflow and Experience Hub.</span><span className="lang-vi">Trên workflow và Experience Hub của bạn.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2.5" y="3" width="11" height="10.5" rx="1.5"/><path d="M2.5 6h11M5.5 1.5v3M10.5 1.5v3"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Flexible Schedule</span><span className="lang-vi">Lịch linh hoạt</span></div><div className="pricing-feature-desc"><span className="lang-en">On your own timeline.</span><span className="lang-vi">Theo tiến độ của bạn.</span></div></div>
                </div>
              </div>

              <a href="#closing" className="btn btn-dark" data-format="1:1 Coaching"><span className="lang-en">Join the Waitlist</span><span className="lang-vi">Đăng Ký Danh Sách Chờ</span></a>
            </div>

            <div className="pricing-card is-dark reveal reveal-d2">
              <div className="pricing-card-head">
                <span className="pricing-card-name">Group Cohort</span>
                <span className="pricing-badge"><span className="lang-en">Best Value</span><span className="lang-vi">Tiết kiệm nhất</span></span>
              </div>
              <div className="pricing-price pricing-price-tba"><span className="lang-en">To be announced</span><span className="lang-vi">Sẽ công bố</span></div>
              <p className="pricing-total"><span className="lang-en">Per person</span><span className="lang-vi">Mỗi người</span> <span className="pricing-total-label"><span className="lang-en">· groups of 7–8</span><span className="lang-vi">· nhóm 7–8 người</span></span></p>

              <div className="pricing-facts">
                <div className="pricing-fact"><div className="pricing-fact-num">10</div><div className="pricing-fact-label"><span className="lang-en">Sessions</span><span className="lang-vi">Buổi học</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">~2.5 mo</span><span className="lang-vi">~2,5 tháng</span></div><div className="pricing-fact-label"><span className="lang-en">Duration</span><span className="lang-vi">Thời lượng</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">Weekly</span><span className="lang-vi">Hàng tuần</span></div><div className="pricing-fact-label"><span className="lang-en">Cadence</span><span className="lang-vi">Tần suất</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">90 min</span><span className="lang-vi">90 phút</span></div><div className="pricing-fact-label"><span className="lang-en">Per session</span><span className="lang-vi">Mỗi buổi</span></div></div>
              </div>

              <div className="group-cohort-note">
                <span className="group-cohort-note-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1.5 13c0-2.5 2-4 4-4s4 1.5 4 4M5.5 6.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM9.7 5.2c.3-.1.6-.2 1-.2 2 0 4 1.5 4 4M10.8 2.3c.9.2 1.5 1 1.5 1.9"/></svg></span>
                <div>
                  <div className="group-cohort-note-title"><span className="lang-en">Building your own cohort</span><span className="lang-vi">Tự rủ nhóm cùng học</span></div>
                  <div className="group-cohort-note-body"><span className="lang-en">Group training starts once there's a full cohort, so it may take a little longer to kick off than 1:1. If you know a few designers who'd want this too, bring them with you and I'll take it from there.</span><span className="lang-vi">Học nhóm chỉ bắt đầu khi đã đủ người, nên có thể mất thêm thời gian hơn so với học 1:1. Nếu bạn biết vài designer khác cũng đang cần điều này, hãy rủ họ cùng đăng ký. Phần còn lại để mình lo.</span></div>
                </div>
              </div>

              <div className="pricing-features">
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 13l3-9 3 9M4.5 9.5h3M9 13l3-9 3 9"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Same Content</span><span className="lang-vi">Cùng nội dung</span></div><div className="pricing-feature-desc"><span className="lang-en">10 sessions, learned in a group of 7–8.</span><span className="lang-vi">10 buổi, học theo nhóm 7–8 người.</span></div></div>
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

              <a href="#closing" className="btn btn-lime" data-format="Group Cohort"><span className="lang-en">Join the Waitlist</span><span className="lang-vi">Đăng Ký Danh Sách Chờ</span></a>
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
            <h2 style={{ marginTop: '1rem' }}><span className="lang-en">Ready to run AI like a workflow?<br/><em style={{ fontStyle: 'normal', color: 'var(--lime)' }}>Bring a real case.</em></span><span className="lang-vi">Sẵn sàng dùng AI như 1 workflow chưa?<br/><em style={{ fontStyle: 'normal', color: 'var(--lime)' }}>Mang theo 1 case thật.</em></span></h2>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: 'rgba(245,239,226,.75)', maxWidth: '38ch' }}><span className="lang-en">We will take it from the business question to a tested prototype together.</span><span className="lang-vi">Cùng nhau đưa nó từ business questions đến prototype đã test.</span></p>
            <div className="closing-cta">
              <LeadForm subject="New inquiry: AI Design Workflow program" source="AI Design Workflow Program - Contact Form" formats={FORMATS} />
              <a href="/training/self-assessment.html" className="btn btn-ghost lead-form-secondary" style={{ borderColor: 'rgba(245,239,226,.4)', color: 'var(--cream)' }}>
                <span className="lang-en">Or start with the free self-assessment</span><span className="lang-vi">Hoặc bắt đầu với bài tự đánh giá miễn phí</span>
              </a>
            </div>
          </div>

          <div className="format-list reveal reveal-d2">
            <div className="format-row"><span><span className="lang-en">Format</span><span className="lang-vi">Hình thức</span></span><span>1:1 · Group</span></div>
            <div className="format-row"><span><span className="lang-en">Delivery</span><span className="lang-vi">Triển khai</span></span><span><span className="lang-en">Online via Google Meet or Zoom</span><span className="lang-vi">Online qua Google Meet hoặc Zoom</span></span></div>
            <div className="format-row"><span><span className="lang-en">Language</span><span className="lang-vi">Ngôn ngữ</span></span><span><span className="lang-en">Vietnamese</span><span className="lang-vi">Tiếng Việt</span></span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AiDesignWorkflow() {
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
