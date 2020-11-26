import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Articulo'}}})
export class Articulo extends Entity {
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
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'descripcion', dataType: 'nchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 2,
    mssql: {columnName: 'costounitario', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'NO'},
  })
  costounitario: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Articulo>) {
    super(data);
  }
}

export interface ArticuloRelations {
  // describe navigational properties here
}

export type ArticuloWithRelations = Articulo & ArticuloRelations;
