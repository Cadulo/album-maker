const jwt = require("jsonwebtoken") //Modulo para generar token a modo de pase

function createAccessToken(payload) {
   return new Promise((resolve, reject) => {
    jwt.sign(
        payload //El dato que requiero guardar en el token (payload)
    ,
    'secret123', //Llave para crear token
    {
        expiresIn:"1d", //Expira en un dia
    },
    (err,token)=> {
        if (err) reject(err);
        resolve(token)
    }
    )

   })
}

exports.createAccessToken=createAccessToken