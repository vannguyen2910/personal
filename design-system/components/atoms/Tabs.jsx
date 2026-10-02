import { useState } from 'react'

// tabs: [{ label, content }]
export default function Tabs({ tabs, pill = false, className = '' }) {
  const [active, setActive] = useState(0)
  return (
    <div className={['tabs', pill && 'tabs--pill', className].filter(Boolean).join(' ')}>
      <div className="tabs__list" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={i === active}
            className={`tabs__tab${i === active ? ' tabs__tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs[active].content}
    </div>
  )
}
