import { useState } from 'react'
import PortfolioNav from './PortfolioNav.jsx'
import ContactModal from './ContactModal.jsx'
import SiteFooter from './SiteFooter.jsx'

// Shared page chrome for the portfolio pages: nav, contact modal, footer.
export default function PortfolioLayout({ active, children }) {
  const [contactOpen, setContactOpen] = useState(false)
  return (
    <>
      <PortfolioNav active={active} onContact={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      {children}
      <SiteFooter />
    </>
  )
}
