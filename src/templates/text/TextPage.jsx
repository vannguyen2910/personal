import { PortfolioLayout } from '../../components/layout'
import { Chip, Tabs } from '../../components/atoms'
import { renderLesson } from './markdown.js'
// TEMPLATE: point this at any Markdown file. Same front matter as the Mentoring Library lessons.
import lessonSource from './example-lesson.md?raw'
import { slidesUrl, homework, relatedLinks, programLinks } from './lesson.extras.js'

const lesson = renderLesson(lessonSource)

// Where the "back" link goes, and the name of the Markdown file this page is built from.
const backLink = { href: '/templates/index.html', label: 'Page templates' }
const sourceName = 'design-thinking-lesson.md'

function SlidesTab() {
  if (!slidesUrl) {
    return (
      <div className="tp-slides tp-slides--empty">
        <strong>Slides will appear here</strong>
        <span>Add the link to <code>slidesUrl</code> in <code>lesson.extras.js</code>.</span>
      </div>
    )
  }
  return (
    <div>
      <div className="tp-slides"><iframe src={slidesUrl} title="Lesson slides" allowFullScreen /></div>
      <p className="tp-slides__link"><a href={slidesUrl} target="_blank" rel="noopener">Open slides in a new tab ↗</a></p>
    </div>
  )
}

function HomeworkTab() {
  const groups = [...new Set(homework.map((h) => h.assignment))]
  return (
    <div className="tp-hw">
      {groups.map((g) => (
        <section key={g}>
          <h3 className="tp-hw__group">{g}</h3>
          <div className="tp-hw__grid">
            {homework.filter((h) => h.assignment === g).map((h) => (
              h.image ? (
                <a key={h.title} className="tp-hw__card" href={h.image} target="_blank" rel="noopener">
                  <div className="tp-hw__thumb"><img src={h.image} alt={h.title} loading="lazy" /></div>
                  <div className="tp-hw__info"><strong>{h.title}</strong><span>by {h.mentee}</span></div>
                </a>
              ) : (
                <div key={h.title} className="tp-hw__card tp-hw__card--empty">
                  <div className="tp-hw__thumb"><span>No image yet</span></div>
                  <div className="tp-hw__info"><strong>{h.title}</strong><span>by {h.mentee}</span></div>
                </div>
              )
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default function TextPage() {
  const { meta, html, headings } = lesson
  const related = [
    meta['previous-session'] && { label: 'Previous lesson', title: meta['previous-session'] },
    meta['next-session'] && { label: 'Next lesson', title: meta['next-session'] },
  ].filter(Boolean).map((r) => ({ ...r, href: relatedLinks[r.title] }))
  const details = [
    ['Program', meta.program],
    ['Level', meta.level],
    ['Duration', meta.duration],
    ['Date', meta.date],
    ['Source file', sourceName],
  ].filter(([, v]) => v)
  const tabs = [
    {
      label: 'Lesson',
      content: (
              <div className="tp-layout">
                <aside className="tp-toc" aria-label="On this page">
                  <p className="tp-toc__label">On this page</p>
                  {headings.map((h) => <a key={h.id} href={`#${h.id}`}>{h.text}</a>)}
                </aside>
                <article className="tp-body" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
      ),
    },
    { label: 'Slides', content: <SlidesTab /> },
    { label: `Homework examples (${homework.filter((h) => h.image).length})`, content: <HomeworkTab /> },
  ]

  return (
    <PortfolioLayout>
      <div className="tp">
        <a className="tp-back" href={backLink.href}>← {backLink.label}</a>
        <header className="tp-head">
          <h1 className="page-title">{meta.title}</h1>
          {meta.subtitle && <p className="page-desc">{meta.subtitle}</p>}
          <dl className="tp-meta" style={{ '--tp-cols': `repeat(${details.length - 1}, minmax(0, 1fr)) minmax(0, 1.8fr)` }}>
            {details.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>
                  {k === 'Source file' && <code>{v}</code>}
                  {k === 'Program' && (programLinks[v] ? <a className="tp-meta__link" href={programLinks[v]}>{v} →</a> : v)}
                  {k !== 'Source file' && k !== 'Program' && v}
                </dd>
              </div>
            ))}
            {Array.isArray(meta.tags) && (
              <div className="tp-meta__tags">
                <dt>Topics</dt>
                <dd>{meta.tags.map((t) => <span key={t}>{t}</span>)}</dd>
              </div>
            )}
          </dl>
        </header>

        <Tabs pill className="tp-tabs" tabs={tabs} />

        {related.length > 0 && (
          <section className="tp-related">
            <h2>Related lessons</h2>
            <div className="tp-related__grid">
              {related.map((r) => {
                const Tag = r.href ? 'a' : 'div'
                return (
                  <Tag key={r.label} className="tp-related__card" href={r.href}>
                    <span>{r.label}</span>
                    <strong>{r.title}</strong>
                  </Tag>
                )
              })}
            </div>
          </section>
        )}
      </div>
    </PortfolioLayout>
  )
}
