const passport = require("passport");
const { User } = require("../schemas");
const SignupStrategy = require("./signupStrategy");
const SigninStrategy = require("./signinStrategy");

passport.serializeUser((user, done) => {
  console.log("serializeUser", user);
  done(null, user.mobile);
});

passport.deserializeUser((mobile, done) => {
  console.log("deserializeUser", mobile);
  User.findOne({ mobile }, (err, user) => {
    done(err, user);
  });
});

passport.use("local-signup", SignupStrategy);
passport.use("local-signin", SigninStrategy);

module.exports = passport;
