DELETE FROM municipio WHERE id_municipio > 0;
DELETE FROM departamento WHERE id_departamento > 0;
DELETE FROM estado_documento WHERE idestado_documento> 0;
ALTER TABLE departamento AUTO_INCREMENT = 1;
ALTER TABLE municipio AUTO_INCREMENT = 1;
ALTER TABLE estado_documento AUTO_INCREMENT = 1;

INSERT INTO departamento(nombre) VALUES ('Alta Verapaz');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Chahal');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Lanquín');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'San Juan Chamelco');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Santa María Cahabón');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Tucurú');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Chisec');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Panzós');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'San Pedro Carchá');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Senahú');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Cobán');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Raxruhá');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Santa Catalina La Tinta');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Tactic');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Fray Bartolomé de las Casas');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'San Cristóbal Verapaz');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Santa Cruz Verapaz');
INSERT INTO municipio(id_departamento, nombre) VALUES (1,'Tamahú');
INSERT INTO departamento(nombre) VALUES ('Baja Verapaz');
INSERT INTO municipio(id_departamento, nombre) VALUES (2,'Cubulco');
INSERT INTO municipio(id_departamento, nombre) VALUES (2,'Salamá');
INSERT INTO municipio(id_departamento, nombre) VALUES (2,'Granados');
INSERT INTO municipio(id_departamento, nombre) VALUES (2,'San Jerónimo');
INSERT INTO municipio(id_departamento, nombre) VALUES (2,'Purulhá');
INSERT INTO municipio(id_departamento, nombre) VALUES (2,'San Miguel Chicaj');
INSERT INTO municipio(id_departamento, nombre) VALUES (2,'Rabinal');
INSERT INTO municipio(id_departamento, nombre) VALUES (2,'Santa Cruz el Chol');
INSERT INTO departamento(nombre) VALUES ('Chimaltenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'Acatenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'Patzicía');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'San José Poaquil');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'Santa Cruz Balanyá');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'Chimaltenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'Patzún');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'San Juan Comalapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'Tecpán');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'El Tejar');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'Pochuta');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'San Martín Jilotepeque');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'Yepocapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'Parramos');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'San Andrés Itzapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'Santa Apolonia');
INSERT INTO municipio(id_departamento, nombre) VALUES (3,'Zaragoza');
INSERT INTO departamento(nombre) VALUES ('Chiquimula');
INSERT INTO municipio(id_departamento, nombre) VALUES (4,'Camotán');
INSERT INTO municipio(id_departamento, nombre) VALUES (4,'Ipala');
INSERT INTO municipio(id_departamento, nombre) VALUES (4,'San Jacinto');
INSERT INTO municipio(id_departamento, nombre) VALUES (4,'Chiquimula');
INSERT INTO municipio(id_departamento, nombre) VALUES (4,'Jocotán');
INSERT INTO municipio(id_departamento, nombre) VALUES (4,'San José La Arada');
INSERT INTO municipio(id_departamento, nombre) VALUES (4,'Concepción Las Minas');
INSERT INTO municipio(id_departamento, nombre) VALUES (4,'Olopa');
INSERT INTO municipio(id_departamento, nombre) VALUES (4,'San Juan Ermita');
INSERT INTO municipio(id_departamento, nombre) VALUES (4,'Esquipulas');
INSERT INTO municipio(id_departamento, nombre) VALUES (4,'Quezaltepeque');
INSERT INTO departamento(nombre) VALUES ('El Progreso');
INSERT INTO municipio(id_departamento, nombre) VALUES (5,'El Jícaro');
INSERT INTO municipio(id_departamento, nombre) VALUES (5,'San Antonio La Paz');
INSERT INTO municipio(id_departamento, nombre) VALUES (5,'Guastatoya');
INSERT INTO municipio(id_departamento, nombre) VALUES (5,'San Cristóbal Acasaguastlán');
INSERT INTO municipio(id_departamento, nombre) VALUES (5,'Morazán');
INSERT INTO municipio(id_departamento, nombre) VALUES (5,'Sanarate');
INSERT INTO municipio(id_departamento, nombre) VALUES (5,'San Agustín Acasaguastlán');
INSERT INTO municipio(id_departamento, nombre) VALUES (5,'Sansare');
INSERT INTO departamento(nombre) VALUES ('Escuintla');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'Escuintla');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'La Gomera');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'San José');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'Tiquisate');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'Guanagazapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'Masagua');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'San Vicente Pacaya');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'Iztapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'Nueva Concepción');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'Santa Lucía Cotzumalguapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'La Democracia');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'Palín');
INSERT INTO municipio(id_departamento, nombre) VALUES (6,'Siquinalá');
INSERT INTO departamento(nombre) VALUES ('Guatemala');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'Amatitlán');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'Guatemala');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'San José Pinula');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'San Pedro Sacatepéquez');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'Villa Nueva');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'Chinautla');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'Mixco');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'San Juan Sacatepéquez');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'San Raymundo');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'Chuarrancho');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'Palencia');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'San Miguel Petapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'Santa Catarina Pinula');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'Fraijanes');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'San José del Golfo');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'San Pedro Ayampuc');
INSERT INTO municipio(id_departamento, nombre) VALUES (7,'Villa Canales');
INSERT INTO departamento(nombre) VALUES ('Huehuetenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Aguacatán');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Cuilco');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'La Libertad');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Gaspar Ixchil');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Mateo Ixtatán');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Rafael La Independencia');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Santa Ana Huista');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Santiago Chimaltenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Chiantla');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Huehuetenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Malacatancito');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Ildefonso Ixtahuacán');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Miguel Acatán');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Rafael Petzal');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Santa Bárbara');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Tectitán');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Colotenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Jacaltenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Nentón');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Juan Atitán');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Pedro Necta');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Sebastián Coatán');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Santa Cruz Barillas');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Todos Santos Cuchumatánes');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Concepción Huista');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'La Democracia');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Antonio Huista');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Juan Ixcoy');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Pedro Soloma');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'San Sebastián');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Santa Eulalia');
INSERT INTO municipio(id_departamento, nombre) VALUES (8,'Unión Cantinil');
INSERT INTO departamento(nombre) VALUES ('Izabal');
INSERT INTO municipio(id_departamento, nombre) VALUES (9,'El Estor');
INSERT INTO municipio(id_departamento, nombre) VALUES (9,'Puerto Barrios');
INSERT INTO municipio(id_departamento, nombre) VALUES (9,'Livingston');
INSERT INTO municipio(id_departamento, nombre) VALUES (9,'Los Amates');
INSERT INTO municipio(id_departamento, nombre) VALUES (9,'Morales');
INSERT INTO departamento(nombre) VALUES ('Jalapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (10,'Jalapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (10,'San Luis Jilotepeque');
INSERT INTO municipio(id_departamento, nombre) VALUES (10,'Mataquescuintla');
INSERT INTO municipio(id_departamento, nombre) VALUES (10,'San Manuel Chaparrón');
INSERT INTO municipio(id_departamento, nombre) VALUES (10,'Monjas');
INSERT INTO municipio(id_departamento, nombre) VALUES (10,'San Pedro Pinula');
INSERT INTO municipio(id_departamento, nombre) VALUES (10,'San Carlos Alzatate');
INSERT INTO departamento(nombre) VALUES ('Jutiapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Agua Blanca');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Conguaco');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Jerez');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Quesada');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Zapotitlán');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Asunción Mita');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'El Adelanto');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Jutiapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'San José Acatempa');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Atescatempa');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'El Progreso');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Moyuta');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Santa Catarina Mita');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Comapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Jalpatagua');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Pasaco');
INSERT INTO municipio(id_departamento, nombre) VALUES (11,'Yupiltepeque');
INSERT INTO departamento(nombre) VALUES ('Petén');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'Dolores');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'Melchor de Mencos');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'San Francisco');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'Sayaxché');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'Flores');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'Poptún');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'San José');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'La Libertad');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'San Andrés');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'San Luis');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'Las Cruces');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'San Benito');
INSERT INTO municipio(id_departamento, nombre) VALUES (12,'Santa Ana');
INSERT INTO departamento(nombre) VALUES ('Quetzaltenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Almolonga');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Coatepeque');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Flores Costa Cuca');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Olintepeque');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'San Carlos Sija');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'San Mateo');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Cabricán');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Colomba');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Génova');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Palestina de Los Altos');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'San Francisco La Unión');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'San Miguel Sigüilá');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Cajolá');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Concepción Chiquirichapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Huitán');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Quetzaltenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'San Juan Ostuncalco');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Sibilia');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Cantel');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'El Palmar');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'La Esperanza');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Salcajá');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'San Martín Sacatepéquez');
INSERT INTO municipio(id_departamento, nombre) VALUES (13,'Zunil');
INSERT INTO departamento(nombre) VALUES ('Quiché');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Canillá');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Chichicastenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Joyabaj');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'San Juan Cotzal');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Zacualpa');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Chajul');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Chinique');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Nebaj');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'San Andrés Sajcabajá');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'San Pedro Jocopilas');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Chicamán');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Cunén');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Pachalum');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'San Antonio Ilotenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Santa Cruz del Quiché');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Chiché');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Ixcán');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Patzité');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'San Bartolomé Jocotenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (14,'Uspantán');
INSERT INTO departamento(nombre) VALUES ('Retalhuleu');
INSERT INTO municipio(id_departamento, nombre) VALUES (15,'Champerico');
INSERT INTO municipio(id_departamento, nombre) VALUES (15,'San Andrés Villa Seca');
INSERT INTO municipio(id_departamento, nombre) VALUES (15,'Santa Cruz Muluá');
INSERT INTO municipio(id_departamento, nombre) VALUES (15,'El Asintal');
INSERT INTO municipio(id_departamento, nombre) VALUES (15,'San Felipe');
INSERT INTO municipio(id_departamento, nombre) VALUES (15,'Nuevo San Carlos');
INSERT INTO municipio(id_departamento, nombre) VALUES (15,'San Martín Zapotitlán');
INSERT INTO municipio(id_departamento, nombre) VALUES (15,'Retalhuleu');
INSERT INTO municipio(id_departamento, nombre) VALUES (15,'San Sebastián');
INSERT INTO departamento(nombre) VALUES ('Sacatepéquez');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'Alotenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'Magdalena Milpas Altas');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'San Lucas Sacatepéquez');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'Santa María de Jesús');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'La Antigua Guatemala');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'Pastores');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'San Miguel Dueñas');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'Santiago Sacatepéquez');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'Ciudad Vieja');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'San Antonio Aguas Calientes');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'Santa Catarina Barahona');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'Santo Domingo Xenacoj');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'Jocotenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'San Bartolomé Milpas Altas');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'Santa Lucía Milpas Altas');
INSERT INTO municipio(id_departamento, nombre) VALUES (16,'Sumpango');
INSERT INTO departamento(nombre) VALUES ('San Marcos');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Ayutla');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'El Quetzal');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Ixchiguán');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Ocós');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'San Cristóbal Cucho');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'San Miguel Ixtahuacán');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Sibinal');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Tejutla');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Catarina');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'El Rodeo');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'La Reforma');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Pajapita');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'San José Ojetenam');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'San Pablo');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Sipacapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Comitancillo');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'El Tumbador');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Malacatán');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Río Blanco');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'San Lorenzo');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'San Pedro Sacatepéquez');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Tacaná');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Concepción Tutuapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Esquipulas Palo Gordo');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Nuevo Progreso');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'San Antonio Sacatepéquez');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'San Marcos');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'San Rafael Pie de La Cuesta');
INSERT INTO municipio(id_departamento, nombre) VALUES (17,'Tajumulco');
INSERT INTO departamento(nombre) VALUES ('Santa Rosa');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'Barberena');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'Guazacapán');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'San Juan Tecuaco');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'Santa Rosa de Lima');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'Casillas');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'Nueva Santa Rosa');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'San Rafaél Las Flores');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'Taxisco');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'Chiquimulilla');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'Oratorio');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'Santa Cruz Naranjo');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'Cuilapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'Pueblo Nuevo Viñas');
INSERT INTO municipio(id_departamento, nombre) VALUES (18,'Santa María Ixhuatán');
INSERT INTO departamento(nombre) VALUES ('Sololá');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'Concepción');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'San Antonio Palopó');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'San Marcos La Laguna');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'Santa Catarina Palopó');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'Santa María Visitación');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'Nahualá');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'San José Chacayá');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'San Pablo La Laguna');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'Santa Clara La Laguna');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'Santiago Atitlán');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'Panajachel');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'San Juan La Laguna');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'San Pedro La Laguna');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'Santa Cruz La Laguna');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'Sololá');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'San Andrés Semetabaj');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'San Lucas Tolimán');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'Santa Catarina Ixtahuacan');
INSERT INTO municipio(id_departamento, nombre) VALUES (19,'Santa Lucía Utatlán');
INSERT INTO departamento(nombre) VALUES ('Suchitepéquez');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'Chicacao');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'Pueblo Nuevo');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'San Bernardino');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'San Juan Bautista');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'Santa Bárbara');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'Cuyotenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'Río Bravo');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'San Francisco Zapotitlán');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'San Lorenzo');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'Santo Domingo');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'Mazatenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'Samayac');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'San Gabriel');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'San Miguel Panán');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'Santo Tomás La Unión');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'Patulul');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'San Antonio');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'San José El Ídolo');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'San Pablo Jocopilas');
INSERT INTO municipio(id_departamento, nombre) VALUES (20,'Zunilito');
INSERT INTO departamento(nombre) VALUES ('Totonicapán');
INSERT INTO municipio(id_departamento, nombre) VALUES (21,'Momostenango');
INSERT INTO municipio(id_departamento, nombre) VALUES (21,'San Francisco El Alto');
INSERT INTO municipio(id_departamento, nombre) VALUES (21,'San Andrés Xecul');
INSERT INTO municipio(id_departamento, nombre) VALUES (21,'Santa Lucía La Reforma');
INSERT INTO municipio(id_departamento, nombre) VALUES (21,'San Bartolo');
INSERT INTO municipio(id_departamento, nombre) VALUES (21,'Santa María Chiquimula');
INSERT INTO municipio(id_departamento, nombre) VALUES (21,'San Cristóbal Totonicapán');
INSERT INTO municipio(id_departamento, nombre) VALUES (21,'Totonicapán');
INSERT INTO departamento(nombre) VALUES ('Zacapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (22,'Cabañas');
INSERT INTO municipio(id_departamento, nombre) VALUES (22,'La Unión');
INSERT INTO municipio(id_departamento, nombre) VALUES (22,'Usumatlán');
INSERT INTO municipio(id_departamento, nombre) VALUES (22,'Estanzuela');
INSERT INTO municipio(id_departamento, nombre) VALUES (22,'Río Hondo');
INSERT INTO municipio(id_departamento, nombre) VALUES (22,'Zacapa');
INSERT INTO municipio(id_departamento, nombre) VALUES (22,'Gualán');
INSERT INTO municipio(id_departamento, nombre) VALUES (22,'San Diego');
INSERT INTO municipio(id_departamento, nombre) VALUES (22,'Huité');
INSERT INTO municipio(id_departamento, nombre) VALUES (22,'Teculután');

INSERT INTO pais(nombre, code) VALUES ('Guatemala', 'GT');
INSERT INTO usuario(usuario, passwd, bloqueado) VALUES ("admin", md5("admin"), 0);
INSERT INTO estado_documento(descripcion) VALUES("activo");