import { Button } from '../atoms'

// active: 'work' | 'about' | 'contact' | undefined
// onContact: opens the contact modal. Without it, Contact is a plain link to the contact page.
export default function PortfolioNav({ active, onContact }) {
  const link = (key, href, label, extra = {}) => (
    <a href={href} className={active === key ? 'active' : undefined} {...extra}>{label}</a>
  )
  return (
    <nav>
      <a href="/portfolio/index.html" className="nav-logo">
        <img src="/portfolio/images/logo-nav.svg" alt="Winnie Nguyen" />
      </a>
      <div className="nav-links">
        <a href="/training/index.html">Training</a>
        {link('work', '/portfolio/work.html', 'Work')}
        {link('about', '/portfolio/about.html', 'About')}
        <a href="/portfolio/files/Winnie-Nguyen-Resume.pdf" download>Resume</a>
        {onContact ? (
          <Button size="sm" className={active === 'contact' ? 'active' : ''} onClick={onContact}>Contact</Button>
        ) : (
          <Button size="sm" href="/portfolio/contact.html">Contact</Button>
        )}
      </div>
    </nav>
  )
}
