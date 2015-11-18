var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var messages = require("./handlers/messages");
var personas = require("./handlers/personas");
var parentescoPersonas = require("./handlers/parentescoPersonas");
var deptosMunicipios = require("./handlers/deptosMunicipios");
var dpi = require("./handlers/dpi");
var mysqlMasterIP = "192.168.0.109";
var connection = mysql.createConnection({
	host: mysqlMasterIP,
	user: "root",
	password: "",
	database: "renap",
	acquireTimeout: 5000
});

connection.connect(function (err) {
	if (err) {
		console.log("Ups! Error al conectar" + err.stack);
		return;
	}
	console.log("Yeah! Nos hemos conectado a MySQL! >> " + connection.threadId);
});

var validateRequiredParameters = function (requiredList, listToVerify, onMissing) {
	if (!requiredList || (requiredList && !requiredList.length)) return true;
	if (typeof onMissing != "function") return false;

	for (var i = 0; i < requiredList.length; i++) {
		if (listToVerify[requiredList[i]] === undefined ||
		(listToVerify[requiredList[i]] !== undefined && listToVerify[requiredList[i]] == "")
		) {
			onMissing(requiredList[i]);
			return false;
		}
	}
	return true;
}

/******************
 * API DEFINITION *
 ******************/
 
router.get('/', function (req, res) {
	return res.status(200).json({ "api": "v1.0" });
});

router.post('/', function (req, res) {
	return res.status(200).json({ "api": "v1.0" });
});

router.get("/departamentos", function (req, res) {
	deptosMunicipios.getDeptos(connection, messages, req, res);
});

router.get("/departamentos/:id(\\d+)", function (req, res) {
	deptosMunicipios.getDepto(connection, messages, req, res);
});

router.get("/departamentos/:id(\\d+)/municipios", function (req, res) {
	deptosMunicipios.getMunicipios(connection, messages, req, res);
});

router.post("/personas/", function (req, res) {
	personas.postPersona(connection, messages, req, res, validateRequiredParameters);
});

router.get('/personas/:dpi', function (req, res) {
	personas.getPersona(connection, messages, req, res);
});

router.post("/personas/:dpi/actualizar", function (req, res, next) {
	personas.putPersona(connection, messages, req, res);
});

router.get("/personas/:dpi/familiares", function (req, res, next) {
	personas.getFamiliares(connection, messages, req, res);
});

router.get("/personas/:dpi/familiares/padres", function (req, res, next) {
	personas.getPadres(connection, messages, req, res);
});

router.get("/personas/:dpi/familiares/conyuges", function (req, res, next) {
	personas.getConyuges(connection, messages, req, res);
});

router.get("/personas/:dpi/familiares/hermanos", function (req, res, next) {
	personas.getHermanos(connection, messages, req, res);
});

router.get("/personas/:dpi/familiares/hijos", function (req, res, next) {
	personas.getHijos(connection, messages, req, res);
});

router.get("/personas/parentescos", function(req, res) {
	parentescoPersonas.getParentescos(connection, messages, req, res);
});

router.post("/personas/parentesco", function(req, res) {
	parentescoPersonas.postParentesco(connection, messages, req, res, validateRequiredParameters);
});

router.post("/personas/:dpi1/casar/:dpi2", function(req, res) {
	parentescoPersonas.postCasar(connection, messages, req, res);
});

router.post("/personas/:dpi1/padre/:dpi2", function(req, res) {
	parentescoPersonas.postCasar(connection, messages, req, res);
});

router.get("/documento/estados", function(req, res) {
	dpi.getEstados(connection, messages, req, res);
});

router.post("/documento/estados", function(req, res) {
	dpi.postEstados(connection, messages, req, res, validateRequiredParameters);
});
 
router.get("/documento/:dpi", function(req, res) {
	dpi.getDocumento(connection, messages, req, res, validateRequiredParameters);
});
 
router.post("/documento/:dpi", function(req, res) {
	dpi.putDocumento(connection, messages, req, res, validateRequiredParameters);
});

router.post("/documento", function(req, res) {
	dpi.postDocumento(connection, messages, req, res, validateRequiredParameters);
});

router.get("/personas/:dpi/familiar/:tipo_p(\\d+)", function(req, res){
	parentescoPersonas.getFamiliares(connection, messages, req, res);
});

router.post("/personas/:dpi/parentesco", function(req, res) {	
	parentescoPersonas.postParentesco(connection, messages, req, res, validateRequiredParameters);
});

//TODO- CREAR USUARIO
router.post("/admin/users", function(req,res){
	//VALIDATE 
	
});
//TODO- OBTENER USUARIO

router.get("/status", function(req,res){
	if (! connection) {
		console.log("Reiniciar");
	}
	
	connection.query("SELECT 1 FROM dual", function (err, rows, fields) {
		var val = true;
		if (err) {
			val = false;
			connection = mysql.createConnection({
				host: mysqlMasterIP,
				user: "root",
				password: "",
				database: "renap",
				acquireTimeout: 5000
			});
		}
		res.status(200).json({
			"readyForRequest": val,
			"isMaster": true
		});
	});	
});

router.get('*', function (req, res) {
	res.status(404).json(messages.message404);
});

router.post('*', function (req, res) {
	res.status(404).json(messages.message404);
});

module.exports = router;