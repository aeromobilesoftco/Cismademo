CREATE PROCEDURE PA_PASAJEROS(@opt INT,@idpassaje INT, @idtipdoc INT , @numdoci VARCHAR(12), @nombrese VARCHAR(100), @apelli VARCHAR(100), @telfo VARCHAR(20), @correo VARCHAR(50))
AS
BEGIN

-- operaciones
-- @opt=1 -> indica todos los pasajeros
-- @opt=2 -> busca por numero de cedula
-- @opt=3 -> registra al pasajero
-- @opt=4 -> actualizar
-- @opt=4 -> eliminar

IF(@opt=1)
BEGIN
	
	SELECT 
		*	
	FROM 
		pasajero
	
END 

IF(@opt=2)
BEGIN
	
	SELECT 
		*	
	FROM 
		pasajero
	WHERE 
		numdoc=@numdoci
	
END

IF(@opt=3)
BEGIN
	
	BEGIN TRY 
	
	BEGIN TRAN 
		INSERT INTO pasajero (idtipodoc,numdoc,nombres,apellidos,telefono,correo)
		VALUES (@idtipdoc,@numdoci,@nombrese,@apelli,@telfo,@correo)
	COMMIT TRAN 
	
		SELECT '200' AS status, 'Afirmativo' AS resultado
	END TRY 
	BEGIN CATCH
		
		ROLLBACK TRAN 
		SELECT '500' AS status, ERROR_MESSAGE() AS resultado
			
	END CATCH

END 

IF(@opt=4)
BEGIN
	
	BEGIN TRY 
	
	BEGIN TRAN 

	UPDATE 
		pasajero
	SET 
		idtipodoc=@idtipdoc
		, numdoc=@numdoci
		, nombres=@nombrese
		, apellidos=@apelli
		, telefono=@telfo
		, correo=@correo
	WHERE 
		idpasajero=@idpassaje

	COMMIT TRAN 
	
		SELECT '200' AS status, 'Afirmativo' AS resultado
	END TRY 
	BEGIN CATCH
		
		ROLLBACK TRAN 
		SELECT '500' AS status, ERROR_MESSAGE() AS resultado
			
	END CATCH

END

IF(@opt=5)
BEGIN
	
	BEGIN TRY 
	
	BEGIN TRAN 

	DELETE 
	FROM  
		pasajero
	WHERE 
		idpasajero=@idpassaje

	COMMIT TRAN 
	
		SELECT '200' AS status, 'Afirmativo' AS resultado
	END TRY 
	BEGIN CATCH
		
		ROLLBACK TRAN 
		SELECT '500' AS status, ERROR_MESSAGE() AS resultado
			
	END CATCH

END

END 