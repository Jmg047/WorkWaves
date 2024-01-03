const { MongoClient } = require('mongodb')
const express = require('express')
const router = express.Router()
const ImageModel = require('./image.model')
const axios = require('axios')

const mongoURI = process.env.DB_CONNECTION_STRING + '/demo'

router.delete('/', async (req, res) => {
    try {
      const title = req.query.title
      const description = req.query.description
  
      const client = new MongoClient(mongoURI)
      await client.connect()
      
      const db = client.db('gigs')
      const collection = db.collection('gigs')
  
      const gigToDelete = await collection.findOne({ title: title })
  
      if ( gigToDelete == null ) {
        client.close()
        return res.status(400).json({ error: 'Gig not found, try again.', gigToDelete })
      } 
  
      const result = await collection.deleteOne({ title: gigToDelete.title })

      client.close()
  
      res.status(202).json({ message: 'Gig deleted successfully' })
  
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error deleting gig' })
    }
  })

module.exports = router