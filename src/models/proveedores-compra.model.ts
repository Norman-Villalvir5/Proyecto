import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'ProveedoresCompra'}}
})
export class ProveedoresCompra extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 2,
    mssql: {columnName: 'total', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'NO'},
  })
  total: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 2,
    mssql: {columnName: 'Impuestos', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'NO'},
  })
  impuestos: number;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'Fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecha: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ProveedoresCompra>) {
    super(data);
  }
}

export interface ProveedoresCompraRelations {
  // describe navigational properties here
}

export type ProveedoresCompraWithRelations = ProveedoresCompra & ProveedoresCompraRelations;
