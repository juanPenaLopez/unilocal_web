import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';

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

  modalTitle: string;
  modalContent: string;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombreCompleto: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      nombreUsuario: [null, [Validators.required]],
      confirmarCorreo: [null, [Validators.required]],
      contrasena: [null, [Validators.required]],
      confirmarContrasena: [null, [Validators.required]]
    });
  }

  public crearCuenta(){
    this.modalTitle = "Hecho";
    this.modalContent = "Se creó correctamente la cuenta"
    this.modalComponent.openModal();
  }

}
