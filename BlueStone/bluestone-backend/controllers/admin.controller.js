const adminModel = require("../models/admin.models");
const loginUtils = require("../utils/login.utils");
const productsModel = require("../models/product.models");

//POST Request function for login
async function postAdminRegister(req, res) {
  try {
    const userEmailCheck = await adminModel
      .findOne({ email: new RegExp(`^${req.body.email}$`, "i") })
      .exec();
    if (userEmailCheck)
      return res.status(400).send({ message: "Email Already Registered" });

    req.body.password = await loginUtils.encryptPassword(req.body.password);
    console.log(req.body.password);

    let user = await new adminModel(req.body).save();
    res.status(200).json({
      message: "User Register Successfully",
      data: user,
      success: true,
    });

    //   await nodemail('contact@jiorooms.com', req.body.email, 'Registration Successfull', "You have been successfully registered")
    //   res.json({ message: 'Admin Registered', success: true });
  } catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else res.json({ message: "Error", data: err, success: false });
  }
}

async function postAdminLogin(req, res) {
  try {
    const user = await adminModel
      .findOne({
        email: new RegExp(`^${req.body.email}$`, "i"),
      })
      .exec();

    if (!user) return res.status(401).json({ message: "Invalid Email" });

    const checkPassword = await loginUtils.comparePasswords(
      req.body.password,
      user.password
    );

    if (!checkPassword)
      return res.status(401).send({ message: "Invalid Password" });
    const token = await loginUtils.generateJwt(adminModel._id);

    // res.status(200).json({ message: 'Logged In', data: token, success: true });
    res
      .status(200)
      .send({ data: token, message: "logged in successfully, Welcome Admin" });
  } catch (err) {
    console.error(err);
    if (err.message) res.status(500).send({ message: "Internal Server Error" });
    else res.json({ message: "Error", data: err, success: false });
  }
}

//POST Request function for adding updating and removing products

async function postAddProduct(req, res) {
  try {
    const productIdCheck = await productsModel.findOne({
      proid: req.body.productId,
    }).exec();

    const productNameCheck = await productsModel.findOne({
      proname: req.body.productName,
    }).exec();
    if (productIdCheck)
      return res.status(401).json({ message: "Product already exist" });
    else if (productNameCheck)
      return res.status(401).json({ message: "Product already exist" });

    let product = await new productsModel(req.body).save();
    res
      .status(200)
      .json({
        message: "Product added Successfully",
        data: product,
        success: true,
      });
  } catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else res.json({ message: "Error", data: err, success: false });
  }
}

async function postUpdateProduct(req, res) {
  try {
    const productIdCheck =
      await productsModel.findOne({ productId: req.body.productId }).exec();

    if (!productIdCheck)
      return res.status(401).json({ message: "No product" });


    else if (productIdCheck) {
      const productUpdate =
        await productsModel.findByIdAndUpdate(
          { _id: productIdCheck._id }, {
          $set:
          {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productDetails: req.body.productDetails
          }
        }, { new: true });
      res.json({ message: "product Successfully Updated", data: productUpdate, success: true });

    }
  }
  catch (err) {
    res.json({ message: err.message, success: false })

  }

}

async function postDeleteProduct(req, res) {
  try {
    const productIdCheck =
      await productsModel.findOne({ productId: req.body.productId }).exec();

    if (!productIdCheck)
      throw new Error('No product');


    else if (productIdCheck) {
      const productDelete =
        await productsModel.findByIdAndDelete(
          { _id: productIdCheck._id });
      res.json({ message: "product Successfully deleted", data: productDelete, success: true });

    }
  }
  catch (err) {
    res.json({ message: err.message, success: false })

  }
}


module.exports = {
  postAdminRegister,
  postAdminLogin,
  postAddProduct,
  postUpdateProduct,
  postDeleteProduct,
};
