import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';
import { UsuariosService } from '../../servicios/usuarios.service';
import { RegistroClienteDTO } from '../../dto/registro.cliente.dto';
import { ImagenService } from '../../servicios/imagen.service';
import { HttpResponse } from '@angular/common/http';

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
  selectedFile: File;

  constructor(private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private imagenService: ImagenService
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

  public async crearCuenta() {
    try {
      await this.llenarFiltrosCuenta(this.form.getRawValue());

      this.usuariosService.registrarse(this.registroUsuario).subscribe(resp => {
        if (resp.exitoso) {
          this.modalTitle = "Hecho";
          this.modalContent = resp.mensaje;
          this.modalComponent.openModal();
        }
      }, error => {

      });
    } catch (error) {
      console.error('Error al crear cuenta:', error);
    }
  }

  public async llenarFiltrosCuenta(inDTO: any) {
    try {
      this.registroUsuario.nombre = inDTO.nombreCompleto;
      this.registroUsuario.email = inDTO.correo;
      this.registroUsuario.nickname = inDTO.nombreUsuario;
      this.registroUsuario.ciudadResidencia = "Armenia";
      this.registroUsuario.password = inDTO.contrasena;
      this.registroUsuario.fotoPerfil = await this.subirImagen(this.selectedFile);
    } catch (error) {
      console.error('Error al llenar filtros de cuenta:', error);
    }
  }
  

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  get getControls() {
    return this.form.controls;
  }

  private async subirImagen(foto: File): Promise<string> {
    try {
      const formData: FormData = new FormData();
      formData.append('file', foto);

      const resp = await this.imagenService.subir(formData).toPromise();

      if (resp && resp.error === false) {
        return resp.respuesta.secure_url; // o resp.respuesta.url según lo que necesites
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (error) {
      throw new Error('Error en la llamada HTTP');
    }
  }
}
