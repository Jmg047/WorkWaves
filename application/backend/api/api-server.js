const { MongoClient } = require('mongodb')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 2000

app.use(cors())
app.use(express.json()) // JSON parser

const mongoURI = 'mongodb+srv://client_00:T5StQOdhg2QjJ4KV@cluster0.hhxszoa.mongodb.net/demo'

app.get('/workers', async (req, res) => {
  try {
    const client = new MongoClient(mongoURI)
    await client.connect()

    const db = client.db('demo')
    const collection = db.collection('demo')

    const workers = await collection.find({ Type: 'Worker' }).toArray()

    client.close()
    res.json(workers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'error accessing mongoDB data' })
  }
})

app.get('/get-workers/', async (req, res) => {
  try {
    const client = new MongoClient(mongoURI)
    await client.connect()

    const db = client.db('demo')
    const collection = db.collection('demo')

    const firstName = req.query.FirstName
    const lastName = req.query.LastName
    const location = req.query.Location

    const query = {
      Type: 'Worker',
    }

    if (req.query.FirstName) {
      query.FirstName = { $regex: new RegExp(req.query.FirstName, 'i') }
    }

    if (req.query.LastName) {
      query.LastName = { $regex: new RegExp(req.query.LastName, 'i') }
    }

    if (req.query.Location) {
      query.Location = { $regex: new RegExp(req.query.Location, 'i') }
    }

    const workers = await collection.find(query).toArray()

    client.close()
    res.json(workers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'error accessing mongoDB data' })
  }
})

app.get('/gigs', async (req, res) => {
  try {
    const client = new MongoClient(mongoURI)
    await client.connect()

    const db = client.db('demo')
    const collection = db.collection('demo')

    const gigs = await collection.find({ Type: { $ne: 'Worker' } }).toArray()

    client.close()
    res.json(gigs)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'error accessing mongoDB data' })
  }
})

app.get('/get-gigs/', async (req, res) => {
  try {
    const client = new MongoClient(mongoURI)
    await client.connect()

    const db = client.db('demo')
    const collection = db.collection('demo')

    const title = req.query.title
    const location = req.query.location

    const query = {
      Type: { $ne: 'Worker' },
    }

    if (req.query.title) {
      query.title = { $regex: new RegExp(req.query.title, 'i') }
    }

    if (req.query.location) {
      query.location = { $regex: new RegExp(req.query.location, 'i') }
    }

    const gigs = await collection.find(query).toArray()

    client.close()
    res.json(gigs)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'error accessing mongoDB data' })
  }
})

app.post('/registration', async (req, res) => {
  try {
    const username = req.query.username
    const password = req.query.password 
    const email = req.query.email

    if (!username || !password || !email) {
      return res.status(400).json({ error: 'All fields (Username, Password, Email) are required' })
    }

    const client = new MongoClient(mongoURI)
    await client.connect()
    
    const db = client.db('demo')
    const collection = db.collection('demo')

    const existingUser = await collection.findOne({ Username: username })

    if (existingUser) {
      client.close()
      return res.status(400).json({ error: 'Username already exists' })
    }

    const newUser = {
      Username: username,
      Password: password,
      Email: email,
      Type: 'Worker',
      isRegistered: true
    }

    const result = await collection.insertOne(newUser)

    client.close()

    res.status(201).json({ message: 'User registered successfully', newUser })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error registering user' })
  }
})

app.post('/login', async (req, res) => {
  try {
    const client = new MongoClient(mongoURI)
    await client.connect()

    const db = client.db('demo')
    const collection = db.collection('demo')

    const username = req.query.username
    const password = req.query.password

    if (!username || !password) {
      return res.status(400).json({ error: 'All fields (Username, Password) are required' })
    }

    const user = await collection.findOne({ Username: username, Password: password })

    if (!user) {
      client.close()
      return res.status(401).json({ error: 'Invalid username or password' })
    }

    client.close()

    res.status(200).json({ message: 'Login successful', user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error during login' })
  }
})

app.listen(port, () => {
  console.log(`API server is running on port ${port}`)
})
