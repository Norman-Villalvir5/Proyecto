USE Prueba
GO

CREATE VIEW V_1
AS
SELECT Articulo.costounitario, CompraProveedoresDetalle.Monto FROM Articulo, CompraProveedoresDetalle
WHERE Articulo.costounitario=CompraProveedoresDetalle.Monto
GO

CREATE PROCEDURE SP_Proveedores_1 AS
SELECT Inventario.idarticulo, Inventario.cantidad, Proveedores.nombre from Inventario
INNER JOIN Proveedores on Inventario.idproveedor=Proveedores.id
ORDER BY Inventario.cantidad DESC

EXECUTE SP_Proveedores_1
