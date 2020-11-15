const express = require("express");
const router = express.Router();
const { supplierSchema } = require("../../schemas");
const jwt = require("jsonwebtoken");
const Cookies = require("universal-cookie");

router.get("/supplier-login/:id", (req, res, next) => {
  // console.log(req.headers.cookie)
  // console.log("Cookies: ", req.cookies);

  // const cookies = new Cookies(req.headers.cookie);

  // console.log(cookies.get('myCat'));
  console.log("== ", req.headers);
  // supplierSchema
  // .findOne({ mobile: req.params.id })
  // .then((data) => {
  //   const token = jwt.sign(
  //     { mobile: req.params.id },
  //     process.env.REACT_APP_ACCESS_TOKEN_SECRET
  //   );
  //   res.send({ data, token });
  // })
  // .catch(next);
});

router.post("/supplier-register", (req, res, next) => {
  res.cookie("key", "value").send()

  //   supplierSchema
  //     .create(req.body)
  //     .then((user) => {
  //       res
  //     .writeHead(200, {
  //       "Set-Cookie": "token=encryptedstring; HttpOnly",
  //       "Access-Control-Allow-Credentials": "true"
  //     })
  //     .send();

  //     // res.cookie("token", "Hello world").send("cookie set");
  // // res.send()
  //   })
  //     .catch(next);

  // supplierSchema
  //   .create(req.body)
  //   .then((user) => {
  //     const options = {
  //       expiresIn: "1y",
  //       audience: user._id,
  //       role: "supplier",
  //     };
  //     const token = jwt.sign(
  //       options,
  //       "process.env.REACT_APP_ACCESS_TOKEN_SECRET"
  //     );
  //     res.send({
  //       access_token: token,
  //       refresh_token: "process.env.REACT_APP_REFRESH_TOKEN_SECRET",
  //     });
  //   })
  //   .catch(next);
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
