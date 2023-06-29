const express = require('express')
const router = express.Router()
const authModel = require('../models/auth.model.js')

router.post('/register',authModel.register);

router.post('/login',authModel.login);

module.exports=router;