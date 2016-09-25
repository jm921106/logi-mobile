var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/partial', function(req, res, next) {
  res.render('partial');
});

router.get('/leftPanel', function(req, res, next) {
  res.render('include/leftPanel');
});

router.get('/footer', function(req, res, next) {
  res.render('include/footer');
});

router.get('/logicong', function(req, res, next) {
  res.render('logicong');
});

router.get('/swEdu', function(req, res, next) {
  res.render('swEdu');
});

router.get('/blog', function(req, res, next) {
  res.render('blog');
});

router.get('/notice', function(req, res, next) {
  res.render('notice');
});

router.get('/counsel', function(req, res, next) {
  res.render('counsel');
});

module.exports = router;
