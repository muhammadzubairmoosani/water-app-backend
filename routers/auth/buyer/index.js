const express = require("express");
const router = express.Router();
const { signUpBuyerSchema } = require("../../../schemas/index");

router.post("/buyer-register", (req, res, next) => {
  signUpBuyerSchema
    .create(req.body)
    .then((snap) => res.send(snap))
    .catch(next);
});

router.get("/buyer-login", (req, res, next) => {
  buyerLoginSchema
    .create(req.body)
    .then((snap) => res.send(snap))
    .catch(next);
});

const signUpBuyerRouters = router;

module.exports = signUpBuyerRouters;
