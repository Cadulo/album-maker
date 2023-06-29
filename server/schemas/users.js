const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    username: {
        type: String,
        required: true,
        trim: true //Elimina espacios 
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});

const Users = new mongoose.model('user', userSchema); //Creo el modelo Users , definido por la coleccion user y el esquema users
//Mongo crea la coleccion users basado en el objeto userSchema como plantilla de los datos

module.exports = Users;

