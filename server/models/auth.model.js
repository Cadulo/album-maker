
function login(req,res){
    console.log(req.body)
    res.send('login')
}

function register(req,res){
    console.log(req.body)
    res.send('registrando')
}

exports.login = login;
exports.register = register;