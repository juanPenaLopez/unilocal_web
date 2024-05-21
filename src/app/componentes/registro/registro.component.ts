import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';
import { UsuariosService } from '../../servicios/usuarios.service';
import { RegistroClienteDTO } from '../../dto/registro.cliente.dto';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, ModalInformacionComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;

  form: FormGroup;

  private registroUsuario: RegistroClienteDTO;

  modalTitle: string;
  modalContent: string;

  constructor(private formBuilder: FormBuilder,
    private usuariosService: UsuariosService
  ) {
    this.form = this.formBuilder.group({
      nombreCompleto: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      nombreUsuario: [null, [Validators.required]],
      confirmarCorreo: [null, [Validators.required]],
      contrasena: [null, [Validators.required]],
      confirmarContrasena: [null, [Validators.required]],
      ciudad: [null],
      foto: [null],
      terminosCondiciones: [null]
    });

    this.registroUsuario = new RegistroClienteDTO();
  }

  public crearCuenta() {

    this.llenarFiltrosCuenta(this.form.getRawValue());

    this.usuariosService.registrarse(this.registroUsuario).subscribe(resp => {
      if (resp.exitoso) {
        this.modalTitle = "Hecho";
        this.modalContent = resp.mensaje
        this.modalComponent.openModal();
      }
    }, error => {

    }
    );
  }

  public llenarFiltrosCuenta(inDTO: any){
    this.registroUsuario.nombre = inDTO.nombreCompleto;
    this.registroUsuario.email = inDTO.correo;
    this.registroUsuario.nickname = inDTO.contrasena;
    this.registroUsuario.fotoPerfil = "juan";
    this.registroUsuario.ciudadResidencia = "Armenia";
    this.registroUsuario.password = inDTO.contrasena;
  }

  get getControls() {
    return this.form.controls;
  }
}
