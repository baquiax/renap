var express = require('express');
var request = require('request');
var session = require('express-session');
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

router.get('/receive-code', function(req, res, next) {  
  request.post(
    "http://localhost/oauth/token",
    { 
      form: { 
        "code": req.body.code      
      } 
    },
    function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
    }
  }
);
});

module.exports = router;