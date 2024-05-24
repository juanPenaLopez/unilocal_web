import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../servicios/usuarios.service';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [ReactiveFormsModule, ModalInformacionComponent],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.css'
})
export class RecuperarContrasenaComponent {

  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;
  modalTitle: string;
  modalContent: string;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuariosService
  ) {
    this.form = this.formBuilder.group({
      correo: [null, [Validators.required]]
    })
  }

  public restablecerContrasena() {

    let valores = this.form.getRawValue();

    this.usuarioService.recuperarContrasena(valores.correo).subscribe(resp => {
      if (resp.exitoso) {
        this.modalTitle = "Confirmación exitosa";
        this.modalContent = "Recuerda, tienes poco tiempo para continuar el proceso de recuperar tu cuenta. <br> Revisa ahora mismo el mensaje que te enviamos al correo ingresado y sigue las instrucciones. <br> No olvides revisar los correos 'No deseados' o 'Spam'";
        this.modalComponent.openModal();
      }
      this.router.navigate(['/login'], { relativeTo: this.route.parent });
    }, error => {
      this.modalTitle = "Confirmación exitosa";
      this.modalContent = "Se ha presentado un error técnico";
      this.modalComponent.openModal();
      this.router.navigate(['/login'], { relativeTo: this.route.parent });
    });
  }

}
