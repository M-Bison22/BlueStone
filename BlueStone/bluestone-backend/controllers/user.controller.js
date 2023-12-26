const userModel = require("../models/user.models");
const loginUtils = require("../utils/login.utils");
var orderModel = require("../models/order.models");
const randomstring = require("randomstring");

async function postUserRegister(req, res) {
  try {
    const userEmailCheck = await userModel
      .findOne({ email: new RegExp(`^${req.body.email}$`, "i") })
      .exec();
    if (userEmailCheck)
      return res.status(400).send({ message: "Email Already Registered" });

    req.body.password = await loginUtils.encryptPassword(req.body.password);
    console.log(req.body.password);

    let user = await new userModel(req.body).save();
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

async function postUserLogin(req, res) {
  try {
    const user = await userModel
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
    const token = await loginUtils.generateJwt(userModel._id);

    // res.status(200).json({ message: 'Logged In', data: token, success: true });
    res.status(200).send({ data: token, message: "logged in successfully" });
  } catch (err) {
    console.error(err);
    if (err.message) res.status(500).send({ message: "Internal Server Error" });
    else res.json({ message: "Error", data: err, success: false });
  }
}

async function forgetPassword(req, res) {
  try {
    const userEmailCheck = await userModel
      .findOne({ email: new RegExp(`^${req.body.email}$`, "i") })
      .exec();

    if (!userEmailCheck) throw new Error("Not a user");
    else if (userEmailCheck) {
      req.body.password = await loginUtils.encryptPassword(req.body.password);
      const userEmailForUpdate = await userModel.findByIdAndUpdate(
        { _id: userEmailCheck._id },
        { $set: { password: req.body.password } },
        { new: true }
      );
      res.json({
        message: "password has been reset",
        data: userEmailForUpdate,
        success: true,
      });
    }
  } catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else res.json({ message: "Error", data: err, success: false });
  }
}

async function OrderUser(req, res) {
  try {
    // console.log(userEmailChk);
    let order = await new orderModel(req.body).save();
    res.status(200).json({
      message: "address saved sucesfully Successfully",
      data: order,
      success: true,
    }); //   await nodemail('contact@jiorooms.com', req.body.email, 'Registration Successfull', "You have been successfully registered")
    //   res.json({ message: 'User Registered', success: true });
  } catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else res.json({ message: "Error", data: err, success: false });
  }
}

module.exports = {
  postUserRegister,
  postUserLogin,
  forgetPassword,
  OrderUser,
};
