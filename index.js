const express = require("express");
const app = express();
const port = process.env.port || 4000;
const mongodb = require("./src/config/config");
const cors = require("cors");

mongodb.connection.once("open", () => console.log("database is connected!"));

app.use(cors());

app.use(express.json());

app.use("/", require("./src/routers"));

app.listen(port, () => console.log(`server is listing on port ${port}`));
