function BrandMark() {
  return (
    <div className="brand-mark">
      <img className="brand-mark__photo" src="/portfolio/images/headshot-square.jpg" alt="Winnie Nguyen" />
      <div className="brand-mark__text">
        <div className="brand-mark__name">Winnie Nguyen</div>
        <div className="brand-mark__title">Senior Product Designer | UX Product Design Educator</div>
      </div>
    </div>
  )
}

function SplitPanel({ side, href, image, imageAlt, title, tag, description, cta }) {
  return (
    <div className={`split-panel split-panel--${side}`}>
      <div className="split-panel__zone">
        <a href={href} className="split-panel__link">
          <img
            className="split-panel__illustration split-panel__illustration--photo"
            src={image}
            alt={imageAlt}
            loading="lazy"
          />
          <h2 className="split-panel__title">{title}</h2>
        </a>
        <div className="split-panel__reveal">
          <span className="split-panel__tag">{tag}</span>
          <p className="split-panel__desc">{description}</p>
          <a href={href} className="split-panel__cta">{cta}</a>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <BrandMark />
      <div className="split-hero">
        <SplitPanel
          side="portfolio"
          href="/portfolio/index.html"
          image="/assets/images/work.jpg"
          imageAlt="Illustration of a designer at a laptop, working with charts and data"
          title="See the work"
          tag="For recruiters & hiring managers"
          description="Real case studies with process, decisions, and outcomes, plus résumé and contact details."
          cta="View portfolio"
        />
        <SplitPanel
          side="training"
          href="/training/index.html"
          image="/assets/images/training.jpg"
          imageAlt="Illustration of a mentor leading a session, with ideas, a growth chart, and a graduation cap"
          title="UX Training & Mentoring"
          tag="For designers who want to grow"
          description="A free self-assessment, 1:1 mentoring, and practical UX training grounded in real product work."
          cta="Visit Training Hub"
        />
      </div>
    </>
  )
}
