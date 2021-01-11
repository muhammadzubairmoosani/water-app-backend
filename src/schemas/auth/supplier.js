const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   time_stemp: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     required: true,
//   },
//   firebase_uid: {
//     type: String,
//     required: true,
//   },
//   mobile: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   mobile1: String,
//   name: String,
//   company_name: String,
//   address: String,
//   area_of_working: Array,
//   services: Array,
//   description: String,
//   images: Array,
// });

const UserSchema = new Schema({
  mobile: String,
  password: String,
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
