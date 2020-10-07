var express = require('express');
var router = express.Router();

/* GET Login listing. */
router.get('/login', function(req, res, next) {
  res.render('pages/manager/login', { 
    title: 'Login'
  });
});

/* GET Dashboard listing. */
router.get('/', function(req, res, next) {
  res.render('pages/manager/dashboard', { 
    title: 'Dashboard'
  });
});

router.get('/product/new', function(req, res, next) {
  res.render('pages/manager/product/new_pd', { 
    title: 'New Product'
  });
});

router.get('/product/all', function(req, res, next) {
  res.render('pages/manager/product/all_pd', { 
    title: 'All Product'
  });
});

router.get('/category', function(req, res, next) {
  res.render('pages/manager/category/all_cat', { 
    title: 'All Category'
  });
});

module.exports = router;
