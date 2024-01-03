const { MongoClient } = require('mongodb')
const express = require('express')
const router = express.Router()

const mongoURI = DB_CONNECTION_STRING + '/gigs'

router.get('/', async (req, res) => {
    try {
      const client = new MongoClient(mongoURI)
      await client.connect()
  
      const db = client.db('gigs')
      const collection = db.collection('gigs')
  
      const title = req.query.title
      const location = req.query.location
      const category = req.query.category
      
      const query = {
        Type: { $ne: 'Worker' },
      }
  
      if (req.query.title) {
        query.title = { $regex: new RegExp(req.query.title, 'i') }
      }
  
      if (req.query.location) {
        query.location = { $regex: new RegExp(req.query.location, 'i') }
      }

      if (req.query.category) {
        query.category = { $regex: new RegExp(req.query.category, 'i') }
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