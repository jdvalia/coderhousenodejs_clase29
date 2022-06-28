import ContainerDao from './ContainerDao.js';


export default class CarritosDao extends ContainerDao {
  constructor() {
    super('carritos')
  }
  async updatePushZapatillaAlCarrito(idCarrito, objZapatillaNuevo) {
    try {
      await this.collection.updateOne(
        { idCarrito: idCarrito },
        { '$push': { zapatillas: objZapatillaNuevo } })
      return await super.getById({ idCarrito: idCarrito })
    }
    catch (err) {
      throw new CustomError(500, `Error al agregar una zapatilla al carrito`, err)
    }
  }
  async updatePullZapatillaAlCarrito(idCarrito, codigoZapatilla) {
    try {
      await this.collection.updateOne(
        { idCarrito: idCarrito },
        { '$pull': { zapatillas: { "codigoZapatilla": { $eq: codigoZapatilla } } } })
      return await super.getById({ idCarrito: idCarrito })
    }
    catch (err) {
      throw new CustomError(500, `Error al agregar una zapatilla al carrito`, err)
    }
  }
}