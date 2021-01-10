const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");
const passport = require("../../passport");

router.post("/signup", (req, res, next) => {
  passport.authenticate("local-signup", (error, user) => {
    if (error)
      return res.status(500).json({
        message: error || "Internal server error",
      });

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({
          message: err || "Internel server error",
        });
      }

      return res.json(newUser);
    });
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

      const { _id, mobile } = user;
      const newUser = {
        _id,
        mobile,
        isAuthenticated: true,
      };

      return res.json(newUser);
    });
  })(req, res, next);
});

const authRoutes = router;

module.exports = authRoutes;
