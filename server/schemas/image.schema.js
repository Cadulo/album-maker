const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    imageData: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Image = new mongoose.model("Image", imageSchema); //Creo el modelo Users , definido por la coleccion user y el esquema users
//Mongo crea la coleccion users basado en el objeto imageSchema como plantilla de los datos

module.exports = Image;
