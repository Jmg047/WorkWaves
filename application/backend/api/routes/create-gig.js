const express = require('express')
const multer = require('multer')
const { MongoClient } = require('mongodb')
const router = express.Router()
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'))
  },

  filename: function (req, file, cb) {
    cb(null, `${file.originalname}_${Date.now()}`)
  }
})
const upload = multer({ storage: storage })

const mongoURI = 'mongodb+srv://client_00:T5StQOdhg2QjJ4KV@cluster0.hhxszoa.mongodb.net/gigs'

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const title = req.query.title
    const description = req.query.description
    const location = req.query.location
    const payment = [req.query.payment]
    const category = req.query.category

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
      image: req.file ? req.file.originalname : null 
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