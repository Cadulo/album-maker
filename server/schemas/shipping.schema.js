const mongoose = require("mongoose");

const shippingSchema = new mongoose.Schema(
  {
    direccionEnvio: {
      type: String,
      required: true,
    },
    ciudadEnvio: {
      type: String,
      required: true,
    },
    codigoPostalEnvio: {
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