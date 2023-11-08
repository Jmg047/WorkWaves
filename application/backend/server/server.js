const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const multer = require('multer')
const mongoose = require('mongoose')

const ImageModel = require("/Users/abdarrahmanayyaz/Desktop/648demo/CSC648-demo-team03/application/backend/api/routes/image.model.js")
const config = {
  baseUrl: '/'
}

const indexRouter = express.Router()

const baseDir = path.dirname(path.dirname(__dirname)) // Removes two levels of the path

// STORAGE

const Storage = multer.diskStorage({
  destination: 'uploads',
  filename:(req,file,cb)=>{
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage:Storage
}).single('testImage')

app.post('upload',(req,res)=>{
  upload(req,res,(err)=>{
    if(err){
      console.log(err)
    }
    else{
      const newImage = new ImageModel({
        name: req.body.name,
        image:{
          data:req.file.filename,
          contentType:'image/png'
        },
      });
      newImage.save()
      .then(()=> res.send("successfully uploaded")).catch(err=> console.log(err)) 
    }
  })
})

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
