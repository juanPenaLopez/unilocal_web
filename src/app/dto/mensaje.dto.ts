export class MensajeDTO<T> {
    error: boolean;
    respuesta: T;

    constructor(error: boolean, respuesta: T) {
        this.error = error;
        this.respuesta = respuesta;
    }
}