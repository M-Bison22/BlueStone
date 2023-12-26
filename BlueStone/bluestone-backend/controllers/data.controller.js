const productsModel = require("../models/product.models");

async function getAllProducts(req, res) {
    try {
        // Fetch all products from the database
        const products = await productsModel.find();
    
        // Send the products as a JSON response
        res.json(products);
      } catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else res.json({ message: "Error", data: err, success: false });
  }
}

async function getProductsByCategoryMen(req, res)  {
    try {
        const productMen = await productsModel.find({ productCategory: "Men" })
        res.json(productMen);
    } catch (err) {
      console.error(err);
      if (err.message)
        res.json({ message: err.message, data: err, success: false });
      else res.json({ message: "Error", data: err, success: false });
    }
  };

  async function getProductsByCategoryWomen(req, res)  {
    try {
        const productWomen = await productsModel.find({ productCategory: "Women" })
        res.json(productWomen);
    } catch (err) {
      console.error(err);
      if (err.message)
        res.json({ message: err.message, data: err, success: false });
      else res.json({ message: "Error", data: err, success: false });
    }
  };

  async function getProductsByCategoryChild(req, res)  {
    try {
        const productWomen = await productsModel.find({ productCategory: "Child" })
        res.json(productWomen);
    } catch (err) {
      console.error(err);
      if (err.message)
        res.json({ message: err.message, data: err, success: false });
      else res.json({ message: "Error", data: err, success: false });
    }
  };

module.exports = {
    getAllProducts,
    getProductsByCategoryMen,
    getProductsByCategoryWomen,
    getProductsByCategoryChild
  };
  