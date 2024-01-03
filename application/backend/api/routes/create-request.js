const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const mongoURI = DB_CONNECTION_STRING + '/demo';

router.post('/', async (req, res) => {
  try {
    const requesterUsername = req.query.requesterUsername;
    const destinationUsername = req.query.destinationUsername;

    if (!requesterUsername || !destinationUsername) {
      return res.status(400).json({ error: 'Both requesterUsername and destinationUsername are required in the query parameters.' });
    }

    const client = new MongoClient(mongoURI);
    await client.connect();

    const db = client.db('demo');
    const collection = db.collection('demo');

    const destinationUser = await collection.findOne({ Username: destinationUsername });

    if (!destinationUser) {
      return res.status(404).json({ error: 'Destination user not found' });
    }

    const newRequest = { requesterUsername, destinationUsername, Type: 'request' };
    await collection.insertOne(newRequest);

    client.close();

    res.status(201).json({ message: 'Request created successfully' });
  } catch (error) {
    console.error('Error creating request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
