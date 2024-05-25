import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { CiudadDTO } from '../dto/ciudad.dto';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private ciudadURL = "http://localhost:8080/api/ciudad";

  constructor(private http: HttpClient,
    private loadingService: LoadingService) { }

  public consultarCiudades(): Observable<CiudadDTO[]> {
    return this.http.get<CiudadDTO[]>(this.ciudadURL + "/consultar-ciudades").pipe(
      finalize(() => this.loadingService.hide()));
  }
}
