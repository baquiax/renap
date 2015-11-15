exports.getPersona = function (connection, messages,req, res, next) {
	var dpi = req.params.dpi;
	connection.query('SELECT dpi, nombre, segundo_nombre, tercer_nombre, primer_apellido, segundo_apellido, genero, date_format(nacimiento, "%d/%m/%Y") as nacimiento, date_format(fecha_defuncion, "%d/%m/%Y") as fecha_defuncion,id_municipio, direccion FROM persona WHERE dpi = ?', [dpi], function (err, rows, fields) {
		if (err) return res.status(400).json(err);
		if (rows && rows.length)
			return res.status(200).json(rows[0]);
		else
			return res.status(404).json(messages.message404);
	});
};

exports.postPersona = function (connection, messages, req, res, validateRequiredParameters) {
	var requiredParameters = ["dpi", "nombre", "primer_apellido", "genero", "nacimiento", "id_municipio", "direccion"];
	validateRequiredParameters(requiredParameters, req.body, function (missedElement) {
		return res.status(400).json({ "error": "Missing parameter: " + missedElement });
	});

	if (!req.body.nacimiento.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)) {
		return res.status(400).json({ "error": "Fecha de nacimiento debe tener el formato: DD/MM/YYYY" });
	}
	
	if (!req.body.municipio.match(/^\d+$/)) {
		return res.status(400).json({ "error": "id_municipio invalido." });
	}
	
	req.body.genero = req.body.genero.toLowerCase();
	if (!["f", "m"].indexOf(req.body.genero)) {
		return res.status(400).json({ "error": "Por el momento solo es posible: 'f' o 'm' para el genero, elija usted." });
	}

	var validColumns = ["segundo_nombre", "tercer_nombre", "segundo_apellido", "id_pais"];
	for (var i = 0; i < validColumns.length; i++) {
		if (req.body[validColumns[i]]) {
			requiredParameters.push(validColumns[i]);
		}
	}

	var columnNames = [];
	var wildCards = [];
	var values = [];
	for (var i = 0; i < requiredParameters.length; i++) {
		columnNames.push(requiredParameters[i]);
		if (requiredParameters[i] === "nacimiento")
			wildCards.push("str_to_date(?, '%d/%m/%Y')");
		else
			wildCards.push("?");
		values.push(req.body[requiredParameters[i]]);
	}
	columnNames = columnNames.concat(["fecha_creacion"]);
	wildCards = wildCards.concat(["now()"]);
	
	var query = "INSERT INTO persona(" + columnNames.join(",") + ") VALUES(" + wildCards.join(",") + ");";	
	connection.query(query, values, function (err, rows, fields) {		
		if (err) {
			return res.status(400).json(messages.message400);
		} else {			
			// TRANSACTION REQUIRED https://www.npmjs.com/package/mysql#transactions
			// Estado 1 = Activo!
			var insertDPIQuery = "INSERT INTO dpi(dpi, fecha_emision, fecha_vencimiento, estado_documento) VALUES(?,now(),date_add(now(), interval 3 year), 3)";
			connection.query(insertDPIQuery, req.body.dpi, function(err, rows, fields) {				
				if (err) return res.status(400).json(messages.message400);
				return res.status(200).json(messages.message200);				
			});			
		}
	});
};

exports.putPersona = function (connection, messages, req, res, next) {
	var validParameters = ["nombre", "segundo_nombre", "tercer_nombre", "primer_apellido", "segundo_apellido", "direccion", "genero", "id_municipio", "id_pais", "fecha_defuncion", "nacimiento"];
	var fieldsToUpdate = [];
	var fieldSetsInstructions = [];
	var newData = [];
	var newDataWildcards = [];
	var message = JSON.parse(JSON.stringify(messages.message400));
	var wildCard;
	for (var i = 0; i < validParameters.length; i++) {
		if (req.body[validParameters[i]] !== undefined) {
			wildCard = "?";
			if (validParameters[i] == "fecha_defuncion") {
				if (!req.body.fecha_defuncion.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)) {
					message.error += "\nFormato de fecha incorrecto.";
					return res.status(400).json(message);
				} else {
					wildCard = "str_to_date(?, '%d/%m/%Y')";
				}
			}
			if (validParameters[i] == "id_municipio" && !req.body.id_municipio.match(/^\d+$/)) {
				message.error += "\nCodigo de municipio incorrecto.";
				return res.status(400).json(message);
			}
			fieldsToUpdate.push(validParameters[i]);
			fieldSetsInstructions.push(validParameters[i] + '=' + wildCard);
			newData.push(req.body[validParameters[i]]);
			newDataWildcards.push("?");
		}
	}
	//FORCE UPDATE DATE 
	fieldSetsInstructions.push("fecha_modificacion=now()");

	if (!fieldsToUpdate.length) {
		message.error += "\nDesea modificar algo?";
		return res.status(400).json(message);
	}

	var dpi = req.params.dpi;
	connection.query('SELECT ' + fieldsToUpdate.join(",") + ' FROM persona WHERE dpi = ?', [dpi], function (err, rows, fields) {
		if (err) return res.status(400).json(err);
		if (rows && rows.length) {
			var oldData = [];
			for (var i = 0; i < fieldsToUpdate.length; i++) {
				oldData.push(rows[0][fieldsToUpdate[i]]);
			}
			oldData.push(dpi);			
			//TRANSACTION IS NECESSARY https://www.npmjs.com/package/mysql#transactions				
			connection.query('UPDATE persona SET ' + fieldSetsInstructions.join(',') + ' WHERE dpi = ?', newData.concat([dpi]),
				function (err, rows, fields) {
					if (err) return res.status(400).json(err);
					connection.query("INSERT INTO historial_persona (" + fieldsToUpdate.concat(["dpi", "fecha_modificacion"]).join(",") + ") VALUES(" + newDataWildcards.concat(["?", "now()"]).join(",") + ")", oldData,
						function (err, rows, fields) {
							if (err) return res.status(400).json(err);
							return res.status(200).json(messages.message200);
						}
						);
				}
				);
		} else return res.status(404).json(messages.message404);
	});
};

