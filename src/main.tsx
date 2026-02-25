import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CnApp from './cn/CnApp.tsx'

const pathSegments = window.location.pathname.split('/').filter(Boolean)
const isChinesePage = pathSegments.includes('cn')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isChinesePage ? <CnApp /> : <App />}
  </StrictMode>,
)
