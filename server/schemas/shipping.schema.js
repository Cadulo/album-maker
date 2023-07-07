const mongoose = require("mongoose");

const shippingSchema = new mongoose.Schema(
  {
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


const Shipping = new mongoose.model("Shipping", shippingSchema);

module.exports = Shipping 