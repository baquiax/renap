var express = require('express');
var request = require('request');
var session = require('express-session');
var router = express.Router();
var proxyIP = "192.168.0.101:8080";
var oauthIP = "192.168.0.104";
var oauthClientId = "baquiax";
var oauthClientSecret = "testpass";

/***************************
 *#########################*
 *###  WEB APPLICATION  ###*
 *#########################*
 ***************************/
 
router.get('/', function(req, res, next) {
  if (!req.session.token) {
    res.render('login', {"layout": "login.handlebars", "oauthIP": oauthIP, "oauthClientId": oauthClientId});  
  } else {
    res.render('home');     
  }   
});

router.get('/home', function(req, res, next) {
  if (!req.session.token) {
    res.redirect("/");  
  } else {           
    res.render('home');
  }
});

router.get('/inscribir-persona', function(req, res, next) {
  if (!req.session.token) {
    res.redirect("/");  
  } else {
    var token = req.session.token;    
    request.get("/api/departamentos?access_token=" + token.access_token, {"baseUrl": "http://" + req.headers.host}, function(error, response, body){
        res.render('register-person', {"deptos": body, "token": token.access_token});  
    });         
  }     
});

router.post('/inscribir-persona', function(req, res, next) {
  if (!req.session.token) {
    res.redirect("/");  
  } else {
    request.post(
    "http://" + oauthIP + "/api/personas",
    { 
      form: req.body,
      "json": true
    }, function (error, response, body) {                
      if (!error && response.statusCode == 200) {          
          res.status(200).json(req.body);      
      } else {
          res.status(200).json(response );
      }
    });    
  }
});

router.get('/buscar-persona', function(req, res, next) {
  if (!req.session.token) {
    res.redirect("/");  
  } else {
    res.render('search-people');
  }
});

router.post('/buscar-persona', function(req, res, next) {
  if (!req.session.token) {
    res.redirect("/");  
  } else {
    res.render('search-people');   
  } 
});

router.get('/logout', function(req, res, next) {
  req.session.token = false;  
  res.redirect("/");
});

router.get('/receive-code', function(req, res, next) {  
  request.post(
    "http://" + oauthIP + "/oauth/token",
    { 
      form: {
        "code": req.query.code,
        "client_id": oauthClientId,
        "client_secret": oauthClientSecret,
        "grant_type": "authorization_code"
      },
      "json": true 
    }, function (error, response, body) {      
      if (!error && response.statusCode == 200) {        
        req.session.token = body;
        res.send("<script type='text/javascript'>opener.location.reload(); window.close();</script>");      
      } else {
        res.status(200).json(body);
      }
    });
});

module.exports = router;