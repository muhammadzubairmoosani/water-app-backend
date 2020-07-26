const express = require("express");
const router = express.Router();

router.use("/", require("./contactUs/index"));
router.use("/", require("./auth/buyer/index"));
router.use("/", require("./auth/supplier/index"));

module.exports = router;
