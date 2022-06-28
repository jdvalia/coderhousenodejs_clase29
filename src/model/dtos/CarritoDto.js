export default class CarritoDto {

    _id;
    idUsuario;
    zapatillas;

    constructor({ _id, idUsuario, zapatillas }) {
        if (_id === undefined) {
            this._id = undefined;
        }
        else {
            this._id = _id;
        }
        this.idUsuario = idUsuario;
        this.zapatillas = zapatillas;
    }
    get() {
        return {
            _id: this._id,
            idUsuario: this.idUsuario,
            zapatillas: this.zapatillas,
        }
    }
}