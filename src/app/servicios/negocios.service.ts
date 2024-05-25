import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { LoadingService } from './loading.service';
import { LugarDTO } from '../dto/lugar.dto';
import { ResultadoDTO } from '../dto/resultado.dto';
import { CrearLugarDTO } from '../dto/crear.lugar.dto';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  private negociosURL = "http://localhost:8080/api/lugares";
  private lugarSource = new BehaviorSubject<LugarDTO>(new LugarDTO);
  lugarSeleccionado = this.lugarSource.asObservable();

  constructor(private http: HttpClient,
    private loadingService: LoadingService) { }

  public consultarLugaresUsuario(idUsuario: string): Observable<LugarDTO[]> {
    return this.http.get<LugarDTO[]>(this.negociosURL + "/buscar-negocios-usuario", {
      params: { idUsuario }
    }).pipe(finalize(() => this.loadingService.hide()));
  }

  public eliminarNegocio(idNegocio: string): Observable<ResultadoDTO> {
    const url = `${this.negociosURL}/eliminar-lugar?idNegocio=${idNegocio}`;
    return this.http.delete<ResultadoDTO>(url);
  }

  public crearLugar(inDTO: CrearLugarDTO): Observable<ResultadoDTO>{
    return this.http.post<ResultadoDTO>(this.negociosURL + "/registrar-lugar", inDTO).pipe(
      finalize(() => this.loadingService.hide())
    );
  }

  public seleccionarLugar(lugar: LugarDTO) {
    this.lugarSource.next(lugar);
  }
}
