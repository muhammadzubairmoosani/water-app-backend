const express = require("express");
const router = express.Router();
const { supplierSchema } = require("../../schemas");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.get("/supplier-login", (req, res, next) => {
  supplierSchema
    .findOne({ mobile: req.query.mobile })
    .then((user) => {
      if (user === null) {
        res
          .status(404)
          .send({ message: "Incorrect mobile or password, Please try again." });
      } else {
        if (bcrypt.compareSync(req.query.password, user.password)) {
          res.send(user);
        } else {
          res
            .status(404)
            .send({ message: "Incorrect password, Please try again." });
        }
      }
    })
    .catch(next);
});

router.post("/supplier-register", (req, res, next) => {
  const hash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hash;
  supplierSchema
    .create(req.body)
    .then(() =>
      res.send({ message: "Registered successfully. Please login...!" })
    )
    .catch(next);
});

const authRoutes = router;

module.exports = authRoutes;
