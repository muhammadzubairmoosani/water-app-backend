const express = require("express");
const router = express.Router();
const { supplierSchema } = require("../../schemas");

router.get("/supplier-list/:skip/:limit", (req, res, next) => {
  const { skip, limit } = req.params;
  supplierSchema
    .find({})
    .skip(parseInt(skip))
    .limit(parseInt(limit))
    .then((snap) => res.send(snap))
    .catch(next);
});

router.get("/supplier-detail/:id", (req, res, next) => {
  supplierSchema
    .findById(req.params.id)
    .then((snap) => res.send(snap))
    .catch(next);
});

const supplierRouters = router;

module.exports = supplierRouters;
