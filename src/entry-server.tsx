import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.tsx'
import './index.css'

export async function render(url: string) {
  console.log('Rendering SSR for URL:', url)
  
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )

  return appHtml
}
