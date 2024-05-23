import { Time } from "@angular/common";

export class CrearReservaDTO {
    idLugar: string;
    idUsuario: string;
    fechaReserva: Date;
    horaReserva: Time;
    cantidadPersonas: number;
}