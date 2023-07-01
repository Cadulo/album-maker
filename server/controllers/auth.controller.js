const express = require('express')
const router = express.Router()
const authModel = require('../models/auth.model.js')
const { authRequired } = require('../middlewares/validateToken.js')
const { validateSchema } = require('../middlewares/validator.middleware.js')
const { registerSchema, loginSchema } = require('../schemas/auth.schema.js')

router.post('/register', validateSchema(registerSchema), authModel.register);
// Antes de registrarse o logearse valido los datos usando zod, envio el esquema requerido y valido mediante la funcion importada
router.post('/login', authModel.login);

router.post('/logout', authModel.logout);

router.get('/profile', authRequired, authModel.profile)

module.exports = router;