var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let users = new Schema({
    name: String,
    email: String,
    password: String,
    contactNo: Number,
    address:String
});

module.exports = mongoose.model('User', users);
