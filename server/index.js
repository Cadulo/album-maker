//Arranca servidor


// ------------------------------------------------------------------------
//                  Llamada de Modelos
// ------------------------------------------------------------------------
const DB = require('./db.js');
const app = require('./app.js')

app.listen(5000)
console.log("Server on port ", 5000)



