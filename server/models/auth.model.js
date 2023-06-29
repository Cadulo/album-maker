const User = require("../schemas/users.js")

async function login(req, res) {
    const {  username, email, password } = req.body
   try {
    const newUser = new User ({
        username,
        email,
        password,
    }) //Crea el usuario
    await newUser.save() //Guarda el usuario en la db
    res.send("registrando")
   }
   catch (error) {
    console.log(error)
   }
}

function register(req, res) {
    res.send('registrando')
}

exports.login = login;
exports.register = register;