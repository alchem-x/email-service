import { resolve } from 'node:path'
import Koa from 'koa'
import serve from 'koa-static'
import { createAPIRouter } from '#server/api_router.js'
import { createEmailRouter } from '#server/email_router.js'

const APP_PORT = 3000

function main() {
  const app = new Koa()

  app.use(createAPIRouter())
  app.use(createEmailRouter())
  app.use(serve(resolve(import.meta.dirname, '..', 'public')))

  app.listen(APP_PORT, () => {
    console.log(`Service listening on port http://localhost:${APP_PORT}`)
  })
}

if (process.argv[1] === import.meta.filename) {
  main()
}
