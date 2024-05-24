import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from './loading.service';
import { LugarDTO } from '../dto/lugar.dto';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  private negociosURL = "http://localhost:8080/api/lugares";

  constructor(private http: HttpClient,
    private loadingService: LoadingService) { }

  public consultarLugaresUsuario(idUsuario: string): Observable<LugarDTO[]> {
    return this.http.get<LugarDTO[]>(this.negociosURL + "/buscar-negocios-usuario", {
      params: { idUsuario }
    }).pipe(finalize(() => this.loadingService.hide()));
  }
}
