const { MongoClient } = require('mongodb')
const express = require('express')
const router = express.Router()

const mongoURI = 'mongodb+srv://client_00:T5StQOdhg2QjJ4KV@cluster0.hhxszoa.mongodb.net/demo'

router.get('/', async (req, res) => {
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
  
  module.exports = router