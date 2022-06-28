import ZapatillasDao from '../model/daos/ZapatillasDao.js';

export default class ZapatillasApi {

    constructor() {
        this.zapatillasDao = new ZapatillasDao();
    }
    async getZapatillas() {
        const zapatillasObj = await this.zapatillasDao.getAll();
        return zapatillasObj;
    }
    async getZapatilla(id) {
        const zapatillasObj = await this.zapatillasDao.getById(id);
        return zapatillasObj;
    }
    async addZapatilla(objeto) {
        const zapatillasObj = await this.zapatillasDao.add(objeto);
        return zapatillasObj;
    }
    async putZapatilla(id, objeto) {
        const zapatillasObj = await this.zapatillasDao.update(id, objeto);
        return zapatillasObj;
    }
    async deleteZapatilla(id) {
        const zapatillasObj = await this.zapatillasDao.deleteById(id);
        return zapatillasObj;
    }
}
