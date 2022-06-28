#DROP DATABASE bikeRelacional;

CREATE DATABASE bikeRelacional;

USE bikeRelacional;

CREATE TABLE Usuarios (
id INT AUTO_INCREMENT,
nombre VARCHAR(300) NOT NULL,
email VARCHAR(300),
urlImg VARCHAR(1000) NOT NULL,
contrasena VARCHAR(300) NOT NULL,
about VARCHAR(5000) NOT NULL,
longitud VARCHAR(500),
latitud VARCHAR(500),
PRIMARY KEY(id)
);

INSERT INTO Usuarios VALUES(null, "Mihai", "romaniaLove@gmail.ru", "https://www.granadasabores.com/img/cms/Aceites%20Algarinejo/Orodeal100ml.jpg","Mihai1*", "Me encantan las bicicletas", "-3.7025600", "40.4165000");

SELECT * FROM Usuarios;

CREATE TABLE Bicicletas (
id INT AUTO_INCREMENT,
modelo VARCHAR(300) NOT NULL,
anio CHAR(4) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO Bicicletas VALUES(null, "Orbea Alma", "2021");


SELECT * FROM Bicicletas;

CREATE TABLE Motos (
id INT AUTO_INCREMENT,
modelo VARCHAR(300) NOT NULL,
anio CHAR(4) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO Motos VALUES(null, "KTM 890", "2019");

SELECT * FROM Motos;

CREATE TABLE Rutas (
id INT AUTO_INCREMENT,
nombre VARCHAR(300) NOT NULL,
longitud VARCHAR(300),
latitud VARCHAR(300),
PRIMARY KEY(id)
);


INSERT INTO Rutas VALUES(null, "Oces del Duraton", "41.3968369", "-3.9523815");

SELECT * FROM Rutas;


CREATE TABLE Usuarios_Bicicletas(
id INT AUTO_INCREMENT,
fk_id_usuario INT NOT NULL,
fk_id_bicicleta INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY(fk_id_usuario) REFERENCES Usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE, 
FOREIGN KEY(fk_id_bicicleta) REFERENCES Bicicletas(id) ON UPDATE CASCADE ON DELETE CASCADE
);



CREATE TABLE Usuarios_Motos(
id INT AUTO_INCREMENT,
fk_id_usuario INT NOT NULL,
fk_id_moto INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY(fk_id_usuario) REFERENCES Usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE, 
FOREIGN KEY(fk_id_moto) REFERENCES Motos(id) ON UPDATE CASCADE ON DELETE CASCADE
);




CREATE TABLE Usuarios_Rutas(
id INT AUTO_INCREMENT,
fecha CHAR(8) NOT NULL,
fk_id_usuario INT NOT NULL,
fk_id_ruta INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY(fk_id_usuario) REFERENCES Usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE, 
FOREIGN KEY(fk_id_ruta) REFERENCES Rutas(id) ON UPDATE CASCADE ON DELETE CASCADE
);



