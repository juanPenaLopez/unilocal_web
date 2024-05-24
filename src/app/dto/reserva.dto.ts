import { Time } from "@angular/common";
import { EstadoReservaEnum } from "../enums/EstadoReservaEnum";

export class ReservaDTO {
    id: string;
    fechaReserva: Date;
    horaReserva: Time;
    numeroPersonas: number;
    idUsuario: string;
    estadoReserva: EstadoReservaEnum;
    idLugar: string;
}