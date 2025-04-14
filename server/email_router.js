import { Router } from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { renderToHTML } from '#server/render_html.js'

/** @type {Record<string,unknown>} */
const distIndex = await import('#dist/index.js')

export function createEmailRouter() {
  const router = Router()

  router.get('/api/email/hello', async (req, res) => {
    const app = createSSRApp(distIndex.HelloEmail)
    const s = await renderToString(app)
    const html = renderToHTML(s)
    res.send(html)
  })

  return router
}
