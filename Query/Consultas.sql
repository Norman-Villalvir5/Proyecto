USE Prueba
GO

CREATE VIEW V_1
AS
SELECT Articulo.costounitario, CompraProveedoresDetalle.Monto FROM Articulo, CompraProveedoresDetalle
WHERE Articulo.costounitario=CompraProveedoresDetalle.Monto
GO

SELECT * FROM V_1