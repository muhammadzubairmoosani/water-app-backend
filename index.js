const express = require("express");
const app = express();
const port = process.env.port || 4000;
const mongodb = require("./config/config_db");
const cors = require("cors");

mongodb.connection.once("open", () => console.log("database is connected!"));

app.use(cors());

app.use(express.json());

app.use("/", require("./routers/index"));

app.listen(port, () => console.log(`server is listing on port ${port}`));
