import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservasService } from '../../servicios/reservas.service';
import { CrearReservaDTO } from '../../dto/crear.reserva.dto';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';
import { ModalConfirmacionComponent } from '../modal-confirmacion/modal-confirmacion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-reserva',
  standalone: true,
  imports: [ReactiveFormsModule, ModalInformacionComponent, ModalConfirmacionComponent, CommonModule],
  templateUrl: './crear-reserva.component.html',
  styleUrl: './crear-reserva.component.css'
})
export class CrearReservaComponent {

  form: FormGroup;
  crearReservaDTO: CrearReservaDTO;
  modalTitle: string;
  modalContent: string;
  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;
  @ViewChild(ModalConfirmacionComponent) modalConfirmacion: ModalConfirmacionComponent;
  showConfirmationModal = false;
  modalTitleConfirmacion: string;
  modalContentConfirmacion: string;

  constructor(private formBuilder: FormBuilder,
    private reservaService: ReservasService
  ) {
    this.form = this.formBuilder.group({
      fechaReserva: [null, [Validators.required]],
      horaReserva: [null, [Validators.required]],
      cantidadPersonas: [null, [Validators.required]],
      descripcion: [null, {disabled: true}]
    });

    this.crearReservaDTO = new CrearReservaDTO();
  }

  public reservar(){
    let valoresFormulario = this.form.getRawValue();
    this.crearReservaDTO.idLugar = "1";
    this.crearReservaDTO.idUsuario = "11";
    this.crearReservaDTO.fechaReserva = valoresFormulario.fechaReserva;
    this.crearReservaDTO.horaReserva = valoresFormulario.horaReserva;
    this.crearReservaDTO.cantidadPersonas = valoresFormulario.cantidadPersonas;

    this.modalTitleConfirmacion = "Confirmación";
    this.modalContentConfirmacion = "¿Estás seguro de que deseas crear la reserva?";
    this.modalConfirmacion.openModal();
  }


  onConfirmation(confirmed: boolean) {
    this.modalConfirmacion.closeModal();
    if (confirmed) {
      this.reservaService.crearReserva(this.crearReservaDTO).subscribe(resp => {
        if(resp.exitoso){
          this.modalTitle = "Hecho";
          this.modalContent = resp.mensaje;
          this.modalComponent.openModal();
        }
      }, error => {
  
      });
    }
  }
}
