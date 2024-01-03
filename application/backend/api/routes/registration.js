const { MongoClient } = require('mongodb')
const express = require('express')
const app = express()
const router = express.Router()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const mongoURI = DB_CONNECTION_STRING + '/demo'

router.post('/', async (req, res) => {
    try {
      const { username, password, email } = req.body
  
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
  
      res.status(201).json({ message: 'User registered successfully' })
  
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error registering user' })
    }
  })

module.exports = router