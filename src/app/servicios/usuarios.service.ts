import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroClienteDTO } from '../dto/registro.cliente.dto';
import { Observable, finalize } from 'rxjs';
import { ResultadoDTO } from '../dto/resultado.dto';
import { LoadingService } from './loading.service';
import { ActualizarClienteDTO } from '../dto/actualizar.cliente.dto';
import { UsuarioDTO } from '../dto/user.dto';
import { CambiarPasswordDTO } from '../dto/cambiar.password.dto';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosURL = "https://unilocal-oyt6.onrender.com/api/usuarios";

  constructor(private http: HttpClient,
    private loadingService: LoadingService
  ) { }

  public registrarse(inDTO: RegistroClienteDTO): Observable<ResultadoDTO>{
    return this.http.post<ResultadoDTO>(this.usuariosURL + "/registrar-usuario", inDTO).pipe(
      finalize(() => this.loadingService.hide())
    );
  }

  public eliminarUsuario(idUsuario: string): Observable<ResultadoDTO> {
    const url = `${this.usuariosURL}/eliminar-usuario/${idUsuario}`;
    return this.http.delete<any>(url);
  }

  public editarPerfil(inDTO: ActualizarClienteDTO): Observable<ResultadoDTO>{
    return this.http.put<ResultadoDTO>(this.usuariosURL + "/editar-perfil", inDTO);
  }

  public consultarPerfil(idUsuario: string): Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(this.usuariosURL + "/consultar-perfil", {
      params: { idUsuario }
    });
  }

  public recuperarContrasena(correo: string): Observable<ResultadoDTO>{
    return this.http.post<ResultadoDTO>(this.usuariosURL + "/recuperar-contrasena", correo).pipe(
      finalize(() => this.loadingService.hide())
    );
  }

  public cambiarContrasena(inDTO: CambiarPasswordDTO): Observable<ResultadoDTO>{
    return this.http.post<ResultadoDTO>(this.usuariosURL + "/cambiar-contrasena", inDTO).pipe(
      finalize(() => this.loadingService.hide())
    );
  }
}
