// filepath: /d:/github/mc/commity/hono/api/index.ts
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
// import htmlApp from '@/api/html'
// import apiApp from '@/api/api.ts'
import apiApp from './api.js'


const app = new Hono()

app.get('/api/index', (c) => {
  return c.json({ message: "API index" })
})

app.get('/api/list', (c) => {
  return c.json(
    [
      { id: 1, name: "John" },
      { id: 2, name: "Doe" }
    ]
  )
})

app
// .route("", htmlApp)
  .route("", apiApp)

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;