const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const mongodb = require("./src/config/config");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
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

app.listen(port, () => console.log(`server is listing on port ${port}`));
mongodb.connection.once("open", () => console.log("database is connected!"));
