const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../schemas");

const SignupStrategy = new LocalStrategy(
  { passReqToCallback: true },
  (req, username, password, done) => {
    User.findOne({ mobile: req.body.mobile }, (error, user) => {
      if (error) {
        return done(error.message);
      }

      if (user) {
        return done("user already axists");
      }

      if (!user) {
        return User.create({ mobile: req.body.mobile, password })
          .then((user) => done(null, user))
          .catch((err) => done(err.message, null));
      }

      return done(null, user);
    });
  }
);

module.exports = SignupStrategy;
