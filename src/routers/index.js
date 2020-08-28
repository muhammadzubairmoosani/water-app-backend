const express = require("express");
const router = express.Router();

router.use("/", require("./contactUs"));
router.use("/", require("./auth"));
router.use("/", require("./supplier"));

module.exports = router;
