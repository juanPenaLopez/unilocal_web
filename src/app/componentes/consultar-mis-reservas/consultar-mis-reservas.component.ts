import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservaDTO } from '../../dto/reserva.dto';
import { ReservasService } from '../../servicios/reservas.service';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../servicios/token.service';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';

@Component({
  selector: 'app-consultar-mis-reservas',
  standalone: true,
  imports: [CommonModule, ModalInformacionComponent],
  templateUrl: './consultar-mis-reservas.component.html',
  styleUrl: './consultar-mis-reservas.component.css'
})
export class ConsultarMisReservasComponent implements OnInit {

  ngOnInit(): void {
    this.buscar();
  }

  arrayReservas: Array<ReservaDTO> = [];
  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;
  modalTitle: string;
  modalContent: string;

  constructor(private reservaService: ReservasService,
    private tokenService: TokenService
  ) { }

  private buscar() {
    if (this.tokenService.isLogged()) {
      const token = this.tokenService.getToken();
      if (token) {
        const tokenPayload = this.tokenService.decodePayload(token);
        this.reservaService.consultarReservaPorUsuario(tokenPayload.id).subscribe(resp => {
          if (resp) {
            this.arrayReservas = resp;
          }
        })
      } else {
        this.modalTitle = "Error";
        this.modalContent = "Se ha presentado un error técnico";
        this.modalComponent.openModal();
      }
    }
  }

}
