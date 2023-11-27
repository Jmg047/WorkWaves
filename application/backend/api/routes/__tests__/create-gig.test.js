const request = require('supertest')
const baseURL = 'http://localhost:2000'

describe('POST /create-gig', () => {
  const query = 'Carry and organize merchandise for our Extreme sporting goods shop&description=Bi-weekly inventory shipments need to be organized in our shipping container storage. Must be able to lift 40Lbs.&location=San Jose, CA&payment=Cash&category=retail&payment=Zelle'

  afterAll(async () => {
    await request(baseURL).delete(`/create-gig?title=${query}`)
  })
  it('should return gigs', async () => {
    const response = await request(baseURL).post(`/create-gig?title=${query}`)
    expect(response.statusCode).toBe(201)
  })
})