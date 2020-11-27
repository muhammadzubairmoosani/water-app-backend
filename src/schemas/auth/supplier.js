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
  firebase_uid: {
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
  name: {
    type: String,
  },
  company_name: {
    type: String,
  },
  address: {
    type: String,
  },
  area_of_working: {
    type: Array,
  },
  services: {
    type: Array,
  },
  description: {
    type: String,
  },
  images: {
    type: Array,
  },
});

const supplierSchema = mongoose.model("suppliers", supplier);

module.exports = supplierSchema;
