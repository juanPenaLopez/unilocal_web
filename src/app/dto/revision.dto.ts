import { EstadoRevisionEnum } from "../enums/EstadoRevisionEnum";

export class RevisionDTO {
    id: string;
    descripcion: string;
    estadoRevision: EstadoRevisionEnum;
    fecha: Date;
    idModerador: string;
}