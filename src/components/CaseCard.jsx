import { Card } from './atoms'

// A case-study card: cover image, meta line, title, blurb, call to action.
export default function CaseCard({ study }) {
  const { href, cover, coverAlt, badge, meta, title, description } = study
  return (
    <Card as="a" elevation={4} interactive href={href} target="_blank" rel="noopener" className="case-card case-card--interactive">
      <div className="case-card__media">
        <img src={cover} alt={coverAlt} />
        {badge && <span className="case-card__lock">{badge}</span>}
      </div>
      <div className="case-card__body">
        <div className="case-card__meta">{meta}</div>
        <h3 className="case-card__title">{title}</h3>
        <p className="case-card__desc">{description}</p>
        <span className="case-card__cta">View case study</span>
      </div>
    </Card>
  )
}
