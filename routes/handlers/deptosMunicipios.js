exports.getDeptos = function (connection, messages, req, res) {
	connection.query("SELECT d.id_departamento, d.nombre as dname, m.id_municipio, m.nombre as mname  FROM departamento d, municipio m WHERE d.id_departamento = m.id_departamento ORDER BY d.id_departamento, m.id_municipio", function (err, rows, fields) {
		if (err) {
			return res.status(500).json(messages.message500);
		}
		var deptoRows = [];		
				
		var currentRow;		
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i]												
			
			if (!currentRow || (currentRow && currentRow["id_departamento"] != row["id_departamento"])) {				
				if (currentRow) {
					deptoRows.push(currentRow);						
				} 
				currentRow = {
					"id_departamento": row["id_departamento"],
					"nombre": row["dname"],
					"municipios": []
				};				
			}
			currentRow.municipios.push({
				"id_municipio": row["id_municipio"],
				"nombre": row["mname"]
			});
		}
		return res.status(200).json(deptoRows);
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