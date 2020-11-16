const express = require("express");
const router = express.Router();
const { supplierSchema } = require("../../schemas");
const jwt = require("jsonwebtoken");

router.get("/supplier-login/:id", (req, res, next) => {
  supplierSchema
    .findOne({ mobile: req.params.id })
    .then((user) => {
      if (!user) {
        res.send({ message: "Incorrect number or password." });
      }
      const options = {
        expiresIn: "1y",
        userId: user._id,
        role: "supplier",
      };
      const token = jwt.sign(
        options,
        "process.env.REACT_APP_ACCESS_TOKEN_SECRET"
      );
      res.send({
        message: "Login successfully...!",
        user,
        access_token: token,
        refresh_token: "process.env.REACT_APP_REFRESH_TOKEN_SECRET",
      });
    })
    .catch(next);
});

router.post("/supplier-register", (req, res, next) => {
  supplierSchema
    .create(req.body)
    .then(() => res.send("Registered successfully. please login...!"))
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
