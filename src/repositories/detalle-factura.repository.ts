import {DefaultCrudRepository} from '@loopback/repository';
import {DetalleFactura, DetalleFacturaRelations} from '../models';
import {PruebaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DetalleFacturaRepository extends DefaultCrudRepository<
  DetalleFactura,
  typeof DetalleFactura.prototype.idfactura,
  DetalleFacturaRelations
> {
  constructor(
    @inject('datasources.prueba') dataSource: PruebaDataSource,
  ) {
    super(DetalleFactura, dataSource);
  }
}
