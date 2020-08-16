const express = require("express");
const router = express.Router();
const { buyerSchema } = require("../../../schemas");

router.get("/buyer-login/:id", (req, res, next) => {
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
