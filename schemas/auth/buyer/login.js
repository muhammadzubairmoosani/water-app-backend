const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginBuyer = new Schema({
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const loginBuyerSchema = mongoose.model("buyers", loginBuyer);

module.exports = loginBuyerSchema;
