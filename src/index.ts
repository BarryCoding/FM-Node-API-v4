import * as dotenv from 'dotenv'
import config from './config'
import { app } from './server'

dotenv.config()

app.listen(config.port, () => {
  console.log('Server is running on http://localhost:' + config.port)
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
