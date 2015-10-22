var express = require('express');
var router = express.Router();

/***************************
 *#########################*
 *###  WEB APPLICATION  ###*
 *#########################*
 ***************************/
 
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/inscribir-persona', function(req, res, next) {
  res.render('register-person');
});

router.get('/buscar-persona', function(req, res, next) {
  res.render('search-people');
});

module.exports = router;