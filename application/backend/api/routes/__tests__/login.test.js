import { userToSign, expectedOutputLogin } from '../__mocks__/userData'
const request = require('supertest')
const baseURL = 'http://localhost:2000'

describe('POST /login', () => {
  const user = userToSign

  it('/login by itself should return 404', async () => {
    const response = await request(baseURL).get('/login')
    expect(response.statusCode).toBe(404)
  })
  it('should say login was successful', async () => {
    const response = await request(baseURL).post(`/login?username=${user.username}&password=${user.password}`)
    expect(response.body).toStrictEqual(expectedOutputLogin)
  })
})