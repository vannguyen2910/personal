import { createContext, useContext, useEffect, useState } from 'react'
import { revealOnScroll } from '../../hooks/reveal.js'
import ProgramNav from './ProgramNav.jsx'
import { ContactModal } from '../contact'
import EnrollSuccessModal from './EnrollSuccessModal.jsx'
import ProgramFooter from './ProgramFooter.jsx'

const ProgramContext = createContext(null)
export const useProgram = () => useContext(ProgramContext)

function readLang() {
  try { return localStorage.getItem('lang') || 'en' } catch { return 'en' }
}

// Page chrome shared by every program page: language toggle, nav, modals, footer,
// scroll-reveal, and the "pre-select the format when a pricing button is clicked" behaviour.
export default function ProgramShell({ children, navVi }) {
  const [lang, setLang] = useState(readLang)
  const [contactOpen, setContactOpen] = useState(false)
  const [enrollOpen, setEnrollOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('is-vi', lang === 'vi')
    try { localStorage.setItem('lang', lang) } catch { /* private mode */ }
  }, [lang])

  // lock background scroll while any modal is open
  useEffect(() => {
    document.documentElement.classList.toggle('modal-open', contactOpen || enrollOpen)
  }, [contactOpen, enrollOpen])

  useEffect(() => {
    const io = revealOnScroll(document.querySelectorAll('.reveal:not([data-own-reveal])'))
    const onClick = (e) => {
      const link = e.target.closest('a[data-format]')
      if (!link) return
      const radio = document.querySelector(`input[name="format"][value="${link.dataset.format}"]`)
      if (radio) radio.checked = true
    }
    document.addEventListener('click', onClick)
    return () => { io.disconnect(); document.removeEventListener('click', onClick) }
  }, [])

  const value = { lang, setLang, openContact: () => setContactOpen(true), openEnroll: () => setEnrollOpen(true) }

  return (
    <ProgramContext.Provider value={value}>
      <ContactModal accent="coral" role="UX Product Design Educator" image="/portfolio/images/headshot-square.jpg" open={contactOpen} onClose={() => setContactOpen(false)} />
      <EnrollSuccessModal open={enrollOpen} onClose={() => setEnrollOpen(false)} />
      <ProgramNav navVi={navVi} />
      {children}
      <ProgramFooter onContact={() => setContactOpen(true)} />
    </ProgramContext.Provider>
  )
}
