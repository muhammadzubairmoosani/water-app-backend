const express = require("express");
const router = express.Router();
const { supplierSchema } = require("../../schemas");

router.get("/supplier-list", (req, res, next) => {
  supplierSchema
    .find({})
    .then((snap) => res.send(snap))
    .catch(next);
});

const SupplierListRouters = router;

module.exports = SupplierListRouters;
