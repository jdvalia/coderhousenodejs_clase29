import CarritosApi from '../api/CarritosApi.js'

const carritos = new CarritosApi();

export async function obtenerCarritos(req, res) {
    try {
        const carritosList = await carritos.getCarritos()
        res.status(200).json(carritosList)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}
export async function obtenerZapatillasDelCarrito(req, res) {
    try {
        let idCarrito = req.params.idCarrito;
        const carrito = await carritos.getZapatillasDelCarrito(idCarrito)
        res.status(200).json(carrito)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}
export async function crearCarrito(req, res) {
    try {
        let objeto = req.body;
        const carrito = await carritos.addCarrito(objeto)
        res.status(200).json(carrito)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}
export async function agregarZapatillaAlCarrito(req, res) {
    let idCarrito = req.params.idCarrito;
    let objNuevoZapatilla = req.body;
    try {
        const carrito = await carritos.addZapatillaAlCarrito(idCarrito, objNuevoZapatilla)
        res.status(200).json(carrito)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}
export async function borrarZapatillaAlCarrito(req, res) {
    let idCarrito = req.params.idCarrito;
    let codigoZapatilla = req.params.codigoZapatilla;
    try {
        const carrito = await carritos.deleteZapatillaAlCarrito(idCarrito, codigoZapatilla)
        res.status(200).json(carrito)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}
export async function borrarCarrito(req, res) {
    try {
        let idCarrito = req.params.idCarrito;
        const carrito = await carritos.deleteCarrito(idCarrito)
        res.status(200).json(carrito)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}