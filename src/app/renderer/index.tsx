import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.scss'

const htmlElement = document.getElementById('root')

if (htmlElement != null) {
  const root = createRoot(htmlElement)
  root.render(<App />)
} else {
  console.error('Root element not found')
}
