import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import './styles/styles_header.css'
import './styles/styles_nav.css'
import './styles/styles_cards.css'
import './styles/styles_catalogo.css'
import './styles/styles_emprendedor.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
