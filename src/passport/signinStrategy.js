const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../schemas");
const bcrypt = require("bcrypt");

const SigninStrategy = new LocalStrategy(
  { usernameField: "mobile" },
  (username, password, done) => {
    User.findOne({ mobile: username }, (error, user) => {
      if (error) {
        return done(error.message);
      }

      if (!user) {
        return done("user not found!", false);
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return done("Incorrect password", false);
      }

      return done(null, user);
    });
  }
);

module.exports = SigninStrategy;
