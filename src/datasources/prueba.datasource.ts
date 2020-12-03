import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'prueba',
  connector: 'mssql',
  url: 'mssql://NormanVillalvir5_SQLLogin_1:uiiuqyjhzh@ExamenBDD.mssql.somee.com',
  host: 'ExamenBDD.mssql.somee.com',
  port: 1433,
  user: 'NormanVillalvir5_SQLLogin_1',
  password: 'uiiuqyjhzh',
  database: 'ExamenBDD'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PruebaDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'prueba';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.prueba', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
