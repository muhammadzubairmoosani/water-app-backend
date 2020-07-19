const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerBuyer = new Schema({
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

const registerBuyerSchema = mongoose.model("buyers", registerBuyer);

module.exports = registerBuyerSchema;
