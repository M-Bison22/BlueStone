var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let admin = new Schema({
  name: String,
  email: String,
  password: String,
  contactNo: Number,
  address: String,
});

module.exports = mongoose.model("Admin", admin);
