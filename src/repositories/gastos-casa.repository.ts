import {DefaultCrudRepository} from '@loopback/repository';
import {GastosCasa, GastosCasaRelations} from '../models';
import {PruebaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GastosCasaRepository extends DefaultCrudRepository<
  GastosCasa,
  typeof GastosCasa.prototype.idarticulo,
  GastosCasaRelations
> {
  constructor(
    @inject('datasources.prueba') dataSource: PruebaDataSource,
  ) {
    super(GastosCasa, dataSource);
  }
}
