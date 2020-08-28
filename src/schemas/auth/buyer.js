const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buyer = new Schema({
  time_stemp: {
    type: Number,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
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
  firebaseUid: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const buyerSchema = mongoose.model("buyers", buyer);

module.exports = buyerSchema;
