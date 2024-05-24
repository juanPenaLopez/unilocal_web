import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalConfirmacionComponent } from '../modal-confirmacion/modal-confirmacion.component';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';
import { LugarDTO } from '../../dto/lugar.dto';
import { NegociosService } from '../../servicios/negocios.service';
import { ImagenService } from '../../servicios/imagen.service';


@Component({
  selector: 'app-adicionar-negocio',
  standalone: true,
  imports: [ReactiveFormsModule, ModalConfirmacionComponent],
  templateUrl: './adicionar-negocio.component.html',
  styleUrl: './adicionar-negocio.component.css'
})
export class AdicionarNegocioComponent {

  @ViewChild(ModalConfirmacionComponent) modalComponent: ModalInformacionComponent;

  form: FormGroup;

  private adicionarNegocio: LugarDTO;

  modalTitle: string;
  modalContent: string;
  selectedFile: File;

  constructor(private formBuilder: FormBuilder,
    private negociosService: NegociosService,
    private imagenService: ImagenService
  ){
    this.form = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      categoria: [null, [Validators.required]],
      telefono: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      dia: [null, [Validators.required]],
      horaInicio: [null, [Validators.required]],
      horaFin: [null, [Validators.required]]
    });

    this.adicionarNegocio = new LugarDTO();
  }
/**  onConfirmation(confirmed: boolean) {
    this.modalConfirmacion.closeModal();
    if(confirmed) {
      this.negociosService.adicionarNegocio(this.adicionarNegocio).subscribe(resp => {
        if(resp.exitoso){
          this.modalTitle = "Hecho";
          this.modalContent = resp.mensaje;
          this.modalComponent.openModal();
        }
      }, error=> {

      });
    }
  }
   */
}

