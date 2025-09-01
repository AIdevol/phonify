import { createRoot } from 'react-dom/client'
import App from './App'
import React from 'react'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
