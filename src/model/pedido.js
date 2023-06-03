export class pedido {
    constructor(id, dni, idDirEnv, idLocal, idMetPago, createdDate, montoTotal, moneda, estado) {
        this.id = id;
        this.dni = dni;
        this.idDirEnv = idDirEnv;
        this.idLocal = idLocal;
        this.idMetPago = idMetPago;
        this.createdDate = createdDate;
        this.montoTotal = montoTotal;
        this.moneda = moneda;
        this.estado = estado;
    }
}