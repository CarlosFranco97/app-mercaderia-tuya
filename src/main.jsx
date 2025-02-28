import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PanelControl from './PanelControl'
import PanelContenido from './PanelContenido'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelControl />
    <PanelContenido />
  </StrictMode>,
)
