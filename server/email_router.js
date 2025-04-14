import express from 'express'
import { render } from '@vue-email/render'
import { HelloEmail } from '#dist/index.js'

export function createEmailRouter() {
  const router = express.Router()

  router.get('/api/email/hello', async (req, res) => {
    const html = await render(
      HelloEmail,
      {
        title: `Hello ${req.query.name ?? ''}`,
      },
      {
        plainText: false,
      },
    )
    res.send(html)
  })

  return router
}
