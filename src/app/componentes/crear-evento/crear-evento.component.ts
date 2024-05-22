import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventoDTO } from '../../dto/evento.dto';
import { EventoService } from '../../servicios/evento.service';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [ReactiveFormsModule, ModalInformacionComponent],
  templateUrl: './crear-evento.component.html',
  styleUrl: './crear-evento.component.css'
})
export class CrearEventoComponent {

  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;

  form: FormGroup;
  eventoDTO: EventoDTO;
  modalTitle: string;
  modalContent: string;

  constructor(private formBuilder: FormBuilder,
    private eventoService: EventoService
  ){
    this.form = this.formBuilder.group({
      nombre: [null],
      fechaInicio: [null],
      fechaFin: [null],
      descripcion: [null]
    });
  }

  public crearEvento() {
    this.llenarFiltrosCuenta(this.form.getRawValue());

    this.eventoService.crearEvento(this.eventoDTO).subscribe(resp => {
      if (resp.exitoso) {
        this.modalTitle = "Hecho";
        this.modalContent = resp.mensaje
        this.modalComponent.openModal();
      }
    }, error => {

    }
    );
  }

  private llenarFiltrosCuenta(formulario: any){
    this.eventoDTO.nombre = formulario.nombre;
    this.eventoDTO.fechaInicio = formulario.fechaInicio;
    this.eventoDTO.fechaFin = formulario.fechaFin;
    this.eventoDTO.descripcion = formulario.descripcion;
    this.eventoDTO.idLugar = "1";
  }
}
