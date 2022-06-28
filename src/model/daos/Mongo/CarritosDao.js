import ContainerDao from './ContainerDao.js';

export default class CarritosDao extends ContainerDao {

  constructor() {
    super('carritos')
  }
  async updatePushZapatillaAlCarrito(idUsuario, objZapatillaNuevo) {
    try {
      await this.collection.updateOne(
        { id: idUsuario },
        { '$push': { zapatillas: objZapatillaNuevo } })
      return await super.getById(idUsuario)
    }
    catch (err) {
      throw new CustomError(500, `Error agregando al carrito`, err)
    }
  }

  async updatePullZapatillaAlCarrito(idUsuario, codigoZapatilla) {
    try {
      await this.collection.updateOne(
        { id: idUsuario },
        { '$pull': { zapatillas: { "codigoZapatilla": { $eq: codigoZapatilla } } } })
      return await super.getById(idUsuario)
    }
    catch (err) {
      throw new CustomError(500, `Error borrando del carrito`, err)
    }
  }
}