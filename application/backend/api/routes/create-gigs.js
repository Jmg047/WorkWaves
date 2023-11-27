const { MongoClient } = require('mongodb')
const express = require('express')
const router = express.Router()
const ImageModel = require('./image.model')
const axios = require('axios')

const mongoURI = 'mongodb+srv://client_00:T5StQOdhg2QjJ4KV@cluster0.hhxszoa.mongodb.net/demo'

router.post('/', async (req, res) => {
    try {
      // extracting data from request parameters
      const title = req.query.title
      const where = req.query.location
      const when = req.query.when
      const payment = [ req.query.payment ]
      const description = req.query.description
      
      // const category = req.query.category
      // const testImage = req.file

      // check if required fields are missing
      if (!title || !where || !when || !payment || !description) {
        return res.status(400).json({ error: 'All fields (title, where, when, payment, description) are required' })
      }
  
      // connect to MongoDB
      const client = new MongoClient(mongoURI)
      await client.connect()
      
      // accessing the 'gigs' database
      const db = client.db('gigs')
      const collection = db.collection('gigs')
  
      // check if a gig with the same title exists
      const existingGig = await collection.findOne({ title: title })
  
      // if the gig already exists, return an error
      if (existingGig) {
        client.close()
        return res.status(400).json({ error: 'Duplicate entry already exists' })
      }

       // Make a request to /uploads to upload the image and get the processed image data
    //    const uploadResponse = await axios.post('http://localhost:2000/upload', {
    //     title: title, // Pass the gig name for the image filename
    //     testImage: testImage // Pass the image data (assuming 'testImage' is the field name for image data)
    // })

    // Use the processed image data from the response
    // const uploadedImage = uploadResponse.data
  
    // create a new gig object
      const newGig = {
        title: title,
        description: description,
        location: location,
        payment: payment,
        // category: category,
        // image: uploadedImage
      }
  
      // insert the new gig into the database
      const result = await collection.insertOne(newGig)
  
      // close the MongoDB connection
      client.close()
  
      // return a success message with the created gig details
      res.status(201).json({ message: 'Gig created successfully', newGig })
  
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error creating gigs' })
    }
  })

module.exports = router