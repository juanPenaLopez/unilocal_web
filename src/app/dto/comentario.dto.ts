export class ComentarioDTO{
    id: string;
    mensaje: string;
    fecha: Date;
    calificacion: number;
    codigoCliente: string;
    codigoLugar: string;
    respuesta: string;
    fechaRespuesta: Date;
    idClienteRespuesta: string
}