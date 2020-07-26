const express = require("express");
const router = express.Router();
// const mongoose = require("../../../config/config")
// const mongoose = require("mongoose");
const { buyerSchema } = require("../../../schemas/index");

router.get("/buyer-login/:id", (req, res, next) => {
  console.log("req", req.body);
  buyerSchema
    .findOne({ mobile: req.params.id })
    .then((snap) => res.send(snap))
    .catch(next);
});

router.post("/buyer-register", (req, res, next) => {
  buyerSchema
    .create(req.body)
    .then((snap) => res.send(snap))
    .catch(next);
});

const buyerRouters = router;

module.exports = buyerRouters;
