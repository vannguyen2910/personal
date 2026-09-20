export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="page-header">
      <div className="page-eyebrow">{eyebrow}</div>
      <h1 className="page-title">{title}</h1>
      <p className="page-desc">{description}</p>
    </div>
  )
}
