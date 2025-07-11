import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from "./layouts/MainLayout/MainLayout.js";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MainLayout />
  </StrictMode>,
)
