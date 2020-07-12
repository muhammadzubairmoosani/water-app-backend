const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signUpBuyer = new Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const signUpBuyerSchema = mongoose.model("buyers", signUpBuyer);

module.exports = signUpBuyerSchema;
