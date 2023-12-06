const { MongoClient } = require('mongodb');
const express = require('express');
const router = express.Router();

router.use(express.json());

const mongoURI = 'mongodb+srv://client_00:T5StQOdhg2QjJ4KV@cluster0.hhxszoa.mongodb.net/demo';

router.patch('/', async (req, res) => {
  try {
    // Extracting parameters from the query parameters
    const { username, newUsername, email, password, firstName, lastName, phoneNumber } = req.query;

    if (!username || !newUsername) {
      return res.status(400).json({ error: 'Both username and newUsername are required in the query parameters.' });
    }

    const client = new MongoClient(mongoURI);
    await client.connect();

    const db = client.db('demo');
    const collection = db.collection('demo');

    let updateFields = {};
    if (newUsername) updateFields.$set = { Username: newUsername };
    if (email) updateFields.$set = { ...updateFields.$set, Email: email };
    if (password) updateFields.$set = { ...updateFields.$set, Password: password };
    if (firstName) updateFields.$set = { ...updateFields.$set, FirstName: firstName };
    if (lastName) updateFields.$set = { ...updateFields.$set, LastName: lastName };
    if (phoneNumber) updateFields.$set = { ...updateFields.$set, PhoneNumber: phoneNumber };
    
    // Update the user based on the existing username
    const updatedUser = await collection.findOneAndUpdate(
      { Username: username },
      updateFields,
      { returnDocument: 'after' }
    );
    console.log("Update result:", updatedUser);
    client.close();

    if (updatedUser.value) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user: updatedUser.value });
  } catch (error) {
    console.error(error);
    client.close();
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;