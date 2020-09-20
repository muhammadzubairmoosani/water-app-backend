const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supplier = new Schema({
  time_stemp: {
    type: Number,
    required: true,
  },
  role: {
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
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  area_of_working: {
    type: Array,
    required: true,
  },
  description: {
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
  firebase_uid: {
    type: String,
    required: true,
  },
});

const supplierSchema = mongoose.model("suppliers", supplier);

module.exports = supplierSchema;
