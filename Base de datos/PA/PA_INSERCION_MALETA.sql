CREATE PROCEDURE PA_INSERCION_MALETA(@opt INT, @idviajepersona INT, @alto INT ,@ancho INT, @largo INT , @peso INT)
AS
BEGIN
-- operaciones
-- @opt=1 -> insercion

IF (@opt=1)
BEGIN 
	BEGIN TRY 
		BEGIN TRAN 
	
		INSERT INTO maletapersona (idViajepersona,alto,ancho,largo,peso)
		VALUES (@idviajepersona,@alto,@alto,@largo,@peso)	
	
		COMMIT TRAN 
		
		SELECT 
			'200' AS status
			, 'Correcto' AS mensaje
			, MAX(idmaletapersona) AS consecutivo
		FROM 
			maletapersona
	END TRY 
	
	BEGIN CATCH 
		ROLLBACK TRAN 
		SELECT '500' AS status, ERROR_MESSAGE() AS resultado, 0 AS consecutivo	
	END CATCH 
END

IF(@opt=2)
BEGIN 
SELECT 
	a.idpasajero
	, c.nombres
	, c.apellidos
	, a.fechaviaje
	, d.pais AS pais_origen
	, f.nomciudad AS ciudad_origen
	, g.nomciudad AS ciudad_destino
	, e.pais AS pais_destino
	, (SELECT COUNT(m1.idViajepersona) FROM maletapersona AS m1 WHERE m1.idViajepersona=b.idViajepersona GROUP BY m1.idViajepersona) AS Num_maletas
FROM 
	Viajepersona AS a
RIGHT JOIN 
	maletapersona AS b
ON 
	a.idViajepersona=b.idViajepersona
INNER JOIN 
	pasajero AS c
ON 
	c.idpasajero=a.idpasajero
INNER JOIN 
	pais AS d
ON 
	d.idpais=a.idpais_origen
INNER JOIN 
	pais AS e
ON 
	e.idpais=a.idpais_destino
INNER JOIN 
	ciudad AS f
ON 
	f.idciudad=a.idciudad_origen
INNER JOIN 
	ciudad AS g
ON 
	g.idciudad=a.idpais_destino
GROUP BY 
	a.idpasajero
	, c.nombres
	, c.apellidos
	, a.fechaviaje
	, d.pais
	, f.nomciudad
	, g.nomciudad
	, e.pais
	, b.idViajepersona	
END 
END 