import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActualizarClienteDTO } from '../../dto/actualizar.cliente.dto';
import { UsuariosService } from '../../servicios/usuarios.service';
import { TokenService } from '../../servicios/token.service';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';

@Component({
  selector: 'app-editar-cuenta',
  standalone: true,
  imports: [ReactiveFormsModule, ModalInformacionComponent],
  templateUrl: './editar-cuenta.component.html',
  styleUrl: './editar-cuenta.component.css'
})
export class EditarCuentaComponent {

  selectedFile: File;
  form: FormGroup;
  actualizarDTO: ActualizarClienteDTO;
  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;
  modalTitle: string;
  modalContent: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
		private route: ActivatedRoute,
    private userServicio: UsuariosService,
    private tokenService: TokenService
  ) {
    this.form = this.formBuilder.group({
      nombreCompleto: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      nombreUsuario: [null, [Validators.required]],
      confirmarCorreo: [null, [Validators.required]],
      ciudad: [null],
      foto: [null]
    });

    this.actualizarDTO = new ActualizarClienteDTO();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  public editarCuenta(){
    if (this.tokenService.isLogged()) {
      const token = this.tokenService.getToken();
      if (token) {
        const prueba = this.tokenService.decodePayload(token);
        this.llenarFiltros(this.form.getRawValue(), prueba);
        this.userServicio.editarPerfil(this.actualizarDTO).subscribe(resp => {
          if (resp.exitoso) {
            this.modalTitle = "Hecho";
            this.modalContent = "Se editó correctamente la cuenta";
            this.modalComponent.openModal();
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

  public redireccionarPantallaPrincipal(){
    this.router.navigate(['/'], { relativeTo: this.route.parent });
  }

  private llenarFiltros(formulario: any, token: any){

    this.actualizarDTO.id = token.id;
    this.actualizarDTO.nombre = formulario.nombreCompleto;
    this.actualizarDTO.email = formulario.correo;
    this.actualizarDTO.fotoPerfil = "1";
    this.actualizarDTO.ciudadResidencia = formulario.ciudad;
  }
}
