import {DefaultCrudRepository} from '@loopback/repository';
import {PagosDelCliente, PagosDelClienteRelations} from '../models';
import {PruebaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PagosDelClienteRepository extends DefaultCrudRepository<
  PagosDelCliente,
  typeof PagosDelCliente.prototype.id,
  PagosDelClienteRelations
> {
  constructor(
    @inject('datasources.prueba') dataSource: PruebaDataSource,
  ) {
    super(PagosDelCliente, dataSource);
  }
}
