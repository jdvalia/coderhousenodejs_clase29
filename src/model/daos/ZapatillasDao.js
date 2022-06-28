import config from '../../../config/config.js'
import MongoZapatillasDao from './Mongo/ZapatillasDao.js';
import FirebaseZapatillasDao from './Firebase/ZapatillasDao.js';

let baseDeDatos = config.TIPO_PERSISTENCIA;
let zapatilla;

if (baseDeDatos === "Mongo") {
    zapatilla = class ZapatillasGeneralDao extends MongoZapatillasDao {
        constructor() {
            super()
        }
    }
} else {
    zapatilla = class ZapatillasGeneralDao extends FirebaseZapatillasDao {
        constructor() {
            super()
        }
    }
}
export default zapatilla;