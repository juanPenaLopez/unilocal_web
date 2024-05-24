import { Component, OnInit, ViewChild } from '@angular/core';
import { LugarDTO } from '../../dto/lugar.dto';
import { NegociosService } from '../../servicios/negocios.service';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';
import { TokenService } from '../../servicios/token.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faEdit, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalConfirmacionComponent } from '../modal-confirmacion/modal-confirmacion.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion-negocios',
  standalone: true,
  imports: [ModalInformacionComponent, CommonModule, FontAwesomeModule, ModalConfirmacionComponent],
  templateUrl: './gestion-negocios.component.html',
  styleUrl: './gestion-negocios.component.css'
})
export class GestionNegociosComponent implements OnInit {

  listaLugaresDTO: Array<LugarDTO> = [];
  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;
  modalTitle: string;
  modalContent: string;
  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  @ViewChild(ModalConfirmacionComponent) modalConfirmacion: ModalConfirmacionComponent;
  showConfirmationModal = false;
  modalTitleConfirmacion: string;
  modalContentConfirmacion: string;
  lugarDTO: LugarDTO;
  userRole: string = '';

  ngOnInit(): void {
    this.buscar();
  }

  constructor(private lugarServicio: NegociosService,
    private tokenService: TokenService,
    private router: Router,
		private route: ActivatedRoute
  ) {
    this.lugarDTO = new LugarDTO();
  }

  private buscar() {
    if (this.tokenService.isLogged()) {
      const token = this.tokenService.getToken();
      if (token) {
        const tokenPayload = this.tokenService.decodePayload(token);
        this.userRole = tokenPayload.rol;
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

  public buscarLugar(lugar: LugarDTO) {
    if (this.tokenService.isLogged()) {
      this.router.navigate(['/consultar-negocio'], { relativeTo: this.route.parent });
    }
  }

  public editarLugar(lugar: LugarDTO) {
    if (this.tokenService.isLogged()) {
      this.router.navigate(['/editar-negocio'], { relativeTo: this.route.parent });
    }
  }

  public eliminarLugar(lugar: LugarDTO) {
    if (this.tokenService.isLogged()) {
      this.lugarDTO = lugar;
      this.modalTitleConfirmacion = "Advertencia";
      this.modalContentConfirmacion = "¿Está seguro de eliminar el lugar?";
      this.modalConfirmacion.openModal();
    }
  }

  onConfirmation(confirmed: boolean) {
    this.modalConfirmacion.closeModal();
    if (confirmed) {
      this.lugarServicio.eliminarNegocio(this.lugarDTO.id).subscribe(
        resp => {
          if (resp.exitoso) {
            this.modalTitle = "Hecho";
            this.modalContent = resp.mensaje;
            this.modalComponent.openModal();
          }
        },
        error => {
          this.modalTitle = "Error";
          this.modalContent = "Se ha presentado un error técnico";
          this.modalComponent.openModal();
        }
      );
    }
  }

  public aprobarLugar(lugar: LugarDTO){
    
  }

  public rechazarLugar(lugar: LugarDTO){

  }
}
