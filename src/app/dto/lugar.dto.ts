import { CategoriaLugarEnum } from "../enums/CategoriaLugarEnum";
import { EstadoEnum } from "../enums/EstadoEnum";
import { ComentarioDTO } from "./comentario.dto";
import { HorarioDTO } from "./horario.dto";
import { ImagenDTO } from "./imagen.dto";
import { RevisionDTO } from "./revision.dto";
import { UbicacionDTO } from "./ubicacion.dto";

export class LugarDTO {
    id: string;
    nombre: string;
    descripcion: string;
    categoriaLugar: CategoriaLugarEnum;
    fechaCreacion: Date;
    imagenes: Array<ImagenDTO>;
    comentarios: Array<ComentarioDTO>;
    estado: EstadoEnum;
    ubicacion: UbicacionDTO;
    usuarioCreacion: string;
    horarios: Array<HorarioDTO>
    telefonos: Array<string>;
    revisiones: Array<RevisionDTO>
}