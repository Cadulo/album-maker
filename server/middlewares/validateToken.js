const jwt = require('jsonwebtoken')

function authRequired(req,res,next){
    //Luego del login, se envia el mismo header con el token dentro al ejecutar profile
    const {token}= req.cookies; //extraigo token del cookie
    if (!token) //Verifico existencia de token
        return res.status(401).json({ message: "No token, authorization denied"})
//Comparo el token extraido mediante el secret definido, si es valido, devuelve el contenido del token
        jwt.verify(token,'secret123',(err,user) => {
            if (err) return res.status(403).json({message:"Invalid token"});

            req.user = user // Si el token es valido guardo el contenido del token en la peticion que llega
            console.log(req.user)
            next();
        })
    
};

exports.authRequired=authRequired
