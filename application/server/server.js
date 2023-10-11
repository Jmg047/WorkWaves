const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const config = {
  baseUrl: '/'
}

const indexRouter = express.Router()

const baseDir = path.dirname(path.dirname(__dirname)) // Removes two levels of the path

// Serve static assets
app.use('/dist', express.static(path.join(baseDir, 'application/static/dist')))

indexRouter.get('/', (req, res) => {
  res.sendFile(path.join(baseDir, 'application/static/dist/index.html'))
})

indexRouter.get('*', (req, res) => {
  res.sendFile(path.join(baseDir, 'application/static/dist/index.html'))
})

app.use('/', indexRouter)

app.use(config.baseUrl, indexRouter)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
