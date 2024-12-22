import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static.module'

const htmlApp = new Hono()

htmlApp.use(serveStatic('public'))

export default htmlApp