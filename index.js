const express = require("express");
const app = express();
const mongodb = require("./src/config/config");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const port = process.env.PORT || 4000;
// const port = 4000;

app.use(express.json());

// console.log(process.env.PORT)

app.use(cors({
  credentials: true,
  origin: 'https://www.panivala.com/'
}))

// app.use(cors({
//   credentials: true,
//   origin: 'https://pani-wala-f7ad8.web.app/'
// }))

// console.log("host", allowedOrigins);
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:3000/', process.env.ORIGIN]

// app.use(
//   cors({
//     credentials: true,
//     origin: 'http://localhost:3000'
//   })
// )

// app.use(
//   cors({
//     credentials: true,
//     origin: (origin, callback) => {
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

app.set('trust proxy', 1) // trust first proxy

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    name: "session",
    // secureProxy: true,
    keys: [
      process.env.ACCESS_TOKEN_SECRET,
      process.env.REFRESH_TOKEN_SECRET
    ]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// app.get("/simple-cors", (req, res) => {
//   console.info("GET /simple-cors");
//   res.json({
//     text: "Simple CORS requests are working. [GET]"
//   });
// });

app.use("/", require("./src/routers"));

app.listen(port, () =>
  console.log(`server is listing on ${port}`)
);

mongodb.connection.once("open", () => console.log("database is connected!"));