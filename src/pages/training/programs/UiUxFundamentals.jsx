import { ProgramShell, MentorSection, TestimonialSection, Curriculum, LeadForm } from '../../../components/program'
import { sessions } from './ui-ux-fundamentals.sessions.js'

const FORMATS = [
    { value: "1:1 Coaching", en: "1:1 Coaching", vi: "1 kèm 1" },
    { value: "Group Training", en: "Group Training", vi: "Học nhóm" },
  ]

function Hero() {
  return (
    <header className="hero">
        <div className="wrap">
          <div className="hero-top">
            <div className="hero-badges">
              <span className="hero-badge"><span className="lang-en">Course</span><span className="lang-vi">Khóa học</span></span>
            </div>
          </div>

          <div className="hero-grid">
            <div>
              <h1 className="hero-lines">
                <span><span><span className="lang-en">UI/UX</span><span className="lang-vi">Nền Tảng</span></span></span>
                <span><span><em className="it"><span className="lang-en">Design</span><span className="lang-vi">UI/UX</span></em></span></span>
                <span><span><span className="lang-en"><span className="mark"><span>Fundamentals</span></span>.</span><span className="lang-vi"><span className="mark"><span>Design</span></span>.</span></span></span>
              </h1>
              <p className="hero-desc"><span className="lang-en">Your first real design process, built step by step, from problem to portfolio-ready case study.</span><span className="lang-vi">Quy trình thiết kế thật đầu tiên của bạn, xây dựng từng bước, từ vấn đề đến một case study sẵn sàng cho portfolio.</span></p>
              <a href="#mentor" className="hero-mentor">
                <img src="/training/assets/avatar.png" alt="Winnie Nguyen" className="hero-mentor-avatar"/>
                <span className="hero-mentor-text">
                  <strong>Winnie Nguyen</strong>
                  <span><span className="lang-en">UX Product Design Educator</span><span className="lang-vi">UX Product Design Educator</span></span>
                </span>
              </a>
              <div className="hero-cta">
                <a href="#closing" className="btn btn-dark">
                  <span className="lang-en">Enroll Now</span><span className="lang-vi">Đăng Ký Khoá Học</span>
                </a>
                <a href="/training/self-assessment.html" className="btn btn-ghost">
                  <span className="lang-en">Free self-assessment</span><span className="lang-vi">Tự đánh giá năng lực</span>
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat"><strong>12</strong><span><span className="lang-en">Sessions · 90 min weekly</span><span className="lang-vi">Buổi học · 90 phút/tuần</span><span className="hero-stat-sub"><span className="lang-en">~3 months</span><span className="lang-vi">~3 tháng</span></span></span></div>
                <div className="hero-stat"><strong><span className="lang-en">1:1 or Group</span><span className="lang-vi">1:1 hoặc nhóm</span></strong><span><span className="lang-en">Online via Google Meet or Zoom</span><span className="lang-vi">Online qua Google Meet hoặc Zoom</span></span></div>
                <div className="hero-stat">
                  <strong>2.000.000₫</strong>
                  <span>
                    <span className="lang-en">Per month · Group Training</span><span className="lang-vi">/tháng · Học nhóm</span>
                    <span className="hero-stat-sub"><span className="lang-en">1:1 from 4.000.000₫ per month</span><span className="lang-vi">1:1 từ 4.000.000₫/tháng</span></span>
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <svg className="hero-blueprint" viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="var(--ink-30)" strokeWidth="1.5" stroke-dasharray="3 5">
                  <line x1="70" y1="20" x2="70" y2="300"/>
                  <line x1="160" y1="20" x2="160" y2="300"/>
                  <line x1="240" y1="20" x2="240" y2="300"/>
                  <line x1="20" y1="80" x2="280" y2="80"/>
                  <line x1="20" y1="170" x2="280" y2="170"/>
                  <line x1="20" y1="250" x2="280" y2="250"/>
                </g>
                <g stroke="var(--ink)" strokeWidth="2" strokeLinecap="round">
                  <path d="M20 34V20h14"/>
                  <path d="M266 20h14v14"/>
                  <path d="M280 286v14h-14"/>
                  <path d="M34 300H20v-14"/>
                </g>
                <g className="float-a"><circle cx="70" cy="80" r="30" fill="none" stroke="var(--ink)" strokeWidth="2.5"/></g>
                <g className="float-b"><rect x="128" y="138" width="64" height="64" rx="14" fill="var(--coral)" transform="rotate(8 160 170)"/></g>
                <g className="float-c"><circle cx="240" cy="250" r="46" fill="var(--lime)"/></g>
                <circle cx="160" cy="250" r="5" fill="var(--ink)"/>
              </svg>
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
          <span className="kicker"><span className="lang-en">Sound familiar?</span><span className="lang-vi">Đã từng như thế này chưa?</span></span>
          <p className="pain-headline reveal"><span className="lang-en">You know some of the pieces. <em>You haven't run the process yet.</em></span><span className="lang-vi">Bạn đã biết vài mảnh ghép. <em>Nhưng chưa từng chạy qua cả quy trình.</em></span></p>

          <ul className="pain-list">
            <li className="reveal reveal-d1"><em>01</em><span><span className="lang-en">You've done some design learning on your own but never run a full process end to end.</span><span className="lang-vi">Bạn đã tự học thiết kế một phần nào đó, nhưng chưa từng chạy toàn bộ quy trình end-to-end.</span></span></li>
            <li className="reveal reveal-d2"><em>02</em><span><span className="lang-en">You want a portfolio that can hold its own against design-school graduates.</span><span className="lang-vi">Bạn muốn một portfolio đủ sức cạnh tranh với sinh viên tốt nghiệp trường thiết kế.</span></span></li>
            <li className="reveal reveal-d3"><em>03</em><span><span className="lang-en">You want honest feedback on your work, not cheerleading.</span><span className="lang-vi">Bạn muốn phản hồi thật về công việc của mình, không phải những lời cổ vũ suông.</span></span></li>
          </ul>
        </div>
      </section>
  )
}

