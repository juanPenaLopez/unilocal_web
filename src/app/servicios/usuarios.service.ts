import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroClienteDTO } from '../dto/registro.cliente.dto';
import { Observable, finalize } from 'rxjs';
import { ResultadoDTO } from '../dto/resultado.dto';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosURL = "http://localhost:8080/api/usuarios";

  constructor(private http: HttpClient,
    private loadingService: LoadingService
  ) { }

  public registrarse(inDTO: RegistroClienteDTO): Observable<ResultadoDTO>{
    return this.http.post<ResultadoDTO>(this.usuariosURL + "/registrar-usuario", inDTO).pipe(
      finalize(() => this.loadingService.hide())
    );;
  }
}
