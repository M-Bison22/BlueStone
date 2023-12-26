var express = require('express');
var router = express.Router();
const adminController = require('../controllers/admin.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/register',adminController.postAdminRegister);

router.post('/login',adminController.postAdminLogin);

router.post('/api/addproducts', adminController.postAddProduct);

router.post('/api/updateproducts', adminController.postUpdateProduct);

router.post('/api/deleteproducts', adminController.postDeleteProduct); 

module.exports = router;
