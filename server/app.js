//App configura servidor
// ------------------------------------------------------------------------
//                  Importacion de dependencias
// ------------------------------------------------------------------------
const express = require('express');
const morgan = require('morgan'); //Permite ver peticiones que llegan al back
const authController = require('./controllers/auth.controller')

const app = express();
app.use(morgan('dev')); //Muestra mensaje corto por consola
app.use(express.json()) //Permite leer en formato json
app.use('/', authController);

module.exports=app;