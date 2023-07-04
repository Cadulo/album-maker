const express = require('express')
const router = express.Router()
const imageModel = require('../models/image.model.js')
const { authRequired } = require('../middlewares/validateToken.js')

router.post("/saveImage" ,authRequired, imageModel.saveImage)

router.get("/getImages",authRequired, imageModel.getImages)

router.delete("/deleteImage/:id",authRequired, imageModel.deleteImage)

module.exports = router;