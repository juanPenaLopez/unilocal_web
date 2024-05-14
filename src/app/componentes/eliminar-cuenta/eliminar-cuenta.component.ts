import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';

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

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      motivo: [null],
      contasena: [null]
    });
  }

  onEliminarCuenta(){
    this.modalTitle = "Hecho";
    this.modalContent = "Se eliminó correctamente la cuenta";
    this.modalComponent.openModal();
  }
}
