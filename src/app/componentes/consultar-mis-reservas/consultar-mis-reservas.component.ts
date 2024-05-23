import { Component, OnInit } from '@angular/core';
import { ReservaDTO } from '../../dto/reserva.dto';
import { ReservasService } from '../../servicios/reservas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultar-mis-reservas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultar-mis-reservas.component.html',
  styleUrl: './consultar-mis-reservas.component.css'
})
export class ConsultarMisReservasComponent implements OnInit{

  ngOnInit(): void {
    this.buscar(true);
  }

  arrayReservas: Array<ReservaDTO> = [];

  constructor(private reservaService: ReservasService) {}

  private buscar(bandera: boolean){
    if(bandera){
      this.reservaService.consultarReservaPorUsuario("11").subscribe(resp => {
        this.arrayReservas = resp;
      }, error => {

      });
    }
  }

}
