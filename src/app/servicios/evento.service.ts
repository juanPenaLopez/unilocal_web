import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { EventoDTO } from '../dto/evento.dto';
import { Observable, finalize } from 'rxjs';
import { ResultadoDTO } from '../dto/resultado.dto';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private eventosURL = "http://localhost:8080/api/eventos";

  constructor(private http: HttpClient,
    private loadingService: LoadingService
  ) { }

  public crearEvento(inDTO: EventoDTO): Observable<ResultadoDTO>{
    return this.http.post<ResultadoDTO>(this.eventosURL + "/crear-evento", inDTO).pipe(
      finalize(() => this.loadingService.hide()));
  }
}
