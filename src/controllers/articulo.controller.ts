import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {Articulo} from '../models';
import {ArticuloRepository} from '../repositories';

export class ArticuloController {
  constructor(
    @repository(ArticuloRepository)
    public articuloRepository: ArticuloRepository,
  ) { }

  @post('/articulos', {
    responses: {
      '200': {
        description: 'Articulo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Articulo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {
            title: 'NewArticulo',

          }),
        },
      },
    })
    articulo: Articulo,
  ): Promise<Articulo> {
    return this.articuloRepository.create(articulo);
  }

  @get('/articulos/count', {
    responses: {
      '200': {
        description: 'Articulo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Articulo) where?: Where<Articulo>,
  ): Promise<Count> {
    return this.articuloRepository.count(where);
  }

  @get('/articulos', {
    responses: {
      '200': {
        description: 'Array of Articulo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Articulo, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Articulo) filter?: Filter<Articulo>,
  ): Promise<Articulo[]> {
    return this.articuloRepository.find(filter);
  }

  @patch('/articulos', {
    responses: {
      '200': {
        description: 'Articulo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {partial: true}),
        },
      },
    })
    articulo: Articulo,
    @param.where(Articulo) where?: Where<Articulo>,
  ): Promise<Count> {
    return this.articuloRepository.updateAll(articulo, where);
  }

  @get('/articulos/{id}', {
    responses: {
      '200': {
        description: 'Articulo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Articulo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Articulo, {exclude: 'where'}) filter?: FilterExcludingWhere<Articulo>
  ): Promise<Articulo> {
    return this.articuloRepository.findById(id, filter);
  }

  @patch('/articulos/{id}', {
    responses: {
      '204': {
        description: 'Articulo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {partial: true}),
        },
      },
    })
    articulo: Articulo,
  ): Promise<void> {
    await this.articuloRepository.updateById(id, articulo);
  }

  @put('/articulos/{id}', {
    responses: {
      '204': {
        description: 'Articulo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() articulo: Articulo,
  ): Promise<void> {
    await this.articuloRepository.replaceById(id, articulo);
  }

  @del('/articulos/{id}', {
    responses: {
      '204': {
        description: 'Articulo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.articuloRepository.deleteById(id);
  }
  @get('/articulo/V_1')
  async V_1(): Promise<any> {
    let dato: any[] = await this.getV_1();

    return dato;
  }

  async getV_1() {

    return await this.articuloRepository.dataSource.execute('SELECT * FROM V_1');


  }

  @get('/articulo/V_2')
  async V_2(): Promise<any> {
    let dato: any[] = await this.getV_2();

    return dato;
  }

  async getV_2() {

    return await this.articuloRepository.dataSource.execute('SELECT * FROM V_2');

  }
  @get('/articulo/V_3')
  async V_3(): Promise<any> {
    let dato: any[] = await this.getV_3();

    return dato;
  }

  async getV_3() {

    return await this.articuloRepository.dataSource.execute('SELECT * FROM V_3');

  }
  @get('/articulo/V_4')
  async V_4(): Promise<any> {
    let dato: any[] = await this.getV_4();

    return dato;
  }

  async getV_4() {

    return await this.articuloRepository.dataSource.execute('SELECT * FROM V_4');

  }


}




