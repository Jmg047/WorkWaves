const { MongoClient } = require('mongodb')
const express = require('express')
const router = express.Router()

const mongoURI = 'mongodb+srv://client_00:T5StQOdhg2QjJ4KV@cluster0.hhxszoa.mongodb.net/demo'

router.post('/', async (req, res) => {
    try {
      const username = req.query.username
      const password = req.query.password 
      const email = req.query.email

      if (!username || !password || !email) {
        return res.status(400).json({ error: 'All fields (Username, Password, Email) are required' })
      }
  
      const client = new MongoClient(mongoURI)
      await client.connect()
      
      const db = client.db('demo')
      const collection = db.collection('demo')
  
      const existingUser = await collection.findOne({ Username: username })
  
      if (existingUser) {
        client.close()
        return res.status(400).json({ error: 'Username already exists' })
      }
  
      const newUser = {
        Username: username,
        Password: password,
        Email: email,
        Type: 'Worker',
        isRegistered: true
      }
  
      const result = await collection.insertOne(newUser)
  
      client.close()
  
      res.status(201).json({ message: 'User registered successfully', newUser })
  
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error registering user' })
    }
  })

module.exports = router