const LocalStrategy = require("passport-local").Strategy;
const User = require("../schemas");

const SigninStrategy = new LocalStrategy((mobile, password, done) => {
  console.log("mobile", mobile);
  User.findOne({ mobile: mobile }, (error, user) => {
    console.log("error", error);
    console.log("user", user);

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
});

module.exports = SigninStrategy;
