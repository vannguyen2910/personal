import { EMAIL, LINKEDIN_URL, BEHANCE_URL } from '../../data/site.js'

const rows = [
  {
    href: `mailto:${EMAIL}`,
    label: 'Email',
    value: EMAIL,
    icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--coral)" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>,
  },
  {
    href: `${LINKEDIN_URL}/`,
    label: 'LinkedIn',
    value: 'linkedin.com/in/winnienguyen2910',
    external: true,
    icon: <svg width="16" height="16" fill="var(--coral)" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    href: BEHANCE_URL,
    label: 'Behance',
    value: 'behance.net/nguyenphuctuongvan',
    external: true,
    icon: <svg width="16" height="16" fill="var(--coral)" viewBox="0 0 24 24"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.201 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>,
  },
]

// Contact modal in the editorial (program) design system. The portfolio pages use ContactModal instead.
export default function EditorialContactModal({ open, onClose }) {
  return (
    <div
      id="contactModal"
      className={`modal-overlay${open ? ' open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="contact-person">
          <img src="/portfolio/images/headshot-square.jpg" alt="Winnie Nguyen" />
          <div>
            <div className="contact-person-name">Winnie Nguyen</div>
            <div className="contact-person-role">Senior Product Designer</div>
          </div>
        </div>
        <div className="contact-links">
          {rows.map((row) => (
            <a key={row.label} href={row.href} className="contact-row" {...(row.external ? { target: '_blank', rel: 'noopener' } : {})}>
              <span className="contact-row-icon">{row.icon}</span>
              <div>
                <div className="contact-row-label">{row.label}</div>
                <div className="contact-row-value">{row.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
