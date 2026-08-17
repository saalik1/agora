import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'

const container = document.getElementById('root')
if (!container) throw new Error('Root element #root is missing from index.html')

createRoot(container).render(
  <StrictMode>
    {/* Hash routing keeps deep links working on static hosts (GitHub Pages,
        Cloudflare Pages) without a rewrite rule. */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
