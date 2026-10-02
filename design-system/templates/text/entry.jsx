import { createRoot } from 'react-dom/client'
import './text-page.css'
import TextPage from './TextPage.jsx'

document.body.classList.add('tp-white')
createRoot(document.getElementById('root')).render(<TextPage />)
