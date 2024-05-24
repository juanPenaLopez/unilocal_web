import { Component, OnInit, ViewChild } from '@angular/core';
import { LugarDTO } from '../../dto/lugar.dto';
import { NegociosService } from '../../servicios/negocios.service';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';
import { TokenService } from '../../servicios/token.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gestion-negocios',
  standalone: true,
  imports: [ModalInformacionComponent, CommonModule, FontAwesomeModule],
  templateUrl: './gestion-negocios.component.html',
  styleUrl: './gestion-negocios.component.css'
})
export class GestionNegociosComponent implements OnInit{

  listaLugaresDTO: Array<LugarDTO> = [];
  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;
  modalTitle: string;
  modalContent: string;
  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;

  ngOnInit(): void {
    this.buscar();
  }

  constructor(private lugarServicio: NegociosService,
    private tokenService: TokenService
  ){}

  private buscar(){
    if (this.tokenService.isLogged()) {
      const token = this.tokenService.getToken();
      if (token) {
        const tokenPayload = this.tokenService.decodePayload(token);
        this.lugarServicio.consultarLugaresUsuario(tokenPayload.id).subscribe(resp => {
          if (resp) {
            this.listaLugaresDTO = resp;
          }
        })
      } else {
        this.modalTitle = "Error";
        this.modalContent = "Se ha presentado un error técnico";
        this.modalComponent.openModal();
      }
    }
  }

  public buscarLugar(lugar: LugarDTO){

  }

  public editarLugar(lugar: LugarDTO){

  }

  public eliminarLugar(lugar: LugarDTO){

  }
}
