const mongoose = require('mongoose');

const users = mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    password: String
});

const Users = new mongoose.model('user', users); //Creo el modelo Users , definido por la coleccion user y el esquema users

module.exports = Users;

//se acabo :c