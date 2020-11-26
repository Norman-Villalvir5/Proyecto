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
import {ProveedoresCompra} from '../models';
import {ProveedoresCompraRepository} from '../repositories';

export class ProveedoresCompraController {
  constructor(
    @repository(ProveedoresCompraRepository)
    public proveedoresCompraRepository : ProveedoresCompraRepository,
  ) {}

  @post('/proveedores-compras', {
    responses: {
      '200': {
        description: 'ProveedoresCompra model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProveedoresCompra)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProveedoresCompra, {
            title: 'NewProveedoresCompra',
            
          }),
        },
      },
    })
    proveedoresCompra: ProveedoresCompra,
  ): Promise<ProveedoresCompra> {
    return this.proveedoresCompraRepository.create(proveedoresCompra);
  }

  @get('/proveedores-compras/count', {
    responses: {
      '200': {
        description: 'ProveedoresCompra model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ProveedoresCompra) where?: Where<ProveedoresCompra>,
  ): Promise<Count> {
    return this.proveedoresCompraRepository.count(where);
  }

  @get('/proveedores-compras', {
    responses: {
      '200': {
        description: 'Array of ProveedoresCompra model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ProveedoresCompra, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ProveedoresCompra) filter?: Filter<ProveedoresCompra>,
  ): Promise<ProveedoresCompra[]> {
    return this.proveedoresCompraRepository.find(filter);
  }

  @patch('/proveedores-compras', {
    responses: {
      '200': {
        description: 'ProveedoresCompra PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProveedoresCompra, {partial: true}),
        },
      },
    })
    proveedoresCompra: ProveedoresCompra,
    @param.where(ProveedoresCompra) where?: Where<ProveedoresCompra>,
  ): Promise<Count> {
    return this.proveedoresCompraRepository.updateAll(proveedoresCompra, where);
  }

  @get('/proveedores-compras/{id}', {
    responses: {
      '200': {
        description: 'ProveedoresCompra model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ProveedoresCompra, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProveedoresCompra, {exclude: 'where'}) filter?: FilterExcludingWhere<ProveedoresCompra>
  ): Promise<ProveedoresCompra> {
    return this.proveedoresCompraRepository.findById(id, filter);
  }

  @patch('/proveedores-compras/{id}', {
    responses: {
      '204': {
        description: 'ProveedoresCompra PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProveedoresCompra, {partial: true}),
        },
      },
    })
    proveedoresCompra: ProveedoresCompra,
  ): Promise<void> {
    await this.proveedoresCompraRepository.updateById(id, proveedoresCompra);
  }

  @put('/proveedores-compras/{id}', {
    responses: {
      '204': {
        description: 'ProveedoresCompra PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() proveedoresCompra: ProveedoresCompra,
  ): Promise<void> {
    await this.proveedoresCompraRepository.replaceById(id, proveedoresCompra);
  }

  @del('/proveedores-compras/{id}', {
    responses: {
      '204': {
        description: 'ProveedoresCompra DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.proveedoresCompraRepository.deleteById(id);
  }
}
