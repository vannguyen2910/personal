import { useProgram } from './ProgramShell.jsx'

const defaultVi = { curriculum: 'Giáo trình', mentor: 'Mentor' }

// navVi lets a page override the Vietnamese labels of the nav links.
export default function ProgramNav({ navVi }) {
  const { lang, setLang } = useProgram()
  const vi = { ...defaultVi, ...navVi }
  return (
    <nav className="nav">
        <div className="wrap">
          <a href="/training/index.html" className="nav-logo">
            <img src="/training/assets/Logo.svg" alt="Winnie Nguyen"/>
          </a>
          <div className="nav-links">
            <a href="#curriculum"><span className="lang-en">Curriculum</span><span className="lang-vi">{vi.curriculum}</span></a>
            <a href="#pricing"><span className="lang-en">Pricing</span><span className="lang-vi">Học phí</span></a>
            <a href="#mentor"><span className="lang-en">Mentor</span><span className="lang-vi">{vi.mentor}</span></a>
            <a href="#testimonial"><span className="lang-en">Story</span><span className="lang-vi">Câu chuyện</span></a>
            <a href="#closing"><span className="lang-en">Format</span><span className="lang-vi">Hình thức</span></a>
          </div>
          <div className="nav-actions">
            <div className="lang-toggle" role="group" aria-label="Language">
              <button type="button" className={`lang-btn${lang === 'en' ? ' is-active' : ''}`} data-lang="en" onClick={() => setLang('en')}>EN</button>
              <span className="lang-toggle-sep">|</span>
              <button type="button" className={`lang-btn${lang === 'vi' ? ' is-active' : ''}`} data-lang="vi" onClick={() => setLang('vi')}>VN</button>
            </div>
            <a href="#closing" className="btn btn-dark nav-cta"><span className="lang-en">Enroll</span><span className="lang-vi">Đăng ký</span></a>
          </div>
        </div>
      </nav>
  )
}
