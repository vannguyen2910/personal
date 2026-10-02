import { useEffect, useRef, useState } from 'react'

const bi = (en, vi) => (
  <>
    <span className="lang-en">{en}</span>
    <span className="lang-vi">{vi}</span>
  </>
)

// sessions: a list of phase labels ({ phase }) and sessions ({ idx, title, summary, tools, columns: [{ label, items? , outcome? }] }] where each text is { en, vi }.
// A column lists items (li, optional className) or shows an outcome (title + description).
// One session stays open at a time; click or press Enter/Space to toggle.
export default function Curriculum({ sessions }) {
  const [open, setOpen] = useState(null)
  // React owns these rows' class names, so the fade-in is tracked in state instead of by adding
  // a class to the element (React would wipe it the next time the row opens or closes).
  const [seen, setSeen] = useState({})
  const rowRefs = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return
        const i = rowRefs.current.indexOf(e.target)
        setSeen((s) => ({ ...s, [i]: true }))
        io.unobserve(e.target)
      }),
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    rowRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [sessions])

  const toggle = (i) => setOpen((cur) => (cur === i ? null : i))
  return (
    <div className="session-list">
      {sessions.map((s, i) => s.phase ? (
        <div className="phase-label" key={i}>
          <span className="phase-dot"></span>
          <span>{bi(s.phase.en, s.phase.vi)}</span>
        </div>
      ) : (
        <div
          key={i}
          data-own-reveal
          ref={(el) => rowRefs.current[i] = el}
          className={`session-row reveal${seen[i] ? ' is-visible' : ''}${open === i ? ' is-open' : ''}`}
          tabIndex={0}
          role="button"
          aria-expanded={open === i}
          onClick={() => toggle(i)}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i) } }}
        >
          <div className="idx">{s.idx}</div>
          <div>
            <div className="session-row-top">
              <div>
                <h3>{bi(s.title.en, s.title.vi)}</h3>
                <p>{bi(s.summary.en, s.summary.vi)}</p>
                {s.tools?.length > 0 && (
                  <div className="session-meta">{s.tools.map((t) => <span key={t}>{t}</span>)}</div>
                )}
              </div>
              <span className="session-chevron" aria-hidden="true"></span>
            </div>
            <div className="session-detail-wrap">
              <div className="session-detail-inner">
                <div className="session-detail">
                  {s.columns.map((col, c) => (
                    <div key={c}>
                      <span className="session-detail-label">{bi(col.label.en, col.label.vi)}</span>
                      {col.items && (
                        <ul>
                          {col.items.map((l, k) => <li key={k} className={l.className}>{bi(l.en, l.vi)}</li>)}
                        </ul>
                      )}
                      {col.outcome && (
                        <>
                          <p className="session-outcome-title">{bi(col.outcome.title.en, col.outcome.title.vi)}</p>
                          <p className="session-outcome-desc">{bi(col.outcome.description.en, col.outcome.description.vi)}</p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
