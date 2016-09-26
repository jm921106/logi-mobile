var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/logicong', function(req, res, next) {
  res.render('logicong');
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
