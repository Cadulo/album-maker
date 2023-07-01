
function validateSchema(schema) {
   return  (req, res, next) => {
        try {
            schema.parse(req.body)
            next()
        } catch (error) {
            //Zod crea un objeto que contiene los errores. Lo recorror y envio solo el mensaje
            console.log(error)
            return res.status(400).json(error.errors.map(error => error.message))
        }
    }

}

exports.validateSchema = validateSchema