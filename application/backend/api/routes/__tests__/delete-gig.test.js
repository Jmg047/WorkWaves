import { gigToBeCreated } from '../__mocks__/createGigData'
const request = require('supertest')
const baseURL = 'http://localhost:2000'

describe('DELETE /delete-gig', () => {
  const gigToBeDeleted = gigToBeCreated
  const query = `title=${gigToBeDeleted.title}`

  it('should return 400', async () => {
    const response = await request(baseURL).delete(`/delete-gig`)
    expect(response.statusCode).toBe(400)
  })
  it('should return gig deleted successfully', async () => {
    const response = await request(baseURL).delete(`/delete-gig?${query}`)
    expect(response.statusCode).toBe(202)
  })
})