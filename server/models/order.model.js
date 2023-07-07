const Order = require("../schemas/order.schema");
const Bill = require("../schemas/bill.schema");
const Shipping = require("../schemas/shipping.schema");

async function saveOrder(req, res) {
  try {
    const order = new Order({ user: req.user.id });
    const savedOrder = await order.save();

    const { nombre, ciudad, direccion, codigoPostal } = req.body;
    const newBill = new Bill({
      nombre,
      ciudad,
      direccion,
      codigoPostal,
      user: req.user.id,
    });
    const savedBill = await newBill.save();

    const { ciudadEnvio, direccionEnvio, codigoPostalEnvio } = req.body;
    const newShipping = new Shipping({
      ciudadEnvio,
      direccionEnvio,
      codigoPostalEnvio,
      user: req.user.id,
    });
    const savedShipping = await newShipping.save();

    savedOrder.bill = savedBill._id;
    savedOrder.shipping = savedShipping._id;
    await savedOrder.save();

    res.json({ order: savedOrder._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



exports.saveOrder = saveOrder;
