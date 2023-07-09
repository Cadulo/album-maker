const express = require("express");
const router = express.Router();
const { authRequired } = require("../middlewares/validateToken.js");
const orderModel = require("../models/order.model.js");

router.post("/saveOrder", authRequired, orderModel.saveOrder);

router.get("/getOrder", authRequired, orderModel.getOrders);

router.get("/getBill/:id", authRequired, orderModel.getBill)

router.get("/getShipping/:id", authRequired, orderModel.getShipping)


module.exports = router;
