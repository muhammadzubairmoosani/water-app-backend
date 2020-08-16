const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactUs = new Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const contactUsSchema = mongoose.model("contact-us", contactUs);

module.exports = contactUsSchema;
