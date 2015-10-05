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
var message404 = {"error": "Unknow resources!"};
var message500 = {"error": "Server error!"};

router.get('/', function(req, res, next) {
	res.status(200).json({"api": "v1.0"});
});

router.post('/', function(req, res, next) {
	res.status(200).json({"api": "v1.0"});
});

router.get('/personas/:dpi', function(req, res, next) {
	var dpi = req.params.dpi;
	connection.query('SELECT * FROM personas WHERE dpi = ?', [dpi], function(err, rows, fields) {
		if (err) {			
			res.status(500).json(message500);
		} 
		//console.log('Person', rows);
	});
	res.status(200).json({"dpi": dpi});
});

router.get("/departamentos", function(req, res, next) {
	connection.query("SELECT * FROM departamento", function(err, rows, fields) {
		if (err) {			
			res.status(500).json(message500);
		}		
		res.status(200).json(rows);
	});
});

router.get("/departamentos/:id(\\d+)", function(req, res, next) {
	var id = req.params.id;
	connection.query("SELECT * FROM departamento WHERE id_departamento = ?", id,function(err, rows, fields) {
		if (err) {			
			res.status(500).json(message500);
		}
		if (rows.length) {
			res.status(200).json(rows[0]);	
		} else {
			res.status(404).json(message404);
		}		
	});
});

router.post("/personas/", function(req, res) {
	var requiredParameters = ["dpi", "nombre", "primer_apellido", "genero", "nacimiento", "id_municipio", "direccion"];
	for (var i = 0; i < requiredParameters.length; i++) {
		if (!req.body[requiredParameters[i]]){
			res.status(400).json({"error": "Missing parameter: " + requiredParameters[i]});		
		}
	}
	if (!req.body.nacimieno.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)) {
		res.status(400).json({"error": "Fecha de nacimiento debe tener el formato: DD/MM/YYYY"});
	}
	req.body.genero = req.body.genero.toLowerCase();
	if (!["f", "m"].indexOf(req.body.genero)) {
		res.status(400).json({"error": "Por el momento solo es posible: 'f' o 'm' para el genero, elija usted."});
	}
	
	var validColumns = ["segundo_nombre", "tercer_nombre", "segundo_apellido", "id_pais"];	
	console.log(req.body["id"]);
	res.status(404).json(message404);
});

router.get('*', function(req, res){
	res.status(404).json(message404);
});
module.exports = router;