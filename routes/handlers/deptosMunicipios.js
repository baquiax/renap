exports.getDeptos = function (connection, messages, req, res) {	
	connection.query("SELECT * FROM departamento", function (err, rows, fields) {
		if (err) {
			return res.status(500).json(messages.message500);
		}
		return res.status(200).json(rows);
	});
};

exports.getDepto = function (connection, messages, req, res) {
	var id = req.params.id;
	connection.query("SELECT * FROM departamento WHERE id_departamento = ?", id, function (err, rows, fields) {
		if (err) {
			return res.status(500).json(messages.message500);
		}
		if (rows.length) {
			return res.status(200).json(rows[0]);
		} else {
			return res.status(404).json(messages.message404);
		}
	});
};

exports.getMunicipios = function (connection, messages, req, res) {
	var id = req.params.id;
	connection.query("SELECT id_municipio,nombre FROM municipio WHERE id_departamento = ?", id, function (err, rows, fields) {
		if (err) {
			return res.status(500).json(messages.message500);
		}
		if (rows.length) {
			return res.status(200).json(rows);
		} else {
			return res.status(404).json(messages.message404);
		}
	});
};