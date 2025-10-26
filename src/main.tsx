// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { initI18n, onLangChange } from '@/i18n'

// Initialize i18n (sets dir=rtl for Arabic)
initI18n()

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)

const mount = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}

mount()

// Re-render on language change
onLangChange(() => mount())
