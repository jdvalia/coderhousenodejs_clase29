import CarritosDao from '../model/daos/CarritosDao.js';

export default class CarritosApi {

    constructor() {
        this.carritosDao = new CarritosDao();
    }
    async getCarritos() {
        const carritosObj = await this.carritosDao.getAll();
        return carritosObj;
    }
    async getZapatillasDelCarrito(idUsuario) {
        const carritosObj = await this.carritosDao.getById(idUsuario);
        return carritosObj;
    }
    async addCarrito(objeto) {
        const carritosObj = await this.carritosDao.add(objeto);
        return carritosObj;
    }
    async addZapatillaAlCarrito(idUsuario, objZapatillaNuevo) {
        const carritosObj = await this.carritosDao.updatePushZapatillaAlCarrito(idUsuario, objZapatillaNuevo);
        return carritosObj;
    }
    async deleteZapatillaAlCarrito(idUsuario, codigoZapatilla) {
        const carritosObj = await this.carritosDao.updatePullZapatillaAlCarrito(idUsuario, codigoZapatilla);
        return carritosObj;
    }
    async deleteCarrito(idUsuario) {
        const carritosObj = await this.carritosDao.deleteById(idUsuario);
        return carritosObj;
    }
}
