import { PortfolioLayout } from '../../components/layout'
import { Button, Chip } from '../../components/atoms'
import { resource as r } from './resource.content.js'

export default function ResourcePage() {
  return (
    <PortfolioLayout>
      <div className="section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-10)', alignItems: 'center' }}>
          <img src={r.image} alt={r.imageAlt} style={{ width: '100%', borderRadius: 'var(--radius-lg, 16px)' }} />
          <div>
            <div className="page-eyebrow">{r.eyebrow}</div>
            <h1 className="page-title">{r.title}</h1>
            <p className="page-desc">{r.description}</p>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', margin: 'var(--space-4) 0' }}>
              {r.details.map((d) => <Chip key={d}>{d}</Chip>)}
            </div>
            <h2 style={{ fontSize: 'var(--text-lg)', margin: 'var(--space-6) 0 var(--space-2)' }}>What's inside</h2>
            <ul style={{ paddingLeft: '1.2em', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {r.inside.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <div style={{ marginTop: 'var(--space-6)' }}>
              <Button href={r.file} download>{r.button}</Button>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-3)' }}>{r.note}</p>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  )
}
