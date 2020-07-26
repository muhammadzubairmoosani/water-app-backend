const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buyer = new Schema({
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

const buyerSchema = mongoose.model("buyers", buyer);

module.exports = { buyerSchema };
