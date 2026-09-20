import { ProgramShell, MentorSection, TestimonialSection, Curriculum, LeadForm } from '../../../components/program'
import { sessions } from './mid-to-senior.sessions.js'

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
              <span className="hero-badge"><span className="lang-en">Course</span><span className="lang-vi">Khóa học</span></span>
              <span className="hero-badge ai-badge"><span className="material-symbols-rounded icon-ai-inline" aria-hidden="true">wand_stars</span><span className="lang-en">AI-Powered Workflow</span><span className="lang-vi">AI-Assisted Workflow</span></span>
            </div>
          </div>

          <div className="hero-grid">
            <div>
              <h1 className="hero-lines">
                <span><span><span className="lang-en">Product</span><span className="lang-vi">Product</span></span></span>
                <span><span><em className="it">Design Roadmap</em></span></span>
                <span><span><span className="lang-en">to <span className="mark"><span>Senior</span></span>.</span><span className="lang-vi">dành cho <span className="mark"><span>Senior</span></span>.</span></span></span>
              </h1>
              <p className="hero-desc"><span className="lang-en">Defend a decision with evidence, not "it feels right." Start owning projects, not just executing them.</span><span className="lang-vi"><strong>Bảo vệ quyết định bằng bằng chứng, không chỉ bằng "nhìn hợp lý".</strong> Và bắt đầu làm chủ dự án, không chỉ thực thi.</span></p>
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
                  <strong>2.750.000₫</strong>
                  <span>
                    <span className="lang-en">Per month · Group Training</span><span className="lang-vi">/tháng · Học nhóm</span>
                    <span className="hero-stat-sub"><span className="lang-en">1:1 from 5.250.000₫ per month</span><span className="lang-vi">1:1 từ 5.250.000₫/tháng</span></span>
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="roi-visual" aria-hidden="true">
                <span className="roi-ring1"></span>
                <span className="roi-ring2"></span>
                <span className="roi-ring3"></span>
                <span className="roi-core"></span>
                <span className="roi-pulse"></span>
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
          <span className="kicker"><span className="lang-en">Sound familiar?</span><span className="lang-vi">Đã từng như thế này chưa?</span></span>
          <p className="pain-headline reveal"><span className="lang-en">You're shipping good work. <em>Promotion still feels stuck.</em></span><span className="lang-vi">Kỹ năng đã đủ. <em>Nhưng promotion vẫn chưa tới.</em></span></p>

          <ul className="pain-list">
            <li className="reveal reveal-d1"><em>01</em><span><span className="lang-en">Every project ships clean. Stakeholders trust your taste.</span><span className="lang-vi">Dự án nào cũng ra mắt suôn sẻ. Stakeholder tin gu thẩm mỹ của bạn.</span></span></li>
            <li className="reveal reveal-d2"><em>02</em><span><span className="lang-en">But in the room, you defend a call with "it feels right" — while the senior next to you opens with what they found in research.</span><span className="lang-vi">Nhưng trong phòng họp, bạn bảo vệ quyết định bằng "nhìn hợp lý" — trong khi senior bên cạnh mở đầu bằng điều họ tìm ra qua nghiên cứu.</span></span></li>
            <li className="reveal reveal-d3"><em>03</em><span><span className="lang-en">And when there's more work than you can carry, it all still comes back to you. Nobody's taught you how to hand it off.</span><span className="lang-vi">Và khi khối lượng việc vượt quá sức một người, mọi thứ vẫn dồn về bạn. Chưa ai chỉ bạn cách giao việc lại.</span></span></li>
            <li className="reveal reveal-d4"><em>04</em><span><span className="lang-en">You know AI can speed up the evidence-gathering, but you're not sure if you're using it to build a real case, or just cutting corners.</span><span className="lang-vi">Bạn biết AI có thể giúp thu thập bằng chứng nhanh hơn, nhưng không chắc mình đang dùng nó để xây luận điểm thật, hay chỉ đang đi tắt.</span></span></li>
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
              <p className="who-headline" style={{ marginTop: '1.2rem' }}><span className="lang-en">You've proven the craft. Now it's time to <span className="mark"><span>own the room</span></span>.</span><span className="lang-vi">Bạn đã chứng minh được craft. Giờ là lúc <span className="mark"><span>làm chủ cả phòng họp</span></span>.</span></p>
            </div>
            <div className="who-card reveal reveal-d2">
              <div className="num">3–6+</div>
              <p><span className="lang-en">Years of experience, and craft that holds up under scrutiny. What's missing isn't skill — it's defending a decision with evidence, sizing work for someone else, and getting a room to actually trust your call.</span><span className="lang-vi">Nhiều năm kinh nghiệm, craft đủ vững để chịu được soi xét. Điều còn thiếu không phải kỹ năng — mà là bảo vệ quyết định bằng bằng chứng, định lượng công việc cho người khác, và khiến cả phòng thật sự tin vào lời bạn nói.</span></p>
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
            <p className="walkaway-headline"><span className="lang-en">One project of yours, finished end-to-end the way a senior would — with <span className="mark"><span>AI woven in throughout</span></span>, not bolted on for a single session. Plus proof that you can <span className="mark"><span>own it end-to-end</span></span>, not just execute the brief.</span><span className="lang-vi">Một dự án của chính bạn, hoàn thành từ đầu đến cuối theo cách một Senior thực thụ sẽ làm — với <span className="mark"><span>AI đồng hành xuyên suốt</span></span>, không chỉ xuất hiện ở một buổi học. Cùng bằng chứng cho thấy bạn có thể <span className="mark"><span>làm chủ dự án từ đầu đến cuối</span></span>, không chỉ thực thi theo brief.</span></p>
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
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: 'var(--ink-70)', maxWidth: '56ch' }}><span className="lang-en">Every session runs in two blocks: 30 minutes on the method, 60 minutes applying it live to your own real project — coached in the room, not reviewed later as homework.</span><span className="lang-vi">Mỗi buổi học chia làm hai phần: 30 phút học phương pháp, 60 phút áp dụng trực tiếp lên dự án thật của bạn — được coach ngay tại chỗ, không phải review bài tập sau đó.</span></p>
            <p className="curriculum-head-note"><span className="material-symbols-rounded" aria-hidden="true">wand_stars</span> <span className="lang-en">You won't learn AI as a bonus skill. You'll learn to think with it, built into how you research, strategize, and design from the first session to the last.</span><span className="lang-vi">Bạn sẽ không học AI như một kỹ năng phụ. Bạn sẽ học cách tư duy cùng AI, được lồng vào cách bạn nghiên cứu, xây dựng chiến lược và thiết kế, từ buổi đầu tiên đến buổi cuối cùng.</span></p>
          </div>

          <Curriculum sessions={sessions} />

          <p className="curriculum-note reveal"><span className="lang-en">Anchored to your own real project throughout. AI runs through every block — brainstorming options, building the actual artifact, enriching context from your project files — not one-off prompts.</span><span className="lang-vi">Xuyên suốt chương trình đều gắn với dự án thật của bạn. AI xuất hiện trong mọi phần — brainstorm phương án, dựng artifact thật, làm giàu context từ file dự án — không phải những prompt rời rạc.</span></p>
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
                <span className="pricing-card-name"><span className="lang-en">1:1 Coaching</span><span className="lang-vi">Kèm 1:1</span></span>
                <span className="pricing-badge"><span className="lang-en">Most focused</span><span className="lang-vi">Tập trung nhất</span></span>
              </div>
              <div className="pricing-price">5.250.000₫<span><span className="lang-en">/month</span><span className="lang-vi">/tháng</span></span></div>
              <p className="pricing-total"><span className="lang-en">Full program:</span><span className="lang-vi">Trọn khóa:</span> <b>15.750.000₫</b> <span className="pricing-total-label"><span className="lang-en">total</span><span className="lang-vi">trọn gói</span></span></p>

              <div className="pricing-facts">
                <div className="pricing-fact"><div className="pricing-fact-num">12</div><div className="pricing-fact-label"><span className="lang-en">Sessions</span><span className="lang-vi">Buổi học</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">3 mo</span><span className="lang-vi">3 tháng</span></div><div className="pricing-fact-label"><span className="lang-en">Duration</span><span className="lang-vi">Thời lượng</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">Weekly</span><span className="lang-vi">Hàng tuần</span></div><div className="pricing-fact-label"><span className="lang-en">Cadence</span><span className="lang-vi">Tần suất</span></div></div>
                <div className="pricing-fact"><div className="pricing-fact-num"><span className="lang-en">90 min</span><span className="lang-vi">90 phút</span></div><div className="pricing-fact-label"><span className="lang-en">Per session</span><span className="lang-vi">Mỗi buổi</span></div></div>
              </div>

              <div className="pricing-features">
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 13l3-9 3 9M4.5 9.5h3M9 13l3-9 3 9"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Personalized Curriculum</span><span className="lang-vi">Chương trình cá nhân hóa</span></div><div className="pricing-feature-desc"><span className="lang-en">Sessions shaped around your real project and your specific promotion gaps.</span><span className="lang-vi">Buổi học xây dựng theo đúng dự án và khoảng cách promotion cụ thể của bạn.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 13c0-3 2.5-5 6-5s6 2 6 5M8 8a3 3 0 100-6 3 3 0 000 6z"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Live Coaching, Not Homework Review</span><span className="lang-vi">Coach trực tiếp, không phải review bài về nhà</span></div><div className="pricing-feature-desc"><span className="lang-en">The practice block happens with you, in real time, every session.</span><span className="lang-vi">Phần thực hành diễn ra cùng bạn, ngay lúc đó, mỗi buổi học.</span></div></div>
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
              <div className="pricing-price">2.750.000₫<span><span className="lang-en">/month</span><span className="lang-vi">/tháng</span></span></div>
              <p className="pricing-total"><span className="lang-en">Full program:</span><span className="lang-vi">Trọn khóa:</span> <b>8.250.000₫</b> <span className="pricing-total-label"><span className="lang-en">per person · groups of 3–5</span><span className="lang-vi">mỗi người · nhóm 3–5 người</span></span></p>

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
                  <div className="group-cohort-note-body"><span className="lang-en">Group training starts once there's a full cohort, so it may take a little longer to kick off than 1:1. If you know a few designers who'd want this too, bring them with you — I'll take it from there.</span><span className="lang-vi">Học nhóm chỉ bắt đầu khi đã đủ người, nên có thể mất thêm thời gian hơn so với học 1:1. Nếu bạn biết vài designer khác cũng đang cần điều này, hãy rủ họ cùng đăng ký — phần còn lại để mình lo.</span></div>
                </div>
              </div>

              <div className="pricing-features">
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 13l3-9 3 9M4.5 9.5h3M9 13l3-9 3 9"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Same Core Curriculum</span><span className="lang-vi">Giáo trình như nhau</span></div><div className="pricing-feature-desc"><span className="lang-en">The same senior curriculum, AI-powered workflow included.</span><span className="lang-vi">Cùng một giáo trình senior, có AI hỗ trợ.</span></div></div>
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-icon"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 1.5v13M11 4.2c0-1.2-1.3-2.2-3-2.2s-3 1-3 2.3c0 3 6 1.4 6 4.4 0 1.3-1.3 2.3-3 2.3s-3-1-3-2.2"/></svg></span>
                  <div><div className="pricing-feature-title"><span className="lang-en">Lower Cost, Same Depth</span><span className="lang-vi">Chi phí thấp hơn, cùng chiều sâu</span></div><div className="pricing-feature-desc"><span className="lang-en">About 45% less per person than 1:1 coaching, same full curriculum.</span><span className="lang-vi">Thấp hơn khoảng 45% mỗi người so với học 1:1, vẫn đầy đủ giáo trình.</span></div></div>
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
              <h2 style={{ marginTop: '1rem' }}><span className="lang-en">Ready to stop just executing.<br/><em style={{ fontStyle: 'normal', color: 'var(--lime)' }}>Start owning it.</em></span><span className="lang-vi">Đã đến lúc không chỉ thực thi.<br/><em style={{ fontStyle: 'normal', color: 'var(--lime)' }}>Bắt đầu làm chủ.</em></span></h2>
              <div className="closing-cta">
                <LeadForm subject="New coaching inquiry: Roadmap to Senior" source="Senior Program \u2014 Contact Form" formats={FORMATS} />
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
              <div className="format-row tuition"><span><span className="lang-en">Tuition</span><span className="lang-vi">Học phí</span></span><span><span className="lang-en">Starting at 5.250.000₫/month</span><span className="lang-vi">Học phí từ 5.250.000₫/tháng</span></span></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default function MidToSenior() {
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
