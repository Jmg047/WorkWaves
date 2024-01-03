const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const mongoURI = DB_CONNECTION_STRING + '/demo';

router.get('/', async (req, res) => {
  try {
    const destinationUsername = req.query.destinationUsername;

    if (!destinationUsername) {
      return res.status(400).json({ error: 'Destination username is required in the query parameters.' });
    }

    const client = new MongoClient(mongoURI);
    await client.connect();

    const db = client.db('demo');
    const collection = db.collection('demo');

    const requests = await collection.find({ destinationUsername, Type: 'request' }).toArray();

    client.close();

    res.status(200).json({ requests });
  } catch (error) {
    console.error('Error retrieving requests:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;