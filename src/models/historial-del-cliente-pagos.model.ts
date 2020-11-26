import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'HistorialDelClientePagos'}}
})
export class HistorialDelClientePagos extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'idpago', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idpago: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'idcliente', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idcliente: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HistorialDelClientePagos>) {
    super(data);
  }
}

export interface HistorialDelClientePagosRelations {
  // describe navigational properties here
}

export type HistorialDelClientePagosWithRelations = HistorialDelClientePagos & HistorialDelClientePagosRelations;
