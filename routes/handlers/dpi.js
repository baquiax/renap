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