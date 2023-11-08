const { MongoClient } = require('mongodb')
const express = require('express')
const router = express.Router()

const mongoURI = 'mongodb+srv://client_00:T5StQOdhg2QjJ4KV@cluster0.hhxszoa.mongodb.net/demo'

router.get('/', async (req, res) => {
  try {
    const client = new MongoClient(mongoURI)
    await client.connect()

    const db = client.db('demo')
    const collection = db.collection('demo')

    const firstName = req.query.FirstName
    const lastName = req.query.LastName
    const location = req.query.Location

    const query = {
      Type: 'Worker',
    }

    if (req.query.FirstName) {
      query.FirstName = { $regex: new RegExp(req.query.FirstName, 'i') }
    }

    if (req.query.LastName) {
      query.LastName = { $regex: new RegExp(req.query.LastName, 'i') }
    }

    if (req.query.Location) {
      query.Location = { $regex: new RegExp(req.query.Location, 'i') }
    }

    const workers = await collection.find(query).toArray()

    client.close()
    res.json(workers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'error accessing mongoDB data' })
  }
})

module.exports = router