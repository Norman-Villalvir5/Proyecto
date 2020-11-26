import {DefaultCrudRepository} from '@loopback/repository';
import {CompraProveedoresDetalle, CompraProveedoresDetalleRelations} from '../models';
import {PruebaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompraProveedoresDetalleRepository extends DefaultCrudRepository<
  CompraProveedoresDetalle,
  typeof CompraProveedoresDetalle.prototype.idcompras,
  CompraProveedoresDetalleRelations
> {
  constructor(
    @inject('datasources.prueba') dataSource: PruebaDataSource,
  ) {
    super(CompraProveedoresDetalle, dataSource);
  }
}
