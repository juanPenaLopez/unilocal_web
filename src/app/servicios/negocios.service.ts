import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from './loading.service';
import { LugarDTO } from '../dto/lugar.dto';
import { ResultadoDTO } from '../dto/resultado.dto';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  private negociosURL = "https://unilocal-oyt6.onrender.com/api/lugares";

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
}
