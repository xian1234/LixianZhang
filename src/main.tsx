import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CnApp from './cn/CnApp.tsx'

const isChinesePage = window.location.pathname.startsWith('/cn')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isChinesePage ? <CnApp /> : <App />}
  </StrictMode>,
)
