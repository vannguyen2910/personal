import { useState } from 'react'
import { EMAIL, LINKEDIN_URL } from '../../data/site.js'

const rowStyle = {
  display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px',
  border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-md)',
  textDecoration: 'none', color: 'var(--text-primary)', transition: 'var(--transition)',
}
const rowHoverStyle = { borderColor: 'var(--purple)', background: 'var(--purple-subtle)' }
const iconBoxStyle = {
  width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: 'var(--purple-tint)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
}
const labelStyle = {
  fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase',
  letterSpacing: '0.08em', color: 'var(--text-tertiary)', marginBottom: '2px',
}

function ContactRow({ href, label, value, external, children }) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      style={{ ...rowStyle, ...(hover ? rowHoverStyle : null) }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <span style={iconBoxStyle}>{children}</span>
      <div>
        <div style={labelStyle}>{label}</div>
        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>{value}</div>
      </div>
    </a>
  )
}

export default function ContactModal({ open, onClose }) {
  return (
    <div
      id="contactModal"
      className={`modal-overlay${open ? ' open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal" style={{ maxWidth: '440px' }}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
          <img
            src="/portfolio/images/headshot-square.jpg"
            alt="Winnie Nguyen"
            style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0 }}
          />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-primary)' }}>Winnie Nguyen</div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: '2px' }}>Senior Product Designer</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ContactRow href={`mailto:${EMAIL}`} label="Email" value={EMAIL}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--purple)" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
          </ContactRow>
          <ContactRow href={`${LINKEDIN_URL}/`} label="LinkedIn" value="linkedin.com/in/winnienguyen2910" external>
            <svg width="16" height="16" fill="var(--purple)" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </ContactRow>
        </div>
      </div>
    </div>
  )
}
