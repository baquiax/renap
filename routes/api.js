var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host		:"192.168.43.209",
	user		:"baquiax",
	password	:"admin",
	database	:"renap"
});

connection.connect(function(err) {
	if (err) {
		console.log("Ups! Error al conectar" + err.stack);
		return;	
	}
	console.log("Yeah! Nos hemos conectado a MySQL! >> " + connection.threadId);
});


/******************
 * API DEFINITION *
 ******************/
router.get('/', function(req, res, next) {
	res.status(200).json({"api": "v1.0"});
});

router.post('/', function(req, res, next) {
	res.status(200).json({"api": "v1.0"});
});

router.get('/personas/:dpi', function(req, res, next) {
	var dpi = req.params.dpi;
	connection.query('SELECT * FROM persona WHERE dpi = ?', [dpi], function(err, rows, fields) {
		if (err) throw err; 
		console.log('Person', rows);
	});
	res.status(200).json({"dpi": dpi});
});

router.get('*', function(req, res){
	res.status(404).json({"error": "Unknow resources!"});
});
module.exports = router;