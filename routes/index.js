var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { 
    title: 'Home'
  });
});

/* GET product page. */
router.get('/product', function(req, res, next) {
  res.render('pages/product', { 
    title: 'Product'
  });
});

router.get('/site_map', function(req, res, next) {
  res.render('pages/site_map', { 
    title: 'Site Map'
  });
});

module.exports = router;
