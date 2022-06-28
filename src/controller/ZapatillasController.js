import ZapatillasApi from '../api/ZapatillasApi.js'

const zapatillas = new ZapatillasApi();

export async function obtenerZapatillas(req, res) {
    try {
        const zapatillasList = await zapatillas.getZapatillas()
        res.status(200).json(zapatillasList)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}
export async function obtenerUnZapatilla(req, res) {
    try {
        let codigo = req.params.codigoZapatilla;
        const zapatilla = await zapatillas.getZapatilla(codigo)
        res.status(200).json(zapatilla)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}
export async function agregarZapatilla(req, res) {
    try {
        let objeto = req.body;
        const zapatilla = await zapatillas.addZapatilla(objeto)
        res.status(200).json(zapatilla)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}
export async function actualizarZapatilla(req, res) {
    try {
        let codigo = req.params.codigoZapatilla;
        let objeto = req.body;
        const zapatilla = await zapatillas.putZapatilla(codigo, objeto);
        res.status(200).json(zapatilla);
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}
export async function borrarZapatilla(req, res) {
    try {
        let codigo = req.params.codigoZapatilla;
        const zapatilla = await zapatillas.deleteZapatilla(codigo)
        res.status(200).json(zapatilla)
    }
    catch (err) {
        res.status(err.estado).json(err)
    }
}