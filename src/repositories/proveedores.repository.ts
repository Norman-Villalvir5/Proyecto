import {DefaultCrudRepository} from '@loopback/repository';
import {Proveedores, ProveedoresRelations} from '../models';
import {PruebaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProveedoresRepository extends DefaultCrudRepository<
  Proveedores,
  typeof Proveedores.prototype.id,
  ProveedoresRelations
> {
  constructor(
    @inject('datasources.prueba') dataSource: PruebaDataSource,
  ) {
    super(Proveedores, dataSource);
  }
}
