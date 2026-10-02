import './contact-modal.css'
import { EMAIL, LINKEDIN_URL, BEHANCE_URL, ADPLIST_URL } from '../../data/site.js'

const LINKS = {
  email: {
    href: `mailto:${EMAIL}`,
    label: 'Email',
    value: EMAIL,
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--cm-accent)" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
    ),
  },
  linkedin: {
    href: `${LINKEDIN_URL}/`,
    label: 'LinkedIn',
    value: 'linkedin.com/in/winnienguyen2910',
    external: true,
    icon: (
      <svg width="16" height="16" fill="var(--cm-accent)" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
    ),
  },
  behance: {
    href: BEHANCE_URL,
    label: 'Behance',
    value: 'behance.net/nguyenphuctuongvan',
    external: true,
    icon: (
      <svg width="16" height="16" fill="var(--cm-accent)" viewBox="0 0 24 24"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.201 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
    ),
  },
  adplist: {
    href: ADPLIST_URL,
    label: 'ADPList',
    value: 'Book a free mentoring session',
    external: true,
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--cm-accent)" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
  },
}

// The site's one contact popup.
//   accent: 'purple' | 'coral'   matches the page's design system
//   links:  which rows to show, in order (email, linkedin, behance, adplist)
//   open/onClose: controlled by React state. Leave both off to let another script open it by adding
//                 the 'open' class to the element with this `id` (the self-assessment page does this).
export default function ContactModal({
  id = 'contactModal',
  accent = 'purple',
  role = 'Senior Product Designer',
  image = '/portfolio/images/headshot-square.jpg',
  links = ['email', 'linkedin'],
  open,
  onClose,
}) {
  const close = (el) => (onClose ? onClose() : el.closest('.modal-overlay').classList.remove('open'))
  return (
    <div
      id={id}
      className={`modal-overlay${open ? ' open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) close(e.currentTarget) }}
    >
      <div className={`modal cm cm--${accent}`} style={{ maxWidth: '440px' }}>
        <button className="modal-close" onClick={(e) => close(e.currentTarget)}>✕</button>
        <div className="cm-person">
          <img src={image} alt="Winnie Nguyen" />
          <div>
            <div className="cm-name">Winnie Nguyen</div>
            <div className="cm-role">{role}</div>
          </div>
        </div>
        <div className="cm-links">
          {links.map((key) => {
            const l = LINKS[key]
            return (
              <a key={key} href={l.href} className="cm-row" {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}>
                <span className="cm-icon">{l.icon}</span>
                <div>
                  <div className="cm-label">{l.label}</div>
                  <div className="cm-value">{l.value}</div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
