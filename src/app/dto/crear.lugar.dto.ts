import { CategoriaLugarEnum } from "../enums/CategoriaLugarEnum";
import { EventoDTO } from "./evento.dto";
import { HorarioDTO } from "./horario.dto";
import { ImagenDTO } from "./imagen.dto";
import { UbicacionDTO } from "./ubicacion.dto";

export class CrearLugarDTO {
    nombre: string;
    categoriaLugar: CategoriaLugarEnum;
    telefonos: Array<string>;
    descripcion: string;
    ubicacion: UbicacionDTO;
    horarioList: Array<HorarioDTO>;
    urlFotos: Array<ImagenDTO>;
    eventoDTO: EventoDTO;
}