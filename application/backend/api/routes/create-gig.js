const { MongoClient } = require('mongodb')
const express = require('express')
const router = express.Router()
const ImageModel = require('./image.model')
const axios = require('axios')

const mongoURI = 'mongodb+srv://client_00:T5StQOdhg2QjJ4KV@cluster0.hhxszoa.mongodb.net/demo'

router.post('/', async (req, res) => {
    try {
      const title = req.query.title
      const description = req.query.description
      const location = req.query.location
      const payment = [ req.query.payment ]
      const category = req.query.category
      //const testImage = req.file

      if (!title || !description || !location || !payment) {
        return res.status(400).json({ error: 'All fields (title, description, location, payment) are required' })
      }
  
      const client = new MongoClient(mongoURI)
      await client.connect()
      
      const db = client.db('gigs')
      const collection = db.collection('gigs')
  
      const existingGig = await collection.findOne({ title: title })
  
      if (existingGig) {
        client.close()
        return res.status(400).json({ error: 'Duplicate entry already exists' })
      }

  
      const newGig = {
        title: title,
        description: description,
        location: location,
        payment: payment,
        category: category,
        //image:
      }
  
      const result = await collection.insertOne(newGig)
  
      client.close()
  
      res.status(201).json({ message: 'Gig created successfully', newGig })
  
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error creating gigs' })
    }
  })

module.exports = router