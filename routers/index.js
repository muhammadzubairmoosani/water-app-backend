const express = require("express");
const router = express.Router();

router.use("/", require("./contactUs"));
router.use("/", require("./auth/buyer"));
router.use("/", require("./auth/supplier"));
router.use("/", require("./supplierList"));

module.exports = router;
