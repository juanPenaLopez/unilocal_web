import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDTO } from '../../dto/login.dto';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup;
  private loginDTO : LoginDTO;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService
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
      if (resp) {
      }
    }, error => {

    }
    );
  }

}
