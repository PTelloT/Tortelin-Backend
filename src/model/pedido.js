export class pedido {
    constructor(id, dni, fecha, idDirEnv, cantCompras, montoCompra, estado) {
        this.id = id;
        this.dni = dni;
        this.fecha = fecha;
        this.idDirEnv = idDirEnv;
        this.cantCompras = cantCompras;
        this.montoCompra = montoCompra;
        this.estado = estado;
    }
}