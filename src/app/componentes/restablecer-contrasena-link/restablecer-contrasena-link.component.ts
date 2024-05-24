import { Component, ViewChild } from '@angular/core';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';
import { CambiarPasswordDTO } from '../../dto/cambiar.password.dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restablecer-contrasena-link',
  standalone: true,
  imports: [ModalInformacionComponent, ReactiveFormsModule],
  templateUrl: './restablecer-contrasena-link.component.html',
  styleUrl: './restablecer-contrasena-link.component.css'
})

export class RestablecerContrasenaLinkComponent {

  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;

  modalTitle: string;
  modalContent: string;
  form: FormGroup;
  cambiarPassword : CambiarPasswordDTO;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      contrasena: [null, [Validators.required]],
      verificarContrasena: [null, [Validators.required]]
    });

    this.cambiarPassword = new CambiarPasswordDTO();
  }

  public restablecerContrasena(){
    let formulario = this.form.getRawValue();
    this.cambiarPassword = formulario.contrasena;
    this.cambiarPassword = formulario.verificarContrasena;

    this.usuarioService.cambiarContrasena(this.cambiarPassword).subscribe(resp => {
      if(resp.exitoso){
        this.modalTitle = "Confirmación exitosa";
        this.modalContent = "Tu proceso de restablecimiento de contraseña fue exitoso. Por favor inicie sesión con la nueva contraseña"
        this.modalComponent.openModal();
        this.router.navigate(['/login'], { relativeTo: this.route.parent });
      }
    }, error => {
      this.modalTitle = "Error";
        this.modalContent = "Se presentó un error técnico"
        this.modalComponent.openModal();
    })
  }

}
