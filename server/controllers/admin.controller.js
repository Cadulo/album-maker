const express = require("express");
const router = express.Router();
const { authRequired } = require("../middlewares/validateToken.js");
const adminModel = require("../models/admin.model.js");

router.get("/getOrderAdmin", authRequired, adminModel.getOrdersAdmin)


module.exports = router;
