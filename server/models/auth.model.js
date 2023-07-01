const User = require("../schemas/users.js")
const bcrypt = require('bcryptjs') //Modulo para encriptar password

const { createAccessToken } = require("../middlewares/jwt.js")

async function register(req, res) {
    const { username, email, password } = req.body
    try {
        const userFound = await User.findOne({email});
        if (userFound) return res.status(400).json(["The email alredy exists"])
        const passwordHash = await bcrypt.hash(password, 10) //Encripta el password, ejecuta el algoritmo 10 veces

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        }) //Crea el usuario
        const userSaved = await newUser.save() //Guarda el usuario en la db
        const token = await createAccessToken({ id: userSaved._id })

        res.cookie('token', token) //Guarda el token en una cookie y luego responde al front
        res.json(
            {
                id: userSaved._id,
                username: userSaved.username,
                email: userSaved.email,
                createdAt: userSaved.createdAt,
                updatedAt: userSaved.updatedAt
            }
        )
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function login(req, res) {
    const {  email, password } = req.body
    try {
        const userFound = await User.findOne({email})
        if (!userFound) return res.status(400).json({ message:"User not found"});

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message:"Incorrect password"});

        const token = await createAccessToken({ id: userFound._id })

        res.cookie('token', token) //Guarda el token en una cookie y luego responde al front
        res.json(
            {
                id: userFound._id,
                username: userFound.username,
                email: userFound.email,
                password:userFound.password,
                createdAt: userFound.createdAt,
                updatedAt: userFound.updatedAt
            } //no es necesario enviar al front el password, pero lo envio para que se vea la encriptacion
        )
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

function logout(req,res) {
    res.cookie('token',"",{
        expires: new Date(0)
    }) // La cookie va tener un valor vacio, expira en cero
    return  res.sendStatus(200)
}

async function profile(req,res){

   const userFound = await  User.findById(req.user.id) //Busca coincidencias por le id

   if (!userFound) return res.status(400).json({ message: "User not found"})
    res.json({id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        password:userFound.password,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt})
}

exports.login = login;
exports.register = register;
exports.logout =logout;
exports.profile = profile;