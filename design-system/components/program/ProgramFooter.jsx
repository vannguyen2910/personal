export default function ProgramFooter({ onContact }) {
  return (
    <footer>
        <div className="wrap footer-inner">
          <p>© 2026 Winnie Nguyen · UX Product Design Educator</p>
          <div className="footer-links">
            <a href="#" onClick={(e) => { e.preventDefault(); onContact() }}>Contact</a>
            <a href="https://www.linkedin.com/in/winnienguyen2910" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </footer>
  )
}
