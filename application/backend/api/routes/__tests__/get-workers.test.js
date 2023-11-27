import { workerToBeGotten, expectedUser } from '../__mocks__/workerData'
const request = require('supertest')
const baseURL = 'http://localhost:2000'

describe('GET /get-workers', () => {
  const user = workerToBeGotten

  it('should return 200', async () => {
    const response = await request(baseURL).get('/get-workers')
    expect(response.statusCode).toBe(200)
  })

  it('should return gigs', async () => {
    const response = await request(baseURL).get(`/get-workers?FirstName=${user.FirstName}`)
    expect(response.body).toStrictEqual( expectedUser )
  })
})