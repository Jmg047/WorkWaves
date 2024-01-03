const express = require('express')
const multer = require('multer')
const ImageModel = require('./image.model')
const mongoose = require('mongoose')
const path = require('path')
const router = express.Router()

const mongoURI = DB_CONNECTION_STRING + '/gigs'

mongoose.connect(mongoURI).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'))
  },
  filename: function (req, file, cb) {
    //const gigName = req.body.name.replace(/\s+/g, '_') || ''
    cb(null,  `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

router.post('/', upload.single('testImage'), async (req, res) => {
  try {
    let title = req.body.title
    let testImage = req.file

    if (!title || !testImage) {
      return res.status(400).json({ error: 'Title and image are required' , title, testImage})
    }

    const newImage = new ImageModel({
      name: title,
      image: {
        data: req.file.filename,
        contentType: req.file.mimetype,
      },
    })

    // Save the image to the database
    await newImage.save()
    res.status(201).send('Successfully uploaded')
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
