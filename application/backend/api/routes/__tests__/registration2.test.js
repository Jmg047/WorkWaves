import { userToRegister } from '../__mocks__/userData'
const request = require('supertest')
const baseURL = 'http://localhost:2000'

describe('DELETE /delete-account', () => {
  const accountToBeDeleted = userToRegister
  const query = `username=${accountToBeDeleted.username}`

  it('should return account deleted successfully', async () => {
    const response = await request(baseURL).delete(`/delete-account?${query}`)
    expect(response.statusCode).toBe(202)
  })
})