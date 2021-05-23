var express = require('express')
var cors = require('cors')
const mongodb = require("./src/config/config");
var app = express()

var corsOptions = {
  origin: 'https://www.panivala.com/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// app.get('/', cors(corsOptions), function (req, res, next) {
//   res.json({ msg: 'This is CORS-enabled for only example.com.' })
// })

app.listen(process.env.REACT_APP_PORT, function () {
  console.log('CORS-enabled web server listening on port 80')
})

mongodb.connection.once("open", () => console.log("database is connected!"));





// const express = require("express");
// const app = express();
// const mongodb = require("./src/config/config");
// const cors = require("cors");
// const passport = require("passport");
// const cookieSession = require("cookie-session");

// app.use(express.json());

// app.use(
//   cors({
//     credentials: true,
//     origin: true
//   })
// );

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     name: "session",
//     keys: [
//       process.env.REACT_APP_ACCESS_TOKEN_SECRET,
//       process.env.REACT_APP_REFRESH_TOKEN_SECRET
//     ]
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use("/", require("./src/routers"));

// app.listen(process.env.REACT_APP_PORT, () =>
//   console.log(`server is listing...`)
// );

// mongodb.connection.once("open", () => console.log("database is connected!"));



// ===============================
// enable CORS without external module

// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'https://pani-vala-server.herokuapp.com/logged-in');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });


// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://pani-vala-server.herokuapp.com/logged-in");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



// app.options("*", cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(cors());
// app.options('*', cors())


// var allowedOrigins = [
//   process.env.REACT_APP_LOCAL_HOST,
//   process.env.REACT_APP_ORIGIN
// ];


// app.use(
//   cors({
//     credentials: true,
//     origin: true
//   })
// );


// app.use(
//   cors({
//     credentials: true,
//     origin: function (origin, callback) {
//       if (allowedOrigins.indexOf(origin) === -1) {
//         var msg =
//           "The CORS policy for this site does not " +
//           "allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     }
//   })
// );
