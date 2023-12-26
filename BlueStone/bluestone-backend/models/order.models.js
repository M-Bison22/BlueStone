var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var order = new Schema({
  address: String,
  city: String,
  pincode: Number,
  phone: Number,
  token:{
    type: String,
    default: ''
  }
});
module.exports = mongoose.model("Order", order);