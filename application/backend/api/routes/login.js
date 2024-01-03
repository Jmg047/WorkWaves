const { MongoClient } = require('mongodb')
const express = require('express')
const router = express.Router()

const mongoURI = DB_CONNECTION_STRING + '/demo'

router.post('/', async (req, res) => {
    try {
      const client = new MongoClient(mongoURI)
      await client.connect()
  
      const db = client.db('demo')
      const collection = db.collection('demo')
  
      const { username, password } = req.body
  
      if (!username || !password) {
        return res.status(400).json({ error: 'All fields (Username, Password) are required' })
      }
  
      const user = await collection.findOne({ Username: username, Password: password })
  
      if (!user) {
        client.close()
        return res.status(401).json({ error: 'Invalid username or password' })
      }
  
      client.close()
  
      res.status(200).json({ message: 'Login successful', user })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error during login' })
    }
  })

module.exports = router