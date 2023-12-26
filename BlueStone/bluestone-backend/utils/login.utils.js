let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');




const encryptPassword = async (password) => {
  const hashPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  });
  return hashPassword
}

const generateJwt = async (id, obj = {}) => {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  return jwt.sign({
    _id: id,
    exp: parseInt(expiry.getTime()),
    ...obj,
  }, "SECRET");
}

const comparePasswords = async (password, hash) => {
  const result = await bcrypt.compareSync(password, hash);
  return result;
}

module.exports = { encryptPassword, comparePasswords, generateJwt};
