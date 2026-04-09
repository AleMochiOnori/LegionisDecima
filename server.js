import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()
  const isDev = process.env.NODE_ENV !== 'production'

  let vite
  if (isDev) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    })
    app.use(vite.middlewares)
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist/client')))
  }

  app.use(async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template
      if (isDev) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')
      }

      let render
      if (isDev) {
        const mod = await vite.ssrLoadModule('/src/entry-server.tsx')
        render = mod.render
      } else {
        const mod = await import('./dist/server/entry-server.js')
        render = mod.render
      }

      const appHtml = await render(url)

      const html = template.replace('<!--ssr-outlet-->', () => appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (isDev && vite) vite.ssrFixStacktrace(e)
      console.error('SSR Error:', e)
      res.status(500).end(e.stack || e.message)
    }
  })

  const port = process.env.PORT || 5173
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
  })
}

createServer()
