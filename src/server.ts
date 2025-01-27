import express from 'express'
import { router } from './router'

const app = express()

app.use('/api', router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export { app }
