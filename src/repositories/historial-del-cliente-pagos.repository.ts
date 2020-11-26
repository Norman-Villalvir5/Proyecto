import {DefaultCrudRepository} from '@loopback/repository';
import {HistorialDelClientePagos, HistorialDelClientePagosRelations} from '../models';
import {PruebaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HistorialDelClientePagosRepository extends DefaultCrudRepository<
  HistorialDelClientePagos,
  typeof HistorialDelClientePagos.prototype.idpago,
  HistorialDelClientePagosRelations
> {
  constructor(
    @inject('datasources.prueba') dataSource: PruebaDataSource,
  ) {
    super(HistorialDelClientePagos, dataSource);
  }
}
