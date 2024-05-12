import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicoService {

  private publicoURL = "http://localhost:8080/api/publico";

  constructor(private http: HttpClient) { }

  public listarCiudades(): Observable<any> {
    return this.http.get<any>(`${this.publicoURL}/listar-ciudades`);
  }

  public listarTiposNegocio(): Observable<any> {
    return this.http.get<any>(`${this.publicoURL}/listar-tipos-negocio`);
  }
}
