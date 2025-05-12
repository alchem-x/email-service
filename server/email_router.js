import Router from '@koa/router'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { renderToHTML } from '#server/render_html.js'

/** @type {Record<string,unknown>} */
const distIndex = await import('#dist/index.js')

export function createEmailRouter() {
  const router = new Router()

  router.get('/api/email/hello', async (ctx) => {
    const app = createSSRApp(distIndex.HelloEmail)
    const s = await renderToString(app)
    ctx.body = renderToHTML(s)
  })

  return router.routes()
}
