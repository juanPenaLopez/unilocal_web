import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { CrearReservaDTO } from '../dto/crear.reserva.dto';
import { Observable, finalize } from 'rxjs';
import { ResultadoDTO } from '../dto/resultado.dto';
import { ReservaDTO } from '../dto/reserva.dto';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private reservasURL = "https://unilocal-oyt6.onrender.com/api/reservas";

  constructor(private http: HttpClient,
    private loadingService: LoadingService) { }

  public crearReserva(inDTO: CrearReservaDTO): Observable<ResultadoDTO> {
    return this.http.post<ResultadoDTO>(this.reservasURL + "/crear-reserva", inDTO).pipe(
      finalize(() => this.loadingService.hide())
    );
  }

  public consultarReservaPorUsuario(idUsuario: string): Observable<ReservaDTO[]> {
    return this.http.get<ReservaDTO[]>(this.reservasURL + "/consultar-reserva-usuario", { params: { idUsuario } }).pipe(
      finalize(() => this.loadingService.hide())
    );
  }
}
