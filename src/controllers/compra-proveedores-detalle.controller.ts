import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {CompraProveedoresDetalle} from '../models';
import {CompraProveedoresDetalleRepository} from '../repositories';

export class CompraProveedoresDetalleController {
  constructor(
    @repository(CompraProveedoresDetalleRepository)
    public compraProveedoresDetalleRepository : CompraProveedoresDetalleRepository,
  ) {}

  @post('/compra-proveedores-detalles', {
    responses: {
      '200': {
        description: 'CompraProveedoresDetalle model instance',
        content: {'application/json': {schema: getModelSchemaRef(CompraProveedoresDetalle)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompraProveedoresDetalle, {
            title: 'NewCompraProveedoresDetalle',
            
          }),
        },
      },
    })
    compraProveedoresDetalle: CompraProveedoresDetalle,
  ): Promise<CompraProveedoresDetalle> {
    return this.compraProveedoresDetalleRepository.create(compraProveedoresDetalle);
  }

  @get('/compra-proveedores-detalles/count', {
    responses: {
      '200': {
        description: 'CompraProveedoresDetalle model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CompraProveedoresDetalle) where?: Where<CompraProveedoresDetalle>,
  ): Promise<Count> {
    return this.compraProveedoresDetalleRepository.count(where);
  }

  @get('/compra-proveedores-detalles', {
    responses: {
      '200': {
        description: 'Array of CompraProveedoresDetalle model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CompraProveedoresDetalle, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CompraProveedoresDetalle) filter?: Filter<CompraProveedoresDetalle>,
  ): Promise<CompraProveedoresDetalle[]> {
    return this.compraProveedoresDetalleRepository.find(filter);
  }

  @patch('/compra-proveedores-detalles', {
    responses: {
      '200': {
        description: 'CompraProveedoresDetalle PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompraProveedoresDetalle, {partial: true}),
        },
      },
    })
    compraProveedoresDetalle: CompraProveedoresDetalle,
    @param.where(CompraProveedoresDetalle) where?: Where<CompraProveedoresDetalle>,
  ): Promise<Count> {
    return this.compraProveedoresDetalleRepository.updateAll(compraProveedoresDetalle, where);
  }

  @get('/compra-proveedores-detalles/{id}', {
    responses: {
      '200': {
        description: 'CompraProveedoresDetalle model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CompraProveedoresDetalle, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CompraProveedoresDetalle, {exclude: 'where'}) filter?: FilterExcludingWhere<CompraProveedoresDetalle>
  ): Promise<CompraProveedoresDetalle> {
    return this.compraProveedoresDetalleRepository.findById(id, filter);
  }

  @patch('/compra-proveedores-detalles/{id}', {
    responses: {
      '204': {
        description: 'CompraProveedoresDetalle PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompraProveedoresDetalle, {partial: true}),
        },
      },
    })
    compraProveedoresDetalle: CompraProveedoresDetalle,
  ): Promise<void> {
    await this.compraProveedoresDetalleRepository.updateById(id, compraProveedoresDetalle);
  }

  @put('/compra-proveedores-detalles/{id}', {
    responses: {
      '204': {
        description: 'CompraProveedoresDetalle PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() compraProveedoresDetalle: CompraProveedoresDetalle,
  ): Promise<void> {
    await this.compraProveedoresDetalleRepository.replaceById(id, compraProveedoresDetalle);
  }

  @del('/compra-proveedores-detalles/{id}', {
    responses: {
      '204': {
        description: 'CompraProveedoresDetalle DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.compraProveedoresDetalleRepository.deleteById(id);
  }
}
