var express = require('express');
var router = express.Router();

let dataController = require('../controllers/data.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/data/allProucts', dataController.getAllProducts)

router.get('/api/data/allProucts/Men',dataController.getProductsByCategoryMen)

router.get('/api/data/allProucts/Women',dataController.getProductsByCategoryWomen)

router.get('/api/data/allProucts/Child',dataController.getProductsByCategoryChild)

module.exports = router;
