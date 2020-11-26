import {DefaultCrudRepository} from '@loopback/repository';
import {Inventario, InventarioRelations} from '../models';
import {PruebaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InventarioRepository extends DefaultCrudRepository<
  Inventario,
  typeof Inventario.prototype.idarticulo,
  InventarioRelations
> {
  constructor(
    @inject('datasources.prueba') dataSource: PruebaDataSource,
  ) {
    super(Inventario, dataSource);
  }
}
