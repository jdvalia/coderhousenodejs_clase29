import { Router } from 'express'
import * as carritosController from '../controller/CarritosController.js'

const CarritosRoutes = new Router();

CarritosRoutes.get('/', carritosController.obtenerCarritos)
CarritosRoutes.get('/:idCarrito/zapatillas', carritosController.obtenerZapatillasDelCarrito)
CarritosRoutes.post('/', carritosController.crearCarrito)
CarritosRoutes.post('/:idCarrito/zapatillas', carritosController.agregarZapatillaAlCarrito)
CarritosRoutes.delete('/:idCarrito/zapatilla/:codigoZapatilla', carritosController.borrarZapatillaAlCarrito)
CarritosRoutes.delete('/:idCarrito', carritosController.borrarCarrito)

export default CarritosRoutes 