const cors = require('cors')
const express = require('express')
const app = express()
const port = 2000

const getGigs = require('./routes/get-gigs')
const getWorkers = require('./routes/get-workers')
const gigs = require('./routes/gigs')
const login = require('./routes/login')
const registration = require('./routes/registration')
const workers = require('./routes/workers')

app.use(cors())

app.use(express.json())

app.use('/workers', workers)

app.use('/get-workers', getWorkers)

app.use('/gigs', gigs)

app.use('/get-gigs', getGigs)

app.use('/registration', registration)

app.use('/login', login)

app.listen(port, () => {
  console.log(`API server is running on port ${port}`)
})
