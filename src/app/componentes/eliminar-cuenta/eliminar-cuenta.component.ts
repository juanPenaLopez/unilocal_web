import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';
import { TokenService } from '../../servicios/token.service';
import { UsuariosService } from '../../servicios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-cuenta',
  standalone: true,
  imports: [ReactiveFormsModule, ModalInformacionComponent],
  templateUrl: './eliminar-cuenta.component.html',
  styleUrl: './eliminar-cuenta.component.css'
})
export class EliminarCuentaComponent {

  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;

  form: FormGroup;

  modalTitle: string;
  modalContent: string;

  constructor(private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private usuarioService: UsuariosService,
    private router: Router,
		private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      motivo: [null],
      correo: [null]
    });
  }

  onEliminarCuenta() {
    if (this.tokenService.isLogged()) {
      const token = this.tokenService.getToken();
      if (token) {
        const prueba = this.tokenService.decodePayload(token);
        this.usuarioService.eliminarUsuario(prueba.id).subscribe(resp => {
          if (resp.exitoso) {
            this.modalTitle = "Hecho";
            this.modalContent = "Se eliminó correctamente la cuenta";
            this.modalComponent.openModal();
            this.tokenService.logout();
            this.router.navigate(['/'], { relativeTo: this.route.parent });
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
