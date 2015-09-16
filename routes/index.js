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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

module.exports = router;
