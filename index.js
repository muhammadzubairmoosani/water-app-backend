const express = require("express");
const app = express();
const mongodb = require("./src/config/config");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");

app.use(express.json());

var allowedOrigins = [
  process.env.REACT_APP_LOCAL_HOST,
  process.env.REACT_APP_ORIGIN,
];

// function getCorsOptions(req, res, next) {
//   if (allowedOrigins.indexOf(req.headers.origin) > -1) {
//     res.set("Access-Control-Allow-Credentials", "true");
//     res.set("Access-Control-Allow-Origin", req.headers.origin);
//   } else {
//     // allow other origins to make unauthenticated CORS requests
//     res.set("Access-Control-Allow-Origin", "*");
//   }
//   next();
// }

function getCorsOptions(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use((req, res, next) => {
//   // res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Origin", "https://www.panivala.com");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE, PATCH");
//     return res.status(200).json({});
//   }
//   next();
// });

// var allowedOrigins = [
//   process.env.REACT_APP_LOCAL_HOST,
//   process.env.REACT_APP_ORIGIN,
// ];

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
      process.env.REACT_APP_REFRESH_TOKEN_SECRET,
    ],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", getCorsOptions, require("./src/routers"));

app.listen(process.env.REACT_APP_PORT, () =>
  console.log(`server is listing...`)
);
mongodb.connection.once("open", () => console.log("database is connected!"));
