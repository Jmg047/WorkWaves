const { MongoClient} = require('mongodb');
const express = require('express');
const router = express.Router();

router.use(express.json());

const mongoURI = 'mongodb+srv://client_00:T5StQOdhg2QjJ4KV@cluster0.hhxszoa.mongodb.net/demo';

router.patch('/:username', async (req, res) => {
  try {
    // Extracting username from the URL parameter
    const { username } = req.params; 
    const { newUsername, email, password } = req.body;

    if (!newUsername && !email && !password) {
      return res.status(400).json({ error: 'At least one field (New Username, Email, Password) is required to update' });
    }

    const client = new MongoClient(mongoURI);
    await client.connect();

    const db = client.db('demo');
    const collection = db.collection('demo');

    let updateFields = {};
    if (newUsername) updateFields.Username = newUsername;
    if (email) updateFields.Email = email;
    if (password) updateFields.Password = password;

    // Update the user based on the existing username
    const updatedUser = await collection.findOneAndUpdate(
      { Username: username },
      { $set: updateFields },
      { returnDocument: 'after' }
    );
    console.log("Update result:", updatedUser);
    client.close();

    if (!updatedUser.value) {
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