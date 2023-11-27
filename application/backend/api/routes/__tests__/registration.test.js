import { userToRegister } from '../__mocks__/userData'
const request = require('supertest')
const baseURL = 'http://localhost:2000'

describe('POST /register', () => {
  const user = userToRegister

  it('/register by itself should return 404', async () => {
    const response = await request(baseURL).get('/registration')
    expect(response.statusCode).toBe(404)
  })
  it('should say register was successful', async () => {
    const response = await request(baseURL).post(`/registration?username=${user.username}&email=${user.email}&password=${user.password}`)
    expect(response.statusCode).toBe(201)
  })
})