const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../schemas");

const SigninStrategy = new LocalStrategy(
  { passReqToCallback: true },
  (req, username, password, done) => {
    User.findOne({ mobile: req.body.mobile }, (error, user) => {
      if (error) {
        return done(error.message);
      }

      if (!user) {
        return done("user not found!", false);
      }

      if (user.password != password) {
        return done("Incorrect password", false);
      }

      return done(null, user);
    });
  }
);

module.exports = SigninStrategy;
