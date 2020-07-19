const express = require("express");
const router = express.Router();
// const mongoose = require("../../../config/config")
const mongoose = require("mongoose")
const {
  loginBuyerSchema,
  registerBuyerSchema,
} = require("../../../schemas/index");

router.get("/buyer-login", (req, res, next) => {
  console.log("req",req.body)
  registerBuyerSchema.find({mobile: req.body.mobile})
  .then(data => console.log(data))
  .catch(err => console.log(err))

  // .then((snap) => res.send(snap))
  // .catch(next);
});

router.post("/buyer-register", (req, res, next) => {
  registerBuyerSchema
    .create(req.body)
    .then((snap) => res.send(snap))
    .catch(next);
});

const signUpBuyerRouters = router;

module.exports = signUpBuyerRouters;
