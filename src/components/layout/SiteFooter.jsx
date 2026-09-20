import { EMAIL, LINKEDIN_URL } from '../../data/site.js'

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <p>© 2026 Winnie Nguyen · Senior Product Designer</p>
        <div className="footer-links">
          <a href={`mailto:${EMAIL}`}>Email</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