exports.getPadres = function (connection, messages,req, res, next) {
	var dpi = req.params.dpi;
	connection.query('SELECT dpi_relacion FROM parentesco WHERE tipo_parentesco = 2 AND dpi = ?', 	dpi, function (err, rows, fields) {
		if (err) return res.status(400).json(err);
		if (rows && rows.length)
			return res.status(200).json(rows);
		else
			return res.status(404).json(messages.message404);
	});
};

exports.getConyuges = function (connection, messages,req, res, next) {
	var dpi = req.params.dpi;
	connection.query('SELECT dpi_relacion FROM parentesco WHERE tipo_parentesco = 3 AND dpi = ? UNION SELECT dpi as dpi_relacion FROM parentesco WHERE tipo_parentesco = 3 AND dpi_relacion = ?', [dpi, dpi], function (err, rows, fields) {
		if (err) return res.status(400).json(err);
		if (rows && rows.length)
			return res.status(200).json(rows);
		else
			return res.status(404).json(messages.message404);
	});
};

exports.getHermanos = function (connection, messages,req, res, next) {
	var dpi = req.params.dpi;
	connection.query('SELECT DISTINCT dpi as dpi_relacion FROM parentesco p WHERE p.dpi_relacion IN (SELECT dpi_relacion FROM parentesco p2 WHERE p2.tipo_parentesco = 2 AND p2.dpi = ?) AND p.dpi != ? AND p.tipo_parentesco = 2;', [dpi, dpi], function (err, rows, fields) {
		if (err) return res.status(400).json(err);
		if (rows && rows.length)
			return res.status(200).json(rows);
		else
			return res.status(404).json(messages.message404);
	});
};

exports.getHijos = function (connection, messages,req, res, next) {
	var dpi = req.params.dpi;
	connection.query('SELECT dpi as dpi_relacion FROM parentesco p WHERE p.dpi_relacion = ? AND p.tipo_parentesco = 2;', [dpi], function (err, rows, fields) {
		if (err) return res.status(400).json(err);
		if (rows && rows.length)
			return res.status(200).json(rows);
		else
			return res.status(404).json(messages.message404);
	});
};

exports.getFamiliares = function (connection, messages,req, res, next) {
	var dpi = req.params.dpi;
	var response = {"padres": [],"conyuge":[],"hermanos":[], "hijos":[]};
	connection.query('SELECT dpi_relacion FROM parentesco WHERE tipo_parentesco = 2 AND dpi = ?', [dpi], function (err, rows, fields) {		
		if(!err) {			
			response["padres"] = rows;
		}
		connection.query('SELECT dpi_relacion FROM parentesco WHERE tipo_parentesco = 3 AND dpi = ? UNION SELECT dpi as dpi_relacion FROM parentesco WHERE tipo_parentesco = 3 AND dpi_relacion = ?', [dpi, dpi], function (err, rows, fields) {
			if(!err) {
				response["conyuges"] = rows;
			}
			connection.query('SELECT DISTINCT dpi as dpi_relacion FROM parentesco p WHERE p.dpi_relacion IN (SELECT dpi_relacion FROM parentesco p2 WHERE p2.tipo_parentesco = 2 AND p2.dpi = ?) AND p.dpi != ? AND p.tipo_parentesco = 2;', [dpi, dpi], function (err, rows, fields) {
				if(!err) {
					response["hermanos"] = rows;
				}
				connection.query('SELECT dpi as dpi_relacion FROM parentesco p WHERE p.dpi_relacion = ? AND p.tipo_parentesco = 2;', [dpi], function (err, rows, fields) {
					if(!err) {
						response["hijos"] = rows;
					}					
					return res.status(200).json(response);
				});
			});
		});
	});			
};