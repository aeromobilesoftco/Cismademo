CREATE TABLE tipodoc
(
	idtipodoc INT NOT NULL IDENTITY
	, indicativo VARCHAR(2) 
	, nombretipdoc VARCHAR(100)
	, PRIMARY KEY (idtipodoc)
)


CREATE TABLE pasajero
(
	idpasajero INT NOT NULL IDENTITY
	, idtipodoc INT 
	, numdoc VARCHAR(12)
	, nombres VARCHAR (100)
	, apellidos VARCHAR(100)
	, telefono VARCHAR(20)
	, correo VARCHAR(50)
	, PRIMARY KEY (idpasajero)
	, FOREIGN KEY (idtipodoc) REFERENCES tipodoc
)
     
CREATE TABLE pais
(
	idpais INT NOT NULL IDENTITY 
	, pais VARCHAR(50)
	, PRIMARY KEY (idpais)
)
            
CREATE TABLE ciudad
(
	idciudad INT NOT NULL IDENTITY
	, idpais INT NOT NULL
	, nomciudad VARCHAR(100)
	, PRIMARY KEY (idciudad)
	, FOREIGN KEY (idpais) REFERENCES pais	
)

CREATE TABLE servicios 
(
	idservicios INT NOT NULL IDENTITY
	, tiposervicio VARCHAR(100)
	, PRIMARY KEY (idservicios) 
)

CREATE TABLE Viajepersona
(
	idViajepersona INT NOT NULL IDENTITY
	, idpasajero INT NOT NULL
	, idpais_origen INT NOT NULL
	, idciudad_origen INT NOT NULL
	, idpais_destino INT NOT NULL
	, idciudad_destino INT NOT NULL
	, idservicios INT NOT NULL
	, fechaviaje DATE NULL
	, PRIMARY KEY (idViajepersona)
	, FOREIGN KEY (idpais_origen) REFERENCES pais (idpais)
	, FOREIGN KEY (idpais_destino) REFERENCES pais (idpais)	
	, FOREIGN KEY (idciudad_origen) REFERENCES ciudad (idciudad)	
	, FOREIGN KEY (idciudad_destino) REFERENCES ciudad  (idciudad)
	, FOREIGN KEY (idservicios) REFERENCES servicios (idservicios)
)

CREATE TABLE maletapersona
(
	idmaletapersona INT NOT NULL IDENTITY
	, idViajepersona INT NOT NULL
	, alto INT NOT NULL
	, ancho INT NOT NULL
	, largo INT NOT NULL
	, peso INT NOT NULL 
	, PRIMARY KEY (idmaletapersona)
	, FOREIGN KEY (idViajepersona) REFERENCES Viajepersona 
)