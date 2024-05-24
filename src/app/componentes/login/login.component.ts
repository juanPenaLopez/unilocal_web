import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDTO } from '../../dto/login.dto';
import { AuthService } from '../../servicios/auth.service';
import { TokenService } from '../../servicios/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ModalInformacionComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup;
  private loginDTO : LoginDTO;
  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;
  modalTitle: string;
  modalContent: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
		private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      correo: [null, [Validators.required]],
      contrasena: [null, [Validators.required]]
    });

    this.loginDTO = new LoginDTO();
  }

  public iniciarSesion(){
    let valoresFormulario = this.form.getRawValue();

    this.loginDTO.correo = valoresFormulario.correo;
    this.loginDTO.contrasena = valoresFormulario.contrasena;

    this.authService.loginCliente(this.loginDTO).subscribe(resp => {
      if (resp.error) {
        this.tokenService.setToken(resp.respuesta.token);
        this.router.navigate(['/'], { relativeTo: this.route.parent });
      }
    }, error => {
        this.modalTitle = "Error";
        this.modalContent = "Se ha presentado un error técnico";
        this.modalComponent.openModal();
    }
    );
  }

}
