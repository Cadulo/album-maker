const mongoose = require("mongoose");


const billSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true, //Elimina espacios
    },
    direccion: {
      type: String,
      required: true,
    },
    ciudad: {
      type: String,
      required: true,
    },
    codigoPostal: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //add date of creation
  }
);





const Bill = new mongoose.model("Bill", billSchema);


module.exports = Bill
