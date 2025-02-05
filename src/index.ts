import * as dotenv from 'dotenv'
import { app } from './server'

dotenv.config()

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

// last resort error handling, sync error
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason)
  // Application specific logging, throwing an error, or other logic here
})

// last resort error handling, async error
process.on('uncaughtException', (error) => {
  console.log('Uncaught Exception thrown', error)
  process.exit(1)
})
