const Order = require("../schemas/order.schema");
const Bill = require("../schemas/bill.schema");
const Shipping = require("../schemas/shipping.schema");
const User = require("../schemas/users.schema.js")

async function getOrdersAdmin(req, res) {
    try {
      const order = await Order.find()
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async function updateOrder(req, res) {
    try {
      const { status, courier } = req.body;
      const orderId = req.params.orderId;
  
      const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        {
          status: status || "Procesando",
          courier: courier || "Sin asignar"
        },
        { new: true }
      );
  
      res.json(updatedOrder);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  


  exports.getOrdersAdmin = getOrdersAdmin
  exports.updateOrder = updateOrder