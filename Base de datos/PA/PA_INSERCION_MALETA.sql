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
END 