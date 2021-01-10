const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../schemas");

const SignupStrategy = new LocalStrategy((mobile, password, done) => {
  console.log("===== ", mobile, password);

  User.findOne({ mobile: mobile }, (error, user) => {
    if (error) {
      return done(error.message);
    }

    if (user) {
      return done("user already axists");
    }

    if (!user) {
      return User.create({ mobile, password })
        .then((user) => done(null, user))
        .catch((err) => done(err.message, null));
    }
  });
});

module.exports = SignupStrategy;
