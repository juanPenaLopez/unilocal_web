import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../dto/login.dto';
import { TokenDTO } from '../dto/token.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "https://unilocal-oyt6.onrender.com/api/auth";

  constructor(private http: HttpClient) { }

  public registrarCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.authURL}/registrar-cliente`, cliente);
  }

  public loginCliente(loginDTO: LoginDTO): Observable<TokenDTO> {
    return this.http.post<TokenDTO>(`${this.authURL}/login`, loginDTO);
  }
}
