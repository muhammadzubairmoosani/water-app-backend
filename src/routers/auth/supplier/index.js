const express = require("express");
const router = express.Router();
const { supplierSchema } = require("../../../schemas");

router.get("/supplier-login/:id", (req, res, next) => {
  supplierSchema
    .findOne({ mobile1: req.params.id })
    .then((snap) => res.send(snap))
    .catch(next);
});

router.post("/supplier-register", (req, res, next) => {
  supplierSchema
    .create(req.body)
    .then((snap) => res.send(snap))
    .catch(next);
});

const signUpSupplierRouters = router;

module.exports = signUpSupplierRouters;
