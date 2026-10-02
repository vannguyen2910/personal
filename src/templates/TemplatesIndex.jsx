import { PortfolioLayout, PageHeader } from '../components/layout'
import CaseCard from '../components/CaseCard.jsx'

// To add a template: build it under src/templates/<name>/, then add a card here.
const templates = [
  {
    href: '/templates/program.html',
    cover: '/portfolio/work/images/cover/Cover - Go1 Content Curation.png',
    coverAlt: '',
    badge: 'Template',
    meta: 'Training',
    title: 'Program page',
    description: 'Full course page: hero, curriculum, pricing, mentor, testimonial and enrol form. English and Vietnamese.',
    cta: 'Open template',
    newTab: false,
  },
  {
    href: '/templates/card-list.html',
    cover: '/portfolio/work/images/cover/Cover - Pinbus.png',
    coverAlt: '',
    badge: 'Template',
    meta: 'Listing',
    title: 'Card list page',
    description: 'A grid of cards with filter tabs. Use it to list programs, events or learning.',
    cta: 'Open template',
    newTab: false,
  },
  {
    href: '/templates/resource.html',
    cover: '/portfolio/work/images/cover/Cover - Refer Plus.png',
    coverAlt: '',
    badge: 'Template',
    meta: 'Download',
    title: 'Resource page',
    description: 'One resource with a preview, what is inside and a download button.',
    cta: 'Open template',
    newTab: false,
  },
  {
    href: '/templates/text.html',
    cover: '/portfolio/work/images/cover/Cover-LeapXpert.png',
    coverAlt: '',
    badge: 'Template',
    meta: 'Reading',
    title: 'Text page',
    description: 'Reading layout for a Markdown lesson: title, tags, table of contents and clean text.',
    cta: 'Open template',
    newTab: false,
  },
]

export default function TemplatesIndex() {
  return (
    <PortfolioLayout>
      <PageHeader eyebrow="Docs" title="Page templates" description="Starting points for new pages. Copy a template, then replace the placeholder content." />
      <div className="section section--tight">
        <div className="case-grid">
          {templates.map((t) => <CaseCard key={t.title} study={t} />)}
        </div>
      </div>
    </PortfolioLayout>
  )
}
