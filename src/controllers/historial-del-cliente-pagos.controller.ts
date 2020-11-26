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
import {HistorialDelClientePagos} from '../models';
import {HistorialDelClientePagosRepository} from '../repositories';

export class HistorialDelClientePagosController {
  constructor(
    @repository(HistorialDelClientePagosRepository)
    public historialDelClientePagosRepository : HistorialDelClientePagosRepository,
  ) {}

  @post('/historial-del-cliente-pagos', {
    responses: {
      '200': {
        description: 'HistorialDelClientePagos model instance',
        content: {'application/json': {schema: getModelSchemaRef(HistorialDelClientePagos)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistorialDelClientePagos, {
            title: 'NewHistorialDelClientePagos',
            exclude: ['idpagos'],
          }),
        },
      },
    })
    historialDelClientePagos: Omit<HistorialDelClientePagos, 'idpagos'>,
  ): Promise<HistorialDelClientePagos> {
    return this.historialDelClientePagosRepository.create(historialDelClientePagos);
  }

  @get('/historial-del-cliente-pagos/count', {
    responses: {
      '200': {
        description: 'HistorialDelClientePagos model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(HistorialDelClientePagos) where?: Where<HistorialDelClientePagos>,
  ): Promise<Count> {
    return this.historialDelClientePagosRepository.count(where);
  }

  @get('/historial-del-cliente-pagos', {
    responses: {
      '200': {
        description: 'Array of HistorialDelClientePagos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(HistorialDelClientePagos, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(HistorialDelClientePagos) filter?: Filter<HistorialDelClientePagos>,
  ): Promise<HistorialDelClientePagos[]> {
    return this.historialDelClientePagosRepository.find(filter);
  }

  @patch('/historial-del-cliente-pagos', {
    responses: {
      '200': {
        description: 'HistorialDelClientePagos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistorialDelClientePagos, {partial: true}),
        },
      },
    })
    historialDelClientePagos: HistorialDelClientePagos,
    @param.where(HistorialDelClientePagos) where?: Where<HistorialDelClientePagos>,
  ): Promise<Count> {
    return this.historialDelClientePagosRepository.updateAll(historialDelClientePagos, where);
  }

  @get('/historial-del-cliente-pagos/{id}', {
    responses: {
      '200': {
        description: 'HistorialDelClientePagos model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(HistorialDelClientePagos, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(HistorialDelClientePagos, {exclude: 'where'}) filter?: FilterExcludingWhere<HistorialDelClientePagos>
  ): Promise<HistorialDelClientePagos> {
    return this.historialDelClientePagosRepository.findById(id, filter);
  }

  @patch('/historial-del-cliente-pagos/{id}', {
    responses: {
      '204': {
        description: 'HistorialDelClientePagos PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistorialDelClientePagos, {partial: true}),
        },
      },
    })
    historialDelClientePagos: HistorialDelClientePagos,
  ): Promise<void> {
    await this.historialDelClientePagosRepository.updateById(id, historialDelClientePagos);
  }

  @put('/historial-del-cliente-pagos/{id}', {
    responses: {
      '204': {
        description: 'HistorialDelClientePagos PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() historialDelClientePagos: HistorialDelClientePagos,
  ): Promise<void> {
    await this.historialDelClientePagosRepository.replaceById(id, historialDelClientePagos);
  }

  @del('/historial-del-cliente-pagos/{id}', {
    responses: {
      '204': {
        description: 'HistorialDelClientePagos DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.historialDelClientePagosRepository.deleteById(id);
  }
}
