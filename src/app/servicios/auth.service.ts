import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../dto/login.dto';
import { TokenDTO } from '../dto/token.dto';
import { MensajeDTO } from '../dto/mensaje.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }

  public registrarCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.authURL}/registrar-cliente`, cliente);
  }

  public loginCliente(loginDTO: LoginDTO): Observable<MensajeDTO<TokenDTO>> {
    return this.http.post<MensajeDTO<TokenDTO>>(`${this.authURL}/login`, loginDTO);
  }
}
