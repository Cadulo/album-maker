const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    bill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bill",
    },
    shipping: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shipping",
    },
  },
  {
    timestamps: true,
  }
);

const Order = new mongoose.model("Order", orderSchema);

module.exports = Order
