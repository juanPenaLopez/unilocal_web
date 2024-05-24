import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../../servicios/token.service';
import { UsuariosService } from '../../servicios/usuarios.service';
import { UsuarioDTO } from '../../dto/user.dto';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';

@Component({
  selector: 'app-consultar-cuenta',
  standalone: true,
  imports: [ModalInformacionComponent],
  templateUrl: './consultar-cuenta.component.html',
  styleUrl: './consultar-cuenta.component.css'
})
export class ConsultarCuentaComponent implements OnInit{

  usuarioDTO: UsuarioDTO;
  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;
  modalTitle: string;
  modalContent: string;

  constructor(private router: Router,
		private route: ActivatedRoute,
    private tokenService: TokenService,
    private userServicio: UsuariosService
  ) {
    this.usuarioDTO = new UsuarioDTO();
  }
  
  ngOnInit(): void {
    this.buscar(true);
  }

  public irEliminarPerfil(){
    this.router.navigate(['/eliminar-cuenta'], { relativeTo: this.route.parent });
  }

  public irEditarPerfil(){
    this.router.navigate(['/editar-cuenta'], { relativeTo: this.route.parent });
  }

  private buscar(bandera: boolean){
    if (this.tokenService.isLogged()) {
      const token = this.tokenService.getToken();
      if (token) {
        const prueba = this.tokenService.decodePayload(token);
        this.userServicio.consultarPerfil(prueba.id).subscribe(resp => {
          if (resp) {
            this.usuarioDTO = resp;
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
