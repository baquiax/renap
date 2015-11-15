exports.postParentesco = function(connection, messages, req, res, validateRequiredParameters) {	
	validateRequiredParameters(["dpi_relacion", "tipo_parentesco"], req.body, function (missedElement) {
		return res.status(400).json({ "error": "Missing parameter: " + missedElement });
	});
	var query = "INSERT INTO parentesco(dpi, dpi_relacion, tipo_parentesco) VALUES(?,?,?)";
	if (req.params.dpi == req.body.dpi_relacion) {
		return res.status(400).json({
			"error": "No es posible relacionarse a uno mismo en un parentesco..."
		});
	}
	connection.query(query, [req.params.dpi, req.body.dpi_relacion, req.body.tipo_parentesco], function(err, rows, fields){
		if (err) return res.status(400).json(messages.message400);
		return res.status(200).json(messages.message200);
	});
};

exports.postCasar = function(connection, messages, req, res, validateRequiredParameters) {	
	var dpi1 = req.params.dpi1;
	var dpi2 = req.params.dpi2;
	var query = "INSERT INTO parentesco (dpi, dpi_relacion, tipo_parentesco) VALUES (?, ?, 3);";
	if (dpi1 == dpi2) {
		return res.status(400).json({
			"error": "No es posible relacionarse a uno mismo en un parentesco..."
		});
	}
	connection.query(query, [dpi1, dpi2], function(err, rows, fields){
		if (err) return res.status(400).json(messages.message400);
		return res.status(200).json(messages.message200);
	});
};

exports.postPadre = function(connection, messages, req, res, validateRequiredParameters) {	
	var dpi1 = req.params.dpi1;
	var dpi2 = req.params.dpi2;
	var query = "INSERT INTO parentesco (dpi, dpi_relacion, tipo_parentesco) VALUES (?, ?, 2);";
	if (dpi1 == dpi2) {
		return res.status(400).json({
			"error": "No es posible relacionarse a uno mismo en un parentesco..."
		});
	}
	connection.query(query, [dpi1, dpi2], function(err, rows, fields){
		if (err) return res.status(400).json(messages.message400);
		return res.status(200).json(messages.message200);
	});
};

exports.getParentescos = function(connection, messages, req, res) {
	var query = "SELECT * FROM tipo_parentesco";
	connection.query(query, function(err, rows, fields){
		if (err) return res.status(400).json(messages.message400);
		return res.status(200).json(rows);
	});
}

exports.getFamiliares = function(connection, messages, req, res){
	var query = "SELECT p.dpi, nombre, segundo_nombre, tercer_nombre, primer_apellido, segundo_apellido, genero, nacimiento, id_municipio as municipio, direccion FROM persona p, parentesco pa WHERE p.dpi = pa.dpi_relacion AND pa.dpi = ? AND tipo_parentesco = ?";
	connection.query(query, [req.params.dpi, req.params.tipo_p],function(err, rows, fields) {
		console.log(err);
		if (err) return res.status(400).json(messages.message400);
		return res.status(200).json(rows);
	});
}