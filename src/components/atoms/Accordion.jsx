import { useState } from 'react'

// items: [{ title, content }]
export default function Accordion({ items, className = '' }) {
  const [open, setOpen] = useState(null)
  return (
    <div className={['accordion', className].filter(Boolean).join(' ')}>
      {items.map((item, i) => (
        <div key={item.title} className={`accordion__item${open === i ? ' accordion__item--open' : ''}`}>
          <button className="accordion__trigger" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.title}</span>
            <span className="accordion__icon"></span>
          </button>
          <div className="accordion__content">{item.content}</div>
        </div>
      ))}
    </div>
  )
}
