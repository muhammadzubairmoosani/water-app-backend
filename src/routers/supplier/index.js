const express = require("express");
const router = express.Router();
const { User } = require("../../schemas");

router.get("/suppliers/:skip/:limit", (req, res, next) => {
  const { skip, limit } = req.params;
  User.find({})
    .skip(parseInt(skip))
    .limit(parseInt(limit))
    .then(data => res.send(data))
    .catch(next);
});

router.get("/supplier-detail/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then(data => res.send(data))
    .catch(next);
});

router.get("/suppliers/:searchKey", (req, res, next) => {
  User.find({ username: req.params.searchKey })
    .then(data => res.send(data))
    .catch(next);
});

router.get("/search", (req, res, next) => {
  User.find({ username: new RegExp(req.query.key, "i") })
    .then(data => res.send(data))
    .catch(next)
});

const supplierRouters = router;

module.exports = supplierRouters;
