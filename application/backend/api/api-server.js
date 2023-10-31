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
      const client = new MongoClient(mongoURI)
      await client.connect()
      
      const db = client.db('demo')
      const collection = db.collection('demo')
      
      const { username, password, email } = req.body // Use req.body to access POST data
      
      // Check if the username already exists in the database
      const existingUser = await collection.findOne({ username: req.body.username })
  
      if (existingUser) {
        client.close()
        return res.status(400).json({ error: 'Username already exists' })
      }
  
      // If the username doesn't exist, insert the new user into the database
      const newUser = {
        username,
        password, // Note: You should hash and salt the password before storing it in a production environment.
        email,
        Type: 'Worker' // Assuming all registered users are of type 'Worker', you can adjust this as needed.
      }
  
      const result = await collection.insertOne(newUser)
  
      client.close()
      
      res.status(201).json({ message: 'User registered successfully', insertedId: result.insertedId })
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
  
      const { username, password } = req.body // Use req.body to access POST data
  
      // Find the user with the provided username
      const user = await collection.findOne({ username: req.body.username })
      //const workers = await collection.find({ Type: 'Worker' }).toArray()
  
      if (!user) {
        client.close()
        return res.status(401).json({ error: 'User not found' })
      }
  
      // For simplicity, we compare the password as plain text. In a real-world app, you should hash and compare it securely.
      if (user.password !== password) {
        client.close()
        return res.status(401).json({ error: 'Invalid password' })
      }
  
      // If the username and password match, you can consider the user authenticated.
      // You can generate and send a JWT (JSON Web Token) to the client for further authentication.
  
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
