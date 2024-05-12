import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }

  public registrarCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.authURL}/registrar-cliente`, cliente);
  }

  public loginCliente(loginDTO: any): Observable<any> {
    return this.http.post<any>(`${this.authURL}/login-cliente`, loginDTO);
  }
}
