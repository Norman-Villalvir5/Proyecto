/* INSERT, UPDATE, DELETE
-- ON TABLE
-- BEFORE, AFTER

--TRIGGER INSERT
go
CREATE TRIGGER trgProveedoresCompra_insert
on ProveedoresCompra
AFTER
INSERT
as
BEGIN
declare @totala float
declare @id int

select @id=id from inserted

select @totala = cantidad from Inventario where idarticulo=@id

update Inventario set cantidad=@totala+(i.total*i.Impuestos) from Inventario f
inner join inserted i on i.id=f.idarticulo

--update
--delete
--select * from factura f
--inner join detalleFactura df on f.id=df.facturaId
END
go

--TRIGGER DELETE
CREATE TRIGGER trgProveedoresCompra_delete
on ProveedoresCompra
AFTER
DELETE
as
BEGIN
declare @total DECIMAL
declare @id int

select @id=id from deleted

select @total = cantidad from  Inventario where idarticulo=@id

update factura set total=@total-(i.total*i.Impuestos) from factura f
inner join deleted i on i.id=f.id
END
go




CREATE TRIGGER trgProveedoresCompras_update
on ProveedoresCompra
AFTER
UPDATE
as
BEGIN
declare @total DECIMAL
declare @id int

select @id=id from deleted

select @total = cantidad from Inventario where idarticulo=@id

update factura set total=@total-(i.total*i.Impuestos) from Inventario f
inner join deleted i on i.id=f.idarticulo

select @total = total from factura where id=@id

update Inventario set cantidad=@total+(i.total*i.Impuestos) from Inventario f
inner join inserted i on i.id=f.idarticulo
END

insert into Inventario(idarticulo,idproveedor,cantidad)
values(1,1,500)
go
insert into Inventario(idarticulo,idproveedor,cantidad)
values(2,1,300)
go
insert into Inventario(idarticulo,idproveedor,cantidad)
values(3,1,900)



insert into ProveedoresCompra(id,total,Impuestos,Fecha)
values(1,100,6)
go
insert into ProveedoresCompra(id,total,Impuestos,Fecha)
values(2,101,6)
go
insert into ProveedoresCompra(id,total,Impuestos,Fecha)
values(3,102,6)
go
insert into ProveedoresCompra(id,total,Impuestos,Fecha)
values(4,103,6)

select * from Inventario
select * from ProveedoresCompra

--update detalleFactura set cantidad=1 where id=1*/

