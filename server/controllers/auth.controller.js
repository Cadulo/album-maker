const express = require('express')
const router = express.Router()
const authModel = require('../models/auth.model.js')
const {authRequired} = require('../middlewares/validateToken.js')

router.post('/register',authModel.register);

router.post('/login',authModel.login);

router.post('/logout',authModel.logout);

router.get('/profile', authRequired, authModel.profile)

module.exports=router;