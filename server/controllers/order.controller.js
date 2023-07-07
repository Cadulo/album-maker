const express = require("express");
const router = express.Router();
const { authRequired } = require("../middlewares/validateToken.js");
const orderModel = require("../models/order.model.js");

router.post("/saveOrder", authRequired, orderModel.saveOrder);
router.post("/saveBill", authRequired, orderModel.saveBill);
router.post("/saveShipping", authRequired, orderModel.saveShipping);

module.exports = router;
