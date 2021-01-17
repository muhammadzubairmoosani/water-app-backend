const express = require("express");
const app = express();
// const port = process.env.REACT_APP_PORT || 4000;
const mongodb = require("./src/config/config");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const server = require("https").createServer();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.REACT_APP_ORIGIN,
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

// server.listen(process.env.REACT_APP_SERVER_HOST, () => {
//   console.log(`server is listing on host ${process.env.REACT_APP_SERVER_HOST}`);
// });
const options = {
  host: "pani-vala-server.herokuapp.com",
  port: 4000,
};

server.listen(options, () => {
  console.log(`server is listing on port ${port}`);
});

mongodb.connection.once("open", () => console.log("database is connected!"));
