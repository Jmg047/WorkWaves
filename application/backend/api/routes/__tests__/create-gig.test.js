import { gigToBeCreated } from '../__mocks__/createGigData'
const request = require('supertest')
const baseURL = 'http://localhost:2000'

describe('POST /create-gig', () => {
  const gig = gigToBeCreated
  const query = `title=${gig.title}&description=${gig.description}&location=${gig.location}&payment=${gig.payment}&category=${gig.category}`

  afterAll(async () => {
    await request(baseURL).delete(`/create-gig?title=${query}`)
  })
  it('should return gigs', async () => {
    const response = await request(baseURL).post(`/create-gig?${query}`)
    expect(response.statusCode).toBe(201)
  })
})