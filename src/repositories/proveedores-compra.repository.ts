import {DefaultCrudRepository} from '@loopback/repository';
import {ProveedoresCompra, ProveedoresCompraRelations} from '../models';
import {PruebaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProveedoresCompraRepository extends DefaultCrudRepository<
  ProveedoresCompra,
  typeof ProveedoresCompra.prototype.id,
  ProveedoresCompraRelations
> {
  constructor(
    @inject('datasources.prueba') dataSource: PruebaDataSource,
  ) {
    super(ProveedoresCompra, dataSource);
  }
}
