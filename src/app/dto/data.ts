import { TipoModalEnum } from "../enums/TipoModalEnum";

export class Data {

    /** mensaje del modal */
    public mensaje: string = '';
    public mensajeAlternativo: string = '';

    /** tipo del modal */
    public tipoModal: TipoModalEnum = TipoModalEnum.CONFIRMATION;

    /** codigo del mensaje */
    public codigo = '';

    public isDobleMensaje: boolean = false;

    constructor(){}

}
