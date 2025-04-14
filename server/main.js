import express from 'express'
import { resolve } from 'node:path'
import { createAPIRouter } from '#server/api_router.js'
import { createEmailRouter } from '#server/email_router.js'

const APP_PORT = 3000

function main() {
  const app = express()

  app.use(createAPIRouter())
  app.use(createEmailRouter())
  app.use(express.static(resolve(import.meta.dirname, '..', 'public')))

  app.listen(APP_PORT, () => {
    console.log(`Service listening on port http://localhost:${APP_PORT}`)
  })
}

if (process.argv[1] === import.meta.filename) {
  main()
}
