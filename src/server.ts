import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { router } from './router'
import { protectedRoute } from './utils/auth'
import { createUser, signIn } from './handlers/user'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', protectedRoute, router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/user', createUser)
app.post('/signin', signIn)

export { app }
