var express = require('express');
var router = express.Router();

/***********************
 *#####################*
 *###WEB APPLICATION###*
 *#####################*
 ***********************/
router.get('/', function(req, res, next) {
  res.render('login');
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});

/* GET register person. */
router.get('/register-person', function(req, res, next) {
  res.render('register-person');
});

module.exports = router;
