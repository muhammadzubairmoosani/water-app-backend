const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supplier = new Schema({
  time_stemp: {
    type: Number,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile1: {
    type: String,
    required: true,
  },
  mobile2: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  company_address: {
    type: String,
    required: true,
  },
  services: {
    type: Array,
    required: true,
  },
  images: {
    type: Array,
  },
});

const supplierSchema = mongoose.model("suppliers", supplier);

module.exports = supplierSchema;
