import {DefaultCrudRepository} from '@loopback/repository';
import {Ventas, VentasRelations} from '../models';
import {PruebaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VentasRepository extends DefaultCrudRepository<
  Ventas,
  typeof Ventas.prototype.idcliente,
  VentasRelations
> {
  constructor(
    @inject('datasources.prueba') dataSource: PruebaDataSource,
  ) {
    super(Ventas, dataSource);
  }
}
