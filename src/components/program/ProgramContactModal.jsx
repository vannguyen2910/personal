export default function ProgramContactModal({ open, onClose }) {
  return (
    <div id="contactModal" className={`modal-overlay${open ? ' open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
        <div className="modal">
          <button className="modal-close" onClick={onClose}>✕</button>
          <div className="contact-person">
            <img src="/portfolio/images/headshot-square.jpg" alt="Winnie Nguyen"/>
            <div>
              <div className="contact-person-name">Winnie Nguyen</div>
              <div className="contact-person-role">UX Product Design Educator</div>
            </div>
          </div>
          <div className="contact-links">
            <a href="mailto:nguyenphuctuongvan@gmail.com" className="contact-row">
              <span className="contact-row-icon">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--coral)" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
              </span>
              <div>
                <div className="contact-row-label">Email</div>
                <div className="contact-row-value">nguyenphuctuongvan@gmail.com</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/winnienguyen2910/" target="_blank" rel="noopener" className="contact-row">
              <span className="contact-row-icon">
                <svg width="16" height="16" fill="var(--coral)" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </span>
              <div>
                <div className="contact-row-label">LinkedIn</div>
                <div className="contact-row-value">linkedin.com/in/winnienguyen2910</div>
              </div>
            </a>
          </div>
        </div>
      </div>
  )
}
