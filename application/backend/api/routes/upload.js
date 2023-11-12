const express = require('express')
const multer = require('multer')
const ImageModel = require('./image.model')
const mongoose = require('mongoose')
const path = require('path')

// MongoDB URI - Replace with your environment variable or secure store method
const mongoURI = 'mongodb+srv://client_00:T5StQOdhg2QjJ4KV@cluster0.hhxszoa.mongodb.net/demo'
mongoose.connect(mongoURI).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))
// Set up storage using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Ensure the uploads directory exists within the client's src/assets
    cb(null, path.join(__dirname, '../uploads'))
  },
  filename: function (req, file, cb) {
    // Use Date.now() for uniqueness along with the original name
    cb(null, Date.now() + '-' + file.originalname)
  }
})
//h

// Using multer for storage
const upload = multer({ storage: storage })

// Creating express router
const router = express.Router()

// POST endpoint for image upload
router.post('/', upload.single('testImage'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.')
  }

  // Create a new image model instance and populate the data
  const newImage = new ImageModel({
    name: req.body.name,
    image: {
      data: req.file.filename, // Saving just the filename might be sufficient if you construct the path when accessing
      contentType: req.file.mimetype
    }
  })

  // Save the image to the database
  try {
    await newImage.save()
    res.status(201).send('Successfully uploaded')
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
