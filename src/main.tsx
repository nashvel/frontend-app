import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './assets/css/style.css'
import Dashboard from './pages/dashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
)
