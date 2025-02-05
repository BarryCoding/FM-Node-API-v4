import cors from 'cors'
import express, { ErrorRequestHandler } from 'express'
import morgan from 'morgan'
import { createUser, signIn } from './handlers/user'
import { router } from './router'
import { protectedRoute } from './utils/auth'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', protectedRoute, router)

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.json({ message: 'Hello World!' })
  // throw new Error('test error') // test sync error
})

app.post('/user', createUser)
app.post('/signin', signIn)

// express global error handling put at the end
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // console.log(err)
  // custom error handling
  if (err.type === 'auth') {
    res.status(401).json({ message: 'nope, auth error' })
  } else if (err.type === 'input') {
    res.status(400).json({ message: 'nope, input error' })
  } else {
    res.status(500).json({ message: `server error: ${err.message}` })
  }
}

app.use(errorHandler)

export { app }
