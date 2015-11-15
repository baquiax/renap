exports.postEstados = function(connection, messages, req, res, validateRequiredParameters) {
	validateRequiredParameters(["descripcion"], req.body, function (missedElement) {
		return res.status(400).json({ "error": "Missing parameter: " + missedElement });
	});
	var query = "INSERT INTO estado_documento(descripcion) VALUES(?)";
	connection.query(query, req.body.descripcion, function(err, rows, fields){
		if (err) return res.status(400).json(messages.message400);
		return res.status(200).json(messages.message200);
	});
}; 

exports.getEstados = function(connection, messages, req, res) {
	var query = "SELECT * FROM estado_documento";
	connection.query(query, function(err, rows, fields){
		if (err) return res.status(400).json(messages.message400);
		return res.status(200).json(rows);
	});
};

exports.getDocumento = function(connection, messages, req, res) {
	var dpi = req.params.dpi;
	var query = "SELECT d.id_dpi, d.fecha_emision, d.fecha_vencimiento,  e.descripcion FROM dpi d, estado_documento e WHERE d.dpi = ? AND d.estado_documento = e.idestado_documento";
	connection.query(query, dpi, function(err, rows, fields){
		if (err) return res.status(400).json(messages.message400);
		return res.status(200).json(rows);
	});
};

exports.putDocumento = function(connection, messages, req, res) {
	var dpi = req.params.dpi;
	var estado = req.params.estado;
	if (!estado || (estado && !estado.match(/^\d+$/))) {
		return res.status(400).json({ "error": "Estado invalido." });
	}
	var query = "UPDATE dpi SET estado_documento = ? WHERE id_dpi = ?";
	connection.query(query, [estado, dpi], function(err, rows, fields){
		if (err) return res.status(400).json(messages.message400);
		return res.status(200).json(rows);
	});
};

exports.postDocumento = function(connection, messages, req, res) {
	var dpi = req.params.dpi;	
	if (!dpi) {
		return res.status(400).json({ "error": "DPI incorrecto." });
	}
	var query = "INSERT INTO dpi (dpi, fecha_emision, fecha_vencimiento, estado_documento) VALUES (?, now(), CURDATE() + INTERVAL 3 YEAR, 3);";
	connection.query(query, [dpi], function(err, rows, fields){
		if (err) return res.status(400).json(messages.message400);
		return res.status(200).json(rows);
	});
};
