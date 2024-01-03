const { MongoClient } = require('mongodb')
const express = require('express')
const router = express.Router()

const mongoURI = process.env.DB_CONNECTION_STRING + '/demo'

router.get('/', async (req, res) => {
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

module.exports = router