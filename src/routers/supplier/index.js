const express = require("express");
const router = express.Router();
const { User } = require("../../schemas");

router.get("/supplier-list/:skip/:limit", (req, res, next) => {
  const { skip, limit } = req.params;
  User.find({})
    .skip(parseInt(skip))
    .limit(parseInt(limit))
    .then((snap) => res.send(snap))
    .catch(next);
});

router.get("/supplier-detail/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((snap) => res.send(snap))
    .catch(next);
});

const supplierRouters = router;

module.exports = supplierRouters;
