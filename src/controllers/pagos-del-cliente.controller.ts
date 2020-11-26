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
import {PagosDelCliente} from '../models';
import {PagosDelClienteRepository} from '../repositories';

export class PagosDelClienteController {
  constructor(
    @repository(PagosDelClienteRepository)
    public pagosDelClienteRepository : PagosDelClienteRepository,
  ) {}

  @post('/pagos-del-clientes', {
    responses: {
      '200': {
        description: 'PagosDelCliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(PagosDelCliente)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagosDelCliente, {
            title: 'NewPagosDelCliente',
            exclude: ['id'],
          }),
        },
      },
    })
    pagosDelCliente: Omit<PagosDelCliente, 'id'>,
  ): Promise<PagosDelCliente> {
    return this.pagosDelClienteRepository.create(pagosDelCliente);
  }

  @get('/pagos-del-clientes/count', {
    responses: {
      '200': {
        description: 'PagosDelCliente model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PagosDelCliente) where?: Where<PagosDelCliente>,
  ): Promise<Count> {
    return this.pagosDelClienteRepository.count(where);
  }

  @get('/pagos-del-clientes', {
    responses: {
      '200': {
        description: 'Array of PagosDelCliente model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PagosDelCliente, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PagosDelCliente) filter?: Filter<PagosDelCliente>,
  ): Promise<PagosDelCliente[]> {
    return this.pagosDelClienteRepository.find(filter);
  }

  @patch('/pagos-del-clientes', {
    responses: {
      '200': {
        description: 'PagosDelCliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagosDelCliente, {partial: true}),
        },
      },
    })
    pagosDelCliente: PagosDelCliente,
    @param.where(PagosDelCliente) where?: Where<PagosDelCliente>,
  ): Promise<Count> {
    return this.pagosDelClienteRepository.updateAll(pagosDelCliente, where);
  }

  @get('/pagos-del-clientes/{id}', {
    responses: {
      '200': {
        description: 'PagosDelCliente model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PagosDelCliente, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PagosDelCliente, {exclude: 'where'}) filter?: FilterExcludingWhere<PagosDelCliente>
  ): Promise<PagosDelCliente> {
    return this.pagosDelClienteRepository.findById(id, filter);
  }

  @patch('/pagos-del-clientes/{id}', {
    responses: {
      '204': {
        description: 'PagosDelCliente PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagosDelCliente, {partial: true}),
        },
      },
    })
    pagosDelCliente: PagosDelCliente,
  ): Promise<void> {
    await this.pagosDelClienteRepository.updateById(id, pagosDelCliente);
  }

  @put('/pagos-del-clientes/{id}', {
    responses: {
      '204': {
        description: 'PagosDelCliente PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pagosDelCliente: PagosDelCliente,
  ): Promise<void> {
    await this.pagosDelClienteRepository.replaceById(id, pagosDelCliente);
  }

  @del('/pagos-del-clientes/{id}', {
    responses: {
      '204': {
        description: 'PagosDelCliente DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pagosDelClienteRepository.deleteById(id);
  }
}
