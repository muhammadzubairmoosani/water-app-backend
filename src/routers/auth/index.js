const express = require("express");
const router = express.Router();
const { supplierSchema } = require("../../schemas");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.get("/supplier-login", (req, res, next) => {
  const { mobile, password } = req.query;
  supplierSchema
    .findOne({ mobile: mobile })
    .then((user) => {
      if (user === null) {
        res
          .status(404)
          .send({ message: "Incorrect mobile or password, Please try again." });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          const { role } = user;
          var access_token = jwt.sign(
            { role: role },
            process.env.REACT_APP_ACCESS_TOKEN_SECRET
          );
          res.json({ access_token: access_token, user: user }).send();
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
