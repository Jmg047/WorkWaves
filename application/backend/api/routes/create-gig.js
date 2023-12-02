const express = require('express');
const multer = require('multer');
const { MongoClient } = require('mongodb');
const router = express.Router();

//Configuring Multer for file handling
const storage = multer.diskStorage({
  // Destination folder for file uploads
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
const upload = multer({ storage: storage });

//MongoDB connection URI
const mongoURI = 'mongodb+srv://client_00:T5StQOdhg2QjJ4KV@cluster0.hhxszoa.mongodb.net/gigs';

//POST endpoint for creating a gig
router.post('/', upload.single('image'), async (req, res) => {
  try {
    //Extracting data from request query parameters
    const title = req.query.title;
    const description = req.query.description;
    const location = req.query.location;
    const payment = [req.query.payment];
    const category = req.query.category;

    //Validation for required fields
    if (!title || !description || !location || !payment) {
      return res.status(400).json({ error: 'All fields (title, description, location, payment) are required' });
    }

    //Connecting to MongoDB
    const client = new MongoClient(mongoURI);
    await client.connect();
    const db = client.db('gigs');
    const collection = db.collection('gigs');

    //Checking for duplicate entries
    const existingGig = await collection.findOne({ title: title });
    if (existingGig) {
      client.close();
      return res.status(400).json({ error: 'Duplicate entry already exists' });
    }

    //Creating a new gig object including the image path
    const newGig = {
      title: title,
      description: description,
      location: location,
      payment: payment,
      category: category,
      image: req.file ? req.file.path : null  //Adding the image path to the gig
    };

    //Inserting the new gig into the database
    const result = await collection.insertOne(newGig);
    client.close();
    
    //Sending success response
    res.status(201).json({ message: 'Gig created successfully', newGig });

  } catch (error) {
    //Error handling
    console.error(error);
    res.status(500).json({ error: 'Error creating gigs' });
  }
});

//Exporting the router
module.exports = router;