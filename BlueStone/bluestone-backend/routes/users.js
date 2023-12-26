var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/register',userController.postUserRegister);

router.post('/login',userController.postUserLogin);

router.post('/froget',userController.forgetPassword);

router.post('/orderadd',userController.OrderUser);

module.exports = router;
