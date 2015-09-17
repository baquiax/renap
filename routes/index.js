var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host		:"localhost",
	user		:"baquiax",
	password	:"admin"
});

connection.connect(function(err) {
	if (err) {
		console.err("Ups! Error al conectar" + err.stack);
		return;	
	}
	console.log("Yeah! Nos hemos conectado a MySQL!" + connection.threadId);
});

/* GET login page. */
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
