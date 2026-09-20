import { PortfolioLayout, PageHeader } from '../../components/layout'
import { Button } from '../../components/atoms'
import CaseCard from '../../components/CaseCard.jsx'
import { caseStudies } from '../../data/caseStudies.js'
import { BEHANCE_URL } from '../../data/site.js'

export default function Work() {
  return (
    <PortfolioLayout active="work">
      <PageHeader
        eyebrow="Highlighted work"
        title="Case studies"
        description="A closer look at how I work — from discovery through to measurable outcomes."
      />

      <div className="section section--tight">
        <div className="case-grid">
          {caseStudies.map((study) => (
            <CaseCard key={study.href} study={study} />
          ))}
        </div>
      </div>

      <div className="section section--tight" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)' }}>
          More projects, including earlier UI/UX and web design work, live on my Behance profile.
        </p>
        <Button variant="outlined" href={BEHANCE_URL} target="_blank" rel="noopener" style={{ marginTop: 'var(--space-4)' }}>
          Explore more on Behance ↗
        </Button>
      </div>
    </PortfolioLayout>
  )
}
