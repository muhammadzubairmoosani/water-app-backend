const express = require("express");
const router = express.Router();
const { signUpSupplierSchema } = require("../../../schemas/index");

router.post("/supplier-register", (req, res, next) => {
    signUpSupplierSchema
    .create(req.body)
    .then((snap) => res.send(snap))
    .catch(next);
});

const signUpSupplierRouters = router;

module.exports = signUpSupplierRouters;