function Who() {
  return (
    <section className="who">
        <div className="wrap">
          <div className="who-grid">
            <div className="reveal">
              <span className="kicker"><span className="lang-en">Who it's for</span><span className="lang-vi">Dành cho ai</span></span>
              <p className="who-headline" style={{ marginTop: '1.2rem' }}><span className="lang-en">You know some of the pieces. You haven't <span className="mark"><span>run the whole process</span></span> yet.</span><span className="lang-vi">Bạn đã biết vài mảnh ghép. Nhưng chưa từng <span className="mark"><span>chạy qua cả quy trình</span></span>.</span></p>
            </div>
            <div className="who-card reveal reveal-d2">
              <div className="num">0</div>
              <p><span className="lang-en">Professional design experience. You've explored UI/UX on your own, through tutorials or curiosity, but never worked as a designer or run a project start to finish.</span><span className="lang-vi">Kinh nghiệm thiết kế chuyên nghiệp. Bạn đã tự tìm hiểu UI/UX qua tutorial hoặc vì tò mò, nhưng chưa từng làm việc như một designer hay chạy một dự án end-to-end.</span></p>
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
              <span className="lang-en">What you walk away with</span><span className="lang-vi">Bạn sẽ mang về được gì</span>
            </span>
            <p className="walkaway-headline"><span className="lang-en">Not another tutorial project. <span className="mark"><span>One real case study</span></span>, run start to finish, that proves you can <span className="mark"><span>own the process</span></span>, not just follow one.</span><span className="lang-vi">Bạn sẽ có một <span className="mark"><span>case study</span></span>, chạy end-to-end, để bạn không chỉ biết quy trình mà <span className="mark"><span>thực sự biết cách sử dụng nó</span></span>.</span></p>
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
            <span className="kicker"><span className="lang-en">The curriculum</span><span className="lang-vi">Giáo trình</span></span>
            <h2 style={{ marginTop: '1rem' }}><span className="lang-en">What each<br/><em style={{ fontStyle: 'normal', color: 'var(--coral)' }}>session builds.</em></span><span className="lang-vi">Mỗi buổi học,<br/><em style={{ fontStyle: 'normal', color: 'var(--coral)' }}>bạn xây dựng được gì.</em></span></h2>
          </div>

          <Curriculum sessions={sessions} />

          <p className="curriculum-note reveal"><span className="lang-en">Anchored to your own real project throughout. The coaching output <em>is</em> the deliverable, not a separate exercise.</span><span className="lang-vi">Luôn gắn liền với dự án thật của chính bạn. Kết quả từ mỗi buổi coaching <em>chính là</em> deliverable, không phải một bài tập riêng biệt.</span></p>
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
            <div className="pricing-card is-light reveal">
              <div className="pricing-card-head">
                <span className="pricing-card-name"><span className="lang-en">1:1 Coaching</span><span className="lang-vi">1 kèm 1</span></span>
                <span className="pricing-badge"><span className="lang-en">Most focused</span><span className="lang-vi">Tập trung nhất</span></span>
              </div>
              <div className="pricing-price">4.000.000₫<span><span className="lang-en">/month</span><span className="lang-vi">/tháng</span></span></div>
              <p className="pricing-total"><span className="lang-en">Full program:</span><span className="lang-vi">Trọn khóa:</span> <b>12.000.000₫</b> <span className="pricing-total-label"><span className="lang-en">total</span><span className="lang-vi">trọn gói</span></span></p>

              <div className="pricing-facts">
                <div className="pricing-fact"><div className="pricing-fact-num">12</div><div className="pricing-fact-label"><span className="lang-en">Sessions</span><span className="lang-vi">Buổi học</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">3 mo</span><span className="lang-vi">3 tháng</span></div><div className="pricing-fact-label"><span className="lang-en">Duration</span><span className="lang-vi">Thời lượng</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">Weekly</span><span className="lang-vi">Hàng tuần</span></div><div className="pricing-fact-label"><span className="lang-en">Cadence</span><span className="lang-vi">Tần suất</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">90 min</span><span className="lang-vi">90 phút</span></div><div className="pricing-fact-label"><span className="lang-en">Per session</span><span className="lang-vi">Mỗi buổi</span></div></div>
              </div>

              <div className="pricing-features">
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 13l3-9 3 9M4.5 9.5h3M9 13l3-9 3 9"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Personalized Curriculum</span><span className="lang-vi">Chương trình cá nhân hóa</span></div><div className="pricing-feature-desc"><span className="lang-en">Sessions shaped around your real projects and goals.</span><span className="lang-vi">Buổi học xây dựng theo đúng dự án và mục tiêu của bạn.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 13c0-3 2.5-5 6-5s6 2 6 5M8 8a3 3 0 100-6 3 3 0 000 6z"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">1:1 Feedback</span><span className="lang-vi">Phản hồi 1:1</span></div><div className="pricing-feature-desc"><span className="lang-en">Direct critique every session, no sharing airtime.</span><span className="lang-vi">Nhận xét trực tiếp mỗi buổi, không chia sẻ thời gian.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2.5" y="3" width="11" height="10.5" rx="1.5"/><path d="M2.5 6h11M5.5 1.5v3M10.5 1.5v3"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Flexible Scheduling</span><span className="lang-vi">Lịch học linh hoạt</span></div><div className="pricing-feature-desc"><span className="lang-en">Pick times that fit your calendar.</span><span className="lang-vi">Chọn giờ học phù hợp với bạn.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 8h9M8 4l4 4-4 4"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Your Pace</span><span className="lang-vi">Tốc độ của riêng bạn</span></div><div className="pricing-feature-desc"><span className="lang-en">Move faster or slower depending on where you're stuck.</span><span className="lang-vi">Nhanh hay chậm tùy vào điều bạn đang vướng.</span></div></div>
                </div>
              </div>

              <a href="#closing" className="btn btn-dark" data-format="1:1 Coaching">
                <span className="lang-en">Enroll</span><span className="lang-vi">Đăng Ký</span>
              </a>
            </div>

            <div className="pricing-card is-dark reveal reveal-d2">
              <div className="pricing-card-head">
                <span className="pricing-card-name"><span className="lang-en">Group Training</span><span className="lang-vi">Học nhóm</span></span>
                <span className="pricing-badge"><span className="lang-en">Best value</span><span className="lang-vi">Tiết kiệm nhất</span></span>
              </div>
              <div className="pricing-price">2.000.000₫<span><span className="lang-en">/month</span><span className="lang-vi">/tháng</span></span></div>
              <p className="pricing-total"><span className="lang-en">Full program:</span><span className="lang-vi">Trọn khóa:</span> <b>6.000.000₫</b> <span className="pricing-total-label"><span className="lang-en">per person · groups of 3–5</span><span className="lang-vi">mỗi người · nhóm 3–5 người</span></span></p>

              <div className="pricing-facts">
                <div className="pricing-fact"><div className="pricing-fact-num">12</div><div className="pricing-fact-label"><span className="lang-en">Sessions</span><span className="lang-vi">Buổi học</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">3 mo</span><span className="lang-vi">3 tháng</span></div><div className="pricing-fact-label"><span className="lang-en">Duration</span><span className="lang-vi">Thời lượng</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">Weekly</span><span className="lang-vi">Hàng tuần</span></div><div className="pricing-fact-label"><span className="lang-en">Cadence</span><span className="lang-vi">Tần suất</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">90 min</span><span className="lang-vi">90 phút</span></div><div className="pricing-fact-label"><span className="lang-en">Per session</span><span className="lang-vi">Mỗi buổi</span></div></div>
              </div>

              <div className="group-cohort-note">
                <span className="group-cohort-note-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1.5 13c0-2.5 2-4 4-4s4 1.5 4 4M5.5 6.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM9.7 5.2c.3-.1.6-.2 1-.2 2 0 4 1.5 4 4M10.8 2.3c.9.2 1.5 1 1.5 1.9"/></svg></span>
                <div>
                  <div className="group-cohort-note-title"><span className="lang-en">Building your own cohort</span><span className="lang-vi">Tự rủ nhóm cùng học</span></div>
                  <div className="group-cohort-note-body"><span className="lang-en">Group training starts once there's a full cohort, so it may take a little longer to kick off than 1:1. If you know a few aspiring designers who'd want this too, bring them with you — I'll take it from there.</span><span className="lang-vi">Học nhóm chỉ bắt đầu khi đã đủ người, nên có thể mất thêm thời gian hơn so với học 1:1. Nếu bạn biết vài bạn cũng đang muốn bắt đầu con đường thiết kế, hãy rủ họ cùng đăng ký — phần còn lại để mình lo.</span></div>
                </div>
              </div>

              <div className="pricing-features">
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 13l3-9 3 9M4.5 9.5h3M9 13l3-9 3 9"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Same Core Curriculum</span><span className="lang-vi">Giáo trình như nhau</span></div><div className="pricing-feature-desc"><span className="lang-en">Full 12-session foundations program.</span><span className="lang-vi">Đầy đủ chương trình nền tảng 12 buổi.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1.5 13c0-2.5 2-4 4-4s4 1.5 4 4M5.5 6.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM9.7 5.2c.3-.1.6-.2 1-.2 2 0 4 1.5 4 4M10.8 2.3c.9.2 1.5 1 1.5 1.9"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Peer Critique</span><span className="lang-vi">Phản hồi từ bạn học</span></div><div className="pricing-feature-desc"><span className="lang-en">Feedback from 3–5 peers each session, not just the mentor.</span><span className="lang-vi">Nhận góp ý từ 3–5 bạn học mỗi buổi, không chỉ từ mentor.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v3M8 11v3M2 8h3M11 8h3M4.5 4.5l2 2M9.5 9.5l2 2M11.5 4.5l-2 2M6.5 9.5l-2 2"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Cohort Accountability</span><span className="lang-vi">Động lực từ nhóm</span></div><div className="pricing-feature-desc"><span className="lang-en">Weekly momentum with people at your level.</span><span className="lang-vi">Duy trì nhịp học hàng tuần cùng người cùng trình độ.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 1.5v13M11 4.2c0-1.2-1.3-2.2-3-2.2s-3 1-3 2.3c0 3 6 1.4 6 4.4 0 1.3-1.3 2.3-3 2.3s-3-1-3-2.2"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Lower Cost, Same Depth</span><span className="lang-vi">Chi phí thấp hơn, cùng chiều sâu</span></div><div className="pricing-feature-desc"><span className="lang-en">Half the cost per person of 1:1 coaching, same full curriculum.</span><span className="lang-vi">Chi phí mỗi người chỉ bằng một nửa học 1:1, vẫn đầy đủ giáo trình.</span></div></div>
                </div>
              </div>

              <a href="#closing" className="btn btn-lime" data-format="Group Training">
                <span className="lang-en">Enroll</span><span className="lang-vi">Đăng Ký</span>
              </a>
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
              <h2 style={{ marginTop: '1rem' }}><span className="lang-en">Ready to stop guessing.<br/><em style={{ fontStyle: 'normal', color: 'var(--lime)' }}>Start building.</em></span><span className="lang-vi">Đã đến lúc ngừng đoán mò.<br/><em style={{ fontStyle: 'normal', color: 'var(--lime)' }}>Bắt đầu xây dựng.</em></span></h2>
              <div className="closing-cta">
                <LeadForm subject="New coaching inquiry: UI/UX Design Fundamentals" source="UI/UX Fundamentals Program \u2014 Contact Form" formats={FORMATS} />
                <a href="/training/self-assessment.html" className="btn btn-ghost lead-form-secondary" style={{ borderColor: 'rgba(245,239,226,.4)', color: 'var(--cream)' }}>
                  <span className="lang-en">Or start with the free self-assessment</span><span className="lang-vi">Hoặc bắt đầu với bài tự đánh giá miễn phí</span>
                </a>
              </div>
            </div>

            <div className="format-list reveal reveal-d2">
              <div className="format-row"><span><span className="lang-en">Format</span><span className="lang-vi">Hình thức</span></span><span><span className="lang-en">1:1 or Group (3–5)</span><span className="lang-vi">1:1 hoặc nhóm (3–5)</span></span></div>
              <div className="format-row"><span><span className="lang-en">Sessions</span><span className="lang-vi">Số buổi</span></span><span><span className="lang-en">12 × 90 min</span><span className="lang-vi">12 × 90 phút</span></span></div>
              <div className="format-row"><span><span className="lang-en">Cadence</span><span className="lang-vi">Tần suất</span></span><span><span className="lang-en">Weekly</span><span className="lang-vi">Hàng tuần</span></span></div>
              <div className="format-row"><span><span className="lang-en">Delivery</span><span className="lang-vi">Triển khai</span></span><span><span className="lang-en">Online via Google Meet or Zoom</span><span className="lang-vi">Online qua Google Meet hoặc Zoom</span></span></div>
              <div className="format-row"><span><span className="lang-en">Language</span><span className="lang-vi">Ngôn ngữ</span></span><span><span className="lang-en">Vietnamese or English</span><span className="lang-vi">Tiếng Việt hoặc tiếng Anh</span></span></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default function UiUxFundamentals() {
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
