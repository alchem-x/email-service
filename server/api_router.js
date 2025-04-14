import { Router } from 'express'

export function createAPIRouter() {
  const router = Router()

  router.get('/api/hi', (req, res) => {
    res.send('hello')
  })

  return router
}
