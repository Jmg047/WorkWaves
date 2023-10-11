const { MongoClient } = require('mongodb')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 2000

app.use(cors())
app.use(express.json()) // JSON parser

const mongoURI = 'mongodb+srv://jmg52311:6SADdy370zh14NUJ@cluster0.hhxszoa.mongodb.net/demo'
let workers = []
let gigs = []

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

  app.get('/workers/:id', async (req, res) => {
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

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
