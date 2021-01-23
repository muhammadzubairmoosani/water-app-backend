const express = require("express");
const app = express();
const mongodb = require("./src/config/config");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

var allowedOrigins = [
  process.env.REACT_APP_LOCAL_HOST,
  process.env.REACT_APP_ORIGIN,
];

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      // if(!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    name: "session",
    keys: [
      process.env.REACT_APP_ACCESS_TOKEN_SECRET,
      process.env.REACT_APP_REFRESH_TOKEN_SECRET,
    ],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./src/routers"));

app.listen(process.env.REACT_APP_PORT, () =>
  console.log(`server is listing...`)
);
mongodb.connection.once("open", () => console.log("database is connected!"));
