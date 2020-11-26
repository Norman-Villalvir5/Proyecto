import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'DetalleFactura'}}
})
export class DetalleFactura extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'idfactura', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idfactura: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
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
    scale: 2,
    mssql: {columnName: 'monto', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'NO'},
  })
  monto: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DetalleFactura>) {
    super(data);
  }
}

export interface DetalleFacturaRelations {
  // describe navigational properties here
}

export type DetalleFacturaWithRelations = DetalleFactura & DetalleFacturaRelations;
