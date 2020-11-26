import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Inventario'}}})
export class Inventario extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'idarticulo', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idarticulo: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 2,
    mssql: {columnName: 'cantidad', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'NO'},
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'idproveedor', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idproveedor: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Inventario>) {
    super(data);
  }
}

export interface InventarioRelations {
  // describe navigational properties here
}

export type InventarioWithRelations = Inventario & InventarioRelations;
