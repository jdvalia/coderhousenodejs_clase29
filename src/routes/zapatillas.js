import { Router } from 'express'
import * as zapatillasController from '../controller/ZapatillasController.js'

const ZapatillasRoutes = new Router();

ZapatillasRoutes.get('/', zapatillasController.obtenerZapatillas)
ZapatillasRoutes.get('/:codigoZapatilla', zapatillasController.obtenerUnZapatilla)
ZapatillasRoutes.post('/', zapatillasController.agregarZapatilla)
ZapatillasRoutes.put('/:codigoZapatilla', zapatillasController.actualizarZapatilla)
ZapatillasRoutes.delete('/:codigoZapatilla', zapatillasController.borrarZapatilla)

export default ZapatillasRoutes 