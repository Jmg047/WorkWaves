import { gigToBeGotten, gigToBeExpected } from '../__mocks__/gigsData'
const request = require('supertest')
const baseURL = 'http://localhost:2000'

describe('GET /get-gigs', () => {
  const gig = gigToBeGotten
  const query = `title=${gig.title}&description=${gig.description}&location=${gig.location}`

  it('should return 200', async () => {
    const response = await request(baseURL).get('/get-gigs')
    expect(response.statusCode).toBe(200)
  })

  it('should return expected gig', async () => {
    const response = await request(baseURL).get(`/get-gigs?${query}`)
    expect(response.body).toStrictEqual( gigToBeExpected )
  })
})