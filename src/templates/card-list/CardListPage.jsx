import { useState } from 'react'
import { PortfolioLayout, PageHeader } from '../../components/layout'
import { Tabs, Field } from '../../components/atoms'
import CaseCard from '../../components/CaseCard.jsx'
import CompactCard from './CompactCard.jsx'
import { cards, defaultView } from './cards.content.js'

const categories = [...new Set(cards.map((c) => c.category))]

// A card matches when every word typed appears in its title, text, meta, badge or category.
function matches(card, query) {
  const hay = [card.title, card.description, card.meta, card.badge, card.category].join(' ').toLowerCase()
  return query.toLowerCase().split(/\s+/).filter(Boolean).every((w) => hay.includes(w))
}

export default function CardListPage() {
  const [query, setQuery] = useState('')
  const [view, setView] = useState(defaultView)

  const grid = (items) => {
    const shown = items.filter((c) => matches(c, query))
    if (!shown.length) return <p className="cl-empty">Nothing found. Try a different word.</p>
    return view === 'compact'
      ? <div className="cl-grid">{shown.map((c) => <CompactCard key={c.title} card={c} />)}</div>
      : <div className="case-grid">{shown.map((c) => <CaseCard key={c.title} study={c} />)}</div>
  }

  const tabs = [
    { label: 'All', content: grid(cards) },
    ...categories.map((cat) => ({ label: cat, content: grid(cards.filter((c) => c.category === cat)) })),
  ]

  return (
    <PortfolioLayout>
      <PageHeader eyebrow="Eyebrow" title="Page title" description="One sentence that explains what is listed on this page." />
      <div className="section section--tight">
        <div className="cl-controls">
          <Field className="cl-search" label="Search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} />
          <div className="cl-view" role="group" aria-label="Layout">
            <button type="button" aria-pressed={view === 'cards'} onClick={() => setView('cards')}>Cards</button>
            <button type="button" aria-pressed={view === 'compact'} onClick={() => setView('compact')}>Compact</button>
          </div>
        </div>
        <Tabs tabs={tabs} pill className="cl-tabs" />
      </div>
    </PortfolioLayout>
  )
}
