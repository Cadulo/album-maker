//App configura servidor
// ------------------------------------------------------------------------
//                  Importacion de dependencias
// ------------------------------------------------------------------------
const express = require('express');
const morgan = require('morgan'); //Permite ver peticiones que llegan al back

const cookieParser = require('cookie-parser') // Permite leer cookies
const cors = require('cors') // Permite comunicacion entre dominios

const authController = require('./controllers/auth.controller')

const app = express();
app.use(morgan('dev')); //Muestra mensaje corto por consola
app.use(express.json()) //Permite leer en formato json
app.use(cookieParser()) 
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));
app.use('/api', authController);

module.exports=app;