import { Hono } from 'hono'

const apiApp = new Hono().basePath('/api')

apiApp.get('/hello', (c) => {
    return c.json({ message: "Congrats! You've deployed Hono to Vercel" })
})

export default apiApp