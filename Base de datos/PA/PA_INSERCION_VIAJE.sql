CREATE PROCEDURE PA_INSERCION_VIAJE(@opt INT, @idpasajero INT, @intidpais1 INT ,@idciupais1 INT, @idpais2 INT , @idciupais2 INT, @tiposervicio INT , @fechaviaje DATETIME )
AS
BEGIN

-- operaciones
-- @opt=1 -> insercion

IF (@opt=1)
BEGIN 
	BEGIN TRY 
		BEGIN TRAN 
	
		INSERT INTO Viajepersona (idpasajero,idpais_origen,idciudad_origen,idpais_destino,idciudad_destino,idservicios,fechaviaje)
		VALUES (@idpasajero,@intidpais1,@idciupais1,@idpais2,@idciupais2,@tiposervicio,@fechaviaje)	
	
		COMMIT TRAN 
		
		SELECT 
			'200' AS status
			, 'Correcto' AS mensaje
			, MAX(idViajepersona) AS consecutivo
		FROM 
			Viajepersona
	END TRY 
	
	BEGIN CATCH 
		ROLLBACK TRAN 
		SELECT '500' AS status, ERROR_MESSAGE() AS resultado, 0 AS consecutivo	
	END CATCH 
END 

END 
