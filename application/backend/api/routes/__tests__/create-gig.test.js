import { gigToBeCreated } from '../__mocks__/createGigData'
const request = require('supertest')
const baseURL = 'http://localhost:2000'

describe('POST /create-gig', () => {
  const gig = gigToBeCreated
  const query =
  `title=${gig.title}&description=${gig.description}&location=${gig.location}&payment=${gig.payment}&category=${gig.category}`

  it('should return 400', async () => {
    const response = await request(baseURL).post(`/create-gig`)
    expect(response.statusCode).toBe(400)
  })
  it('should return gig created successfully', async () => {
    const response = await request(baseURL).post(`/create-gig?${query}`)
    expect(response.statusCode).toBe(201)
  })
})