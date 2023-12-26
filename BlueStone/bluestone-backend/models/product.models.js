var mongoose = require("mongoose");
var Schema = mongoose.Schema;
let products = new Schema({
  productId: String,
  productName: String,
  productDetails: String,
  productImage: String,
  productCategory: String,
  productPrice: String,
});
module.exports = mongoose.model("Products", products);
