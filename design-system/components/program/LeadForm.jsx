import { useState } from 'react'
import { useProgram } from './ProgramShell.jsx'
import { EMAIL } from '../../data/site.js'

// Submits to Formspree without leaving the page, then opens the "You're enrolled" popup.
// formats: [{ value, en, vi }]
export default function LeadForm({ subject, source, formats }) {
  const { openEnroll } = useProgram()
  const [sending, setSending] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setSending(true)
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Submission failed')
      form.reset()
      openEnroll()
    } catch {
      alert(`Something went wrong sending that. Please email me directly at ${EMAIL}`)
    } finally {
      setSending(false)
    }
  }

  return (
    <form id="leadForm" className="lead-form" action="https://formspree.io/f/mpqvoqyy" method="POST" onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="source" value={source} />
      <div className="format-choices">
        <span className="format-choices-label">
          <span className="lang-en">Which format interests you?</span>
          <span className="lang-vi">Bạn quan tâm hình thức nào?</span>
        </span>
        <div className="format-choices-row">
          {formats.map((f) => (
            <label className="format-choice" key={f.value}>
              <input type="radio" name="format" value={f.value} />
              <span className="lang-en">{f.en}</span>
              <span className="lang-vi">{f.vi}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="lead-form-row">
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your email" required />
      </div>
      <button type="submit" className="btn btn-lime lead-form-submit" disabled={sending}>
        {sending ? 'Sending…' : (
          <>
            <span className="lang-en">Enroll</span>
            <span className="lang-vi">Đăng Ký</span>
          </>
        )}
      </button>
      <p className="lead-form-note">
        <span className="lang-en">I'll reply by email within 1–2 business days.</span>
        <span className="lang-vi">Mình sẽ phản hồi qua email trong 1–2 ngày làm việc.</span>
      </p>
    </form>
  )
}
