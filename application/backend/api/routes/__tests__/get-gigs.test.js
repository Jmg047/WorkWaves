import { gigToBeGotten } from '../__mocks__/gigsData'
const request = require('supertest')
const baseURL = 'http://localhost:2000'

describe('GET /get-gigs', () => {
  const gig = gigToBeGotten

  it('should return 200', async () => {
    const response = await request(baseURL).get('/get-gigs')
    expect(response.statusCode).toBe(200)
  })

  it('should return gigs', async () => {
    const response = await request(baseURL).get(`/get-gigs?title=${gig.title}`)
    expect(response.body).toStrictEqual(
      [{
        _id: '65260fe575d0d9b0acb7219f',
        title: 'Network Security Specialist',
        description: 'Specialize in ensuring the security of computer networks for businesses.',
        location: 'Dallas, TX',
        payment: [ 'Cash', 'Venmo', 'PayPal' ],
        category: 'computer'
      }]
    )
  })
})