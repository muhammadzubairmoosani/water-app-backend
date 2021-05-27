const express = require("express");
const router = express.Router();
const passport = require("../../passport");

// router.options('/logged-in', function (req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader('Access-Control-Allow-Methods', '*');
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.end();
// });

router.get("/logged-in", (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");



    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  
  if (req.user) return res.send(req.user);
  return res.send({ user: null });
});

// router.get('/logged-in', cors(corsOptions), function (req, res, next) {
//   res.json({ msg: 'This is CORS-enabled for only example.com.' })
// })

router.post("/signup", (req, res, next) => {
  passport.authenticate("local-signup", (error, data, message) => {
    if (error) {
      return res.status(500).json({
        message: error || "Internal server error",
      });
    }

    return res.json({ message });
  })(req, res, next);
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local-signin", (error, user) => {
    if (error) {
      return res.status(500).json({
        message: error || "Internel server error",
      });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({
          message: err || "Internel server error",
        });
      }

      const newUser = user.toObject();
      delete newUser.password;
      newUser.isAuthenticated = true;
      return res.json(newUser);
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.json({ message: "Sign-out scccess" });
});

const authRoutes = router;

module.exports = authRoutes;
