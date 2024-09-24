const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const indexRouter = express.Router()

const config = {
  baseUrl: '/'
}

const baseDir = path.dirname(path.dirname(__dirname))

// Serve static assets
app.use('/dist', express.static(path.join(baseDir, 'static/dist')))

indexRouter.get('/', (req, res) => {
  res.sendFile(path.join(baseDir, 'static/dist/index.html'))
})

indexRouter.get('*', (req, res) => {
  res.sendFile(path.join(baseDir, 'static/dist/index.html'))
})

app.use('/', indexRouter)

app.use(config.baseUrl, indexRouter)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
