const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../schemas");
const bcrypt = require("bcrypt");

const SignupStrategy = new LocalStrategy(
  { usernameField: "mobile" },

  (username, password, done) => {
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
        })
          .then(() => done())
          .catch((err) => done(err.message, null));
      }
    });
  }
);

module.exports = SignupStrategy;
