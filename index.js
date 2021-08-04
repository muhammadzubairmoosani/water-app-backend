const express = require("express");
const app = express();
const mongodb = require("./src/config/config");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const port =  4000
app.use(express.json());


// console.log("host", allowedOrigins);

// app.use(
//   cors({
//     credentials: true,
//     origin: 'http://localhost:3000'
//   })
// )

// app.use(
//   cors({
//     credentials: true,
//     origin: function (origin, callback) {
//       // allow requests with no origin
//       // (like mobile apps or curl requests)
//       // if(!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         var msg =
//           "The CORS policy for this site does not " +
//           "allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//   })
// );


app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    name: "session",
    keys: [
      process.env.REACT_APP_ACCESS_TOKEN_SECRET,
      process.env.REACT_APP_REFRESH_TOKEN_SECRET
    ]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/simple-cors", cors(), (req, res) => {
  console.info("GET /simple-cors");
  res.json({
    text: "Simple CORS requests are working. [GET]"
  });
});

// app.use("/", require("./src/routers"));

app.listen(port, () =>
  console.log(`server is listing on ${port}`)
);

mongodb.connection.once("open", () => console.log("database is connected!"));