const express = require("express");
const router = express.Router();
const { supplierSchema } = require("../../schemas");
const jwt = require("jsonwebtoken");

router.post("/buyer-register", (req, res, next) => {
  buyerSchema
    .create(req.body)
    .then((snap) => res.send(snap))
    .catch(next);
});

router.get("/supplier-login/:id", (req, res, next) => {
  supplierSchema
    .findOne({ mobile: req.params.id })
    .then((data) => {
      const token = jwt.sign(
        { mobile: req.params.id },
        process.env.REACT_APP_ACCESS_TOKEN_SECRET
      );
      res.send({ data, token });
    })
    .catch(next);
});

router.post("/supplier-register", (req, res, next) => {
  supplierSchema
    .create(req.body)
    .then((snap) => res.send(snap))
    .catch(next);
});

// function anthenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token === null) return res.sendStatus(401);

//   jwt.verify(token, process.env.REACT_APP_ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

const authRoutes = router;

module.exports = authRoutes;
