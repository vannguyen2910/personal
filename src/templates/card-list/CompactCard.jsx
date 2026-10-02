import { Chip } from '../../components/atoms'

// Small card with no image. Uses the same fields as the image card.
export default function CompactCard({ card }) {
  const { href, badge, meta, title, description, cta = 'View', newTab = true, category } = card
  return (
    <a className="cl-mini" href={href} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener' : undefined}>
      <div className="cl-mini__top">
        <Chip variant="soft" size="sm">{category}</Chip>
        <span>{badge || meta}</span>
      </div>
      <h3 className="cl-mini__title">{title}</h3>
      <p className="cl-mini__desc">{description}</p>
      <span className="cl-mini__cta">{cta} →</span>
    </a>
  )
}
