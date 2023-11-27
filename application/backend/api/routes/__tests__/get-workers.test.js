import { workerToBeGotten } from '../__mocks__/workerData'
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
    expect(response.body).toStrictEqual(
      [{
        _id: '6526146d75d0d9b0acb7218c',
        Username: 'john_worker',
        Email: 'john@example.com',
        Password: 'hashed_password_1',
        FirstName: 'John',
        LastName: 'Doe',
        ProfilePicture: 'profile_image_url_1.jpg',
        ContactInformation: {
            'Phone': '123-456-7890',
            'Address': '123 Main St, City, State'
        },
        Type: 'Worker',
        RegistrationDate: '2023-10-11T03:20:13.748Z',
        Ratings: [
            3.5,
            4,
            3
        ],
        JobsCompleted: 15,
        TimesRequested: 20,
        Location: 'New York, NY',
        NotificationsPreferences: [
            'Phone',
            'Text',
            'Email'
        ]
    }]
    )
  })
})