import { PortfolioLayout } from '../../components/layout'
import { Avatar, Button, Card } from '../../components/atoms'
import { EMAIL, LINKEDIN_URL, BEHANCE_URL } from '../../data/site.js'

export default function Contact() {
  return (
    <PortfolioLayout active="contact">
      <div className="section">
        <Card elevation={8} className="contact-card">
          <Avatar size="xl" tone="purple" style={{ margin: '0 auto var(--space-6)' }}>
            <img src="/portfolio/images/headshot-square.jpg" alt="Winnie Nguyen" />
          </Avatar>
          <h1 className="page-title" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-3)' }}>Let's talk</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)' }}>
            Always happy to talk shop, compare notes, or hear about new opportunities. Reach out, or explore more of the work on Behance.
          </p>
          <div className="contact-links">
            <Button size="lg" href={`mailto:${EMAIL}`}>{EMAIL}</Button>
            <Button variant="outlined" size="lg" href={LINKEDIN_URL} target="_blank" rel="noopener">LinkedIn — winnienguyen2910</Button>
            <Button variant="outlined" size="lg" href={BEHANCE_URL} target="_blank" rel="noopener">Explore more on Behance ↗</Button>
          </div>
        </Card>
      </div>
    </PortfolioLayout>
  )
}
