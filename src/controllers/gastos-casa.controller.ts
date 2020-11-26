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
import {GastosCasa} from '../models';
import {GastosCasaRepository} from '../repositories';

export class GastosCasaController {
  constructor(
    @repository(GastosCasaRepository)
    public gastosCasaRepository : GastosCasaRepository,
  ) {}

  @post('/gastos-casas', {
    responses: {
      '200': {
        description: 'GastosCasa model instance',
        content: {'application/json': {schema: getModelSchemaRef(GastosCasa)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GastosCasa, {
            title: 'NewGastosCasa',
            
          }),
        },
      },
    })
    gastosCasa: GastosCasa,
  ): Promise<GastosCasa> {
    return this.gastosCasaRepository.create(gastosCasa);
  }

  @get('/gastos-casas/count', {
    responses: {
      '200': {
        description: 'GastosCasa model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(GastosCasa) where?: Where<GastosCasa>,
  ): Promise<Count> {
    return this.gastosCasaRepository.count(where);
  }

  @get('/gastos-casas', {
    responses: {
      '200': {
        description: 'Array of GastosCasa model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GastosCasa, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(GastosCasa) filter?: Filter<GastosCasa>,
  ): Promise<GastosCasa[]> {
    return this.gastosCasaRepository.find(filter);
  }

  @patch('/gastos-casas', {
    responses: {
      '200': {
        description: 'GastosCasa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GastosCasa, {partial: true}),
        },
      },
    })
    gastosCasa: GastosCasa,
    @param.where(GastosCasa) where?: Where<GastosCasa>,
  ): Promise<Count> {
    return this.gastosCasaRepository.updateAll(gastosCasa, where);
  }

  @get('/gastos-casas/{id}', {
    responses: {
      '200': {
        description: 'GastosCasa model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(GastosCasa, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(GastosCasa, {exclude: 'where'}) filter?: FilterExcludingWhere<GastosCasa>
  ): Promise<GastosCasa> {
    return this.gastosCasaRepository.findById(id, filter);
  }

  @patch('/gastos-casas/{id}', {
    responses: {
      '204': {
        description: 'GastosCasa PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GastosCasa, {partial: true}),
        },
      },
    })
    gastosCasa: GastosCasa,
  ): Promise<void> {
    await this.gastosCasaRepository.updateById(id, gastosCasa);
  }

  @put('/gastos-casas/{id}', {
    responses: {
      '204': {
        description: 'GastosCasa PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() gastosCasa: GastosCasa,
  ): Promise<void> {
    await this.gastosCasaRepository.replaceById(id, gastosCasa);
  }

  @del('/gastos-casas/{id}', {
    responses: {
      '204': {
        description: 'GastosCasa DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.gastosCasaRepository.deleteById(id);
  }
}
