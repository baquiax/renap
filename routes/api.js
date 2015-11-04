var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var messages = require("./handlers/messages");
var personas = require("./handlers/personas");
var parentescoPersonas = require("./handlers/parentescoPersonas");
var deptosMunicipios = require("./handlers/deptosMunicipios");
var dpi = require("./handlers/dpi");

var connection = mysql.createConnection({
	host: "localhost",
	user: "baquiax",
	password: "admin",
	database: "renap"
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

router.get('/personas/:dpi', function (req, res) {
	personas.getPersona(connection, messages, req, res);
});

router.post("/personas/", function (req, res) {
	personas.postPersona(connection, messages, req, res, validateRequiredParameters);
});

router.put("/personas/:dpi", function (req, res, next) {
	personas.putPersona(connection, messages, req, res);
});

router.get("/personas/parentescos", function(req, res) {
	parentescoPersonas.getParentescos(connection, messages, req, res);
});

router.post("/personas/parentesco", function(req, res) {
	parentescoPersonas.postParentesco(connection, messages, req, res, validateRequiredParameters);
});

router.get("/dpi/estados", function(req, res) {
	dpi.getEstados(connection, messages, req, res);
});

router.post("/dpi/estados", function(req, res) {
	dpi.postEstados(connection, messages, req, res, validateRequiredParameters);
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

//TODO- OBTENER USUARIOS

router.get('*', function (req, res) {
	res.status(404).json(messages.message404);
});

router.post('*', function (req, res) {
	res.status(404).json(messages.message404);
});

module.exports = router;