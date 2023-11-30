const { MongoClient } = require('mongodb')
const express = require('express')
const router = express.Router()
const ImageModel = require('./image.model')
const axios = require('axios')

const mongoURI = 'mongodb+srv://client_00:T5StQOdhg2QjJ4KV@cluster0.hhxszoa.mongodb.net/demo'

router.delete('/', async (req, res) => {
    try {
        const username = req.query.username
        const password = req.query.password 
        const email = req.query.email
  
      const client = new MongoClient(mongoURI)
      await client.connect()
      
      const db = client.db('demo')
      const collection = db.collection('demo')
  
      const userToDelete = await collection.findOne({ Username: username })
  
      if ( userToDelete == null ) {
        client.close()
        return res.status(400).json({ error: 'User not found, try again.' })
      } 
  
      const result = await collection.deleteOne({ Username: userToDelete.Username })
      
      client.close()
  
      res.status(202).json({ message: 'Account deleted successfully' })
  
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Error deleting account' })
    }
  })

module.exports = router