import { useEffect, useRef, useState } from 'react'
import { revealOnScroll } from '../../hooks/reveal.js'

const TOTAL_BATCHES = 3

// Shows 3 reviews, then reveals 3 more per click of "Show more reviews".
export default function TestimonialSection() {
  const [batch, setBatch] = useState(0)
  const first = useRef(true)

  useEffect(() => {
    if (first.current) { first.current = false; return }
    revealOnScroll(document.querySelectorAll(`.testimonial-card[data-batch="${batch}"]`))
  }, [batch])

  return (
    <section className="testimonial" id="testimonial">
        <div className="wrap">
          <div className="testimonial-inner">

            <div className="testimonial-intro reveal">
              <span className="kicker"><span className="lang-en">What designers say</span><span className="lang-vi">Designer nói gì</span></span>
              <h2><span className="lang-en">Words from people I've worked with</span><span className="lang-vi">Words from people I've worked with</span></h2>
              <p><span className="lang-en">Designers at different stages of their careers, working towards different goals, all mentored through ADPList.</span><span className="lang-vi">Các designer ở nhiều giai đoạn sự nghiệp khác nhau, hướng đến những mục tiêu khác nhau, đều được mentor qua ADPList.</span></p>
              <a href="https://adplist.org/mentors/winnie-nguyen" target="_blank" rel="noopener" className="testimonial-link">
                <span className="lang-en">Read all reviews on ADPList</span><span className="lang-vi">Xem tất cả đánh giá trên ADPList</span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M12 4H5M12 4V11"/></svg>
              </a>
            </div>

            <div className="testimonial-grid">
              <div className="testimonial-card reveal">
                <div className="quote-mark">"</div>
                <blockquote>My first session with Winnie was really amazing. She is such a structural mentor who gives the whole picture and easy to comprehend at the same time.</blockquote>
                <div className="author">Đạt Nguyễn Hoàng Hữu</div>
                <div className="role">Product Designer, ChoTot (Carousell)</div>
              </div>
              <div className="testimonial-card reveal reveal-d1">
                <div className="quote-mark">"</div>
                <blockquote>Winnie is one of the most outstanding mentors here. She is so open and friendly. She gave me priceless advice on career growth. Her guidance helped me visualize my short and long term goals in Design.</blockquote>
                <div className="author">Nguyen Le</div>
                <div className="role">UX Designer, youbloom</div>
              </div>
              <div className="testimonial-card featured reveal reveal-d2">
                <div className="quote-mark">"</div>
                <blockquote>Winnie gave me insightful suggestions and clear direction, which really helped me reflect on how to improve. She shared lots of helpful resources that will definitely support me in growing my skillset.</blockquote>
                <div className="author">Wendy Lin</div>
                <div className="role">UX/UI Designer</div>
              </div>

              <div className={`testimonial-card reveal${batch < 1 ? ' is-hidden' : ''}`} data-batch="1">
                <div className="quote-mark">"</div>
                <blockquote>Winnie was the first mentor I spoke with. She introduced me to the concept of "ownership" and clearly explained the core responsibilities of a product designer. She also shared insights into the work environment and interview process at the kind of company I am aiming to join. Winnie told me that "it's not too late," which really motivated me to keep moving forward.</blockquote>
                <div className="author">Truc Le</div>
                <div className="role">UI/UX Designer, Officience</div>
              </div>
              <div className={`testimonial-card reveal${batch < 1 ? ' is-hidden' : ''}`} data-batch="1">
                <div className="quote-mark">"</div>
                <blockquote>Winnie was kind and we had a nice meeting!</blockquote>
                <div className="author">Nicola Raimondo</div>
                <div className="role">Founder, OpenScouter</div>
              </div>
              <div className={`testimonial-card reveal${batch < 1 ? ' is-hidden' : ''}`} data-batch="1">
                <div className="quote-mark">"</div>
                <blockquote>My mentoring sessions with Winnie were filled with positive energy and genuine inspiration. She created an encouraging atmosphere where learning felt both joyful and insightful. Her advice on leadership combined practical experience with strong academic grounding, making every session meaningful and applicable. I deeply appreciate her enthusiasm, kindness, and the way she empowered me to grow more confidently as a designer and future leader.</blockquote>
                <div className="author">William Nguyen</div>
                <div className="role">Product Designer, CDG Group</div>
              </div>

              <div className={`testimonial-card reveal${batch < 2 ? ' is-hidden' : ''}`} data-batch="2">
                <div className="quote-mark">"</div>
                <blockquote>She was very kind and friendly, which made me feel comfortable sharing my concerns under her guidance. She guided me through my questions to clarify my career path and how to grow in my career, and kindly shared her experience and useful ways to build the skill sets I need to become a Product Designer.</blockquote>
                <div className="author">Uyen Dong Thi My</div>
                <div className="role">UX/UI Designer, UNIT Corporation</div>
              </div>
              <div className={`testimonial-card reveal${batch < 2 ? ' is-hidden' : ''}`} data-batch="2">
                <div className="quote-mark">"</div>
                <blockquote>She helped me a lot in clarifying and solving the problems I encountered about Product Design, as well as presenting the best practices for how a product should be. I gained a lot from her insight, and the session was very successful and useful to me.</blockquote>
                <div className="author">Tiến Cường Lại</div>
                <div className="role">UI/UX Designer, Betech Digital</div>
              </div>
              <div className={`testimonial-card reveal${batch < 2 ? ' is-hidden' : ''}`} data-batch="2">
                <div className="quote-mark">"</div>
                <blockquote>She provides exceptional advice with vast, in-depth knowledge. Her guidance is always on point, and she has a genuine passion for helping others succeed. The session was insightful, focused, and truly impactful.</blockquote>
                <div className="author">Thi Trần</div>
                <div className="role">Product Designer, Vietnam</div>
              </div>

              <div className={`testimonial-card reveal${batch < 3 ? ' is-hidden' : ''}`} data-batch="3">
                <div className="quote-mark">"</div>
                <blockquote>I'm deeply grateful for the insightful discussion we had regarding remote work. Winnie's guidance and expertise provided me with invaluable insights into the world of remote employment. Her willingness to share her experiences and offer advice was instrumental in helping me navigate the complexities and opportunities of remote job opportunities. I appreciate the time she took to address my questions and concerns, and her patience in clarifying any uncertainties I had.</blockquote>
                <div className="author">Rajib Kumar Barua</div>
                <div className="role">Web Designer, Creative IT</div>
              </div>
              <div className={`testimonial-card reveal${batch < 3 ? ' is-hidden' : ''}`} data-batch="3">
                <div className="quote-mark">"</div>
                <blockquote>It was an amazing session with Winnie. Her experience and insights in Product Design really helped me get started with Product Design as a Graphic Designer.</blockquote>
                <div className="author">Aditya Kumar</div>
                <div className="role">Executive Graphic Designer, Rayo Racing</div>
              </div>

              {batch < TOTAL_BATCHES && (
      <div className="testimonial-more-wrap">
                  <button type="button" className="testimonial-more-btn" data-batch-total="3" onClick={() => setBatch((b) => b + 1)}>
                    Show more reviews
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6l4 4 4-4"/></svg>
                  </button>
                </div>
    )}
            </div>

          </div>

          <div className="gallery-dark-spacer">
          <div className="gallery-track-wrap">
          <div className="gallery-track">

            <div className="ig-card">
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

            <div className="ig-card">
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

            <div className="ig-card">
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

            <div className="ig-card">
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

            <div className="ig-card">
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

            <div className="ig-card">
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

            <div className="ig-card">
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

            <div className="ig-card">
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

            <div className="ig-card">
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
      </section>
  )
}
