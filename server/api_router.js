import Router from '@koa/router'

export function createAPIRouter() {
  const router = new Router()

  router.get('/api/hi', (ctx) => {
    ctx.body = 'hello'
  })

  return router.routes()
}
