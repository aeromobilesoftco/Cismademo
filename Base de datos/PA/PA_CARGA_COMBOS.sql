CREATE PROCEDURE PA_CARGA_COMBOS(@opt INT, @idpaise INT)
AS
BEGIN

-- operacion variable opt
-- @opt=1 -> carga paises
-- @opt=2 -> carga las ciudades dependiendo el pais
-- @opt=3 -> carga servicios adicionales
-- @opt=4 -> carga servicios adicionales

IF (@opt=1)
BEGIN 
	SELECT 
		*
	FROM 
		pais 
END 

IF (@opt=2)
BEGIN 
	SELECT 
		*
	FROM 
		ciudad
	WHERE 
		idpais=@idpaise		 
END 

IF (@opt=3)
BEGIN 
	SELECT 
		*
	FROM 
		servicios	 
END 

IF (@opt=4)
BEGIN 
	SELECT 
		*
	FROM 
		tipodoc	 
END 

END 