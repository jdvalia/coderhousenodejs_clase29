import ContainerDao from './ContainerDao.js';
import CustomError from '../../../errores/CustomError.js'

export default class UsuariosDao extends ContainerDao {

  constructor() {
    super('users')
  }
  async usuarioPorEmail(username) {
    let wanted
    let query = { "username": username };
    try {
      wanted = await this.collection.findOne(query);
    }
    catch (err) {
      throw new CustomError(500, `Error en ${this.collectionName}`, err)
    }
    if (!wanted) {
      throw new CustomError(404, `Documento no encontrado ${JSON.stringify(query)}`)
    }
    return wanted
  }
}