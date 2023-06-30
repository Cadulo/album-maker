const express = require('express')
const router = express.Router()
const authModel = require('../models/auth.model.js')

router.post('/register',authModel.register);

router.post('/login',authModel.login);

router.post('/logout',authModel.logout)

module.exports=router;