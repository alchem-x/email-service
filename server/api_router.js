import express from 'express'

export function createAPIRouter() {
  const router = express.Router()

  router.get('/api/hi', (req, res) => {
    res.send('hello')
  })

  return router
}
