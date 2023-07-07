const Order = require("../schemas/order.schema");
const Bill = require("../schemas/bill.schema");
const Shipping = require("../schemas/shipping.schema");

async function saveOrder(req, res) {
  try {
    const order = new Order({ user: req.user.id });
    const savedOrder = await order.save();
    res.json({ order: savedOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function saveBill(req, res) {
  try {
    const { nombre, ciudad, direccion, codigoPostal } = req.body;
    newBill = new Bill({
      nombre,
      ciudad,
      direccion,
      codigoPostal,
    });

    savedBill = await newBill.save();
    res.json({ bill: savedBill });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function saveShipping(req, res) {
  try {
    const { ciudadEnvio, direccionEnvio, codigoPostalEnvio } = req.body;
    newShipping = new Shipping({
      ciudadEnvio, direccionEnvio, codigoPostalEnvio
    });

    savedShipping = await newShipping.save();
    res.json({ shipping: savedShipping });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.saveOrder = saveOrder;
exports.saveBill = saveBill;
exports.saveShipping = saveShipping;
