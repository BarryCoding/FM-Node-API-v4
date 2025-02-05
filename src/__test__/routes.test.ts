import supertest from 'supertest'
import { app } from '../server'

describe('GET /', () => {
  it('should return 200', async () => {
    const response = await supertest(app).get('/')
    expect(response.status).toBe(200)
  })
  it('should return a message', async () => {
    const response = await supertest(app).get('/')
    expect(response.body.message).toBe('Hello World!')
  })
})
