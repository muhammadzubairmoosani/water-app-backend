const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../schemas");
const bcrypt = require("bcrypt");

const SignupStrategy = new LocalStrategy(
  { usernameField: "mobile", passReqToCallback: true },

  (req, username, password, done) => {
    User.findOne({ mobile: username }, (error, user) => {
      if (error) {
        return done(error.message);
      }

      if (user) {
        return done("User already axists");
      }

      if (!user) {
        return User.create({
          mobile: username,
          password: bcrypt.hashSync(password, 10),
          role: "supplier",
          firebase_uid: req.body.firebase_uid,
          time_stemp: Date.now(),
        })
          .then(() => done(null, false, "Sign-up success"))
          .catch((err) => done(err.message, null));
      }
    });
  }
);

module.exports = SignupStrategy;
