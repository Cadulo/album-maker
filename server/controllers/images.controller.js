const express = require('express')
const router = express.Router()
const imageModel = require('../models/image.model.js')

router.post("/saveImage" , imageModel.saveImage)

router.get("/getImages", imageModel.getImages)

module.exports = router;