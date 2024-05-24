import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ModalConfirmacionComponent } from '../modal-confirmacion/modal-confirmacion.component';
import { LugarDTO } from '../../dto/lugar.dto';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';
import { NegociosService } from '../../servicios/negocios.service';
import { CategoriaLugarEnum } from '../../enums/CategoriaLugarEnum';

@Component({
  selector: 'app-editar-negocio',
  standalone: true,
  imports: [ReactiveFormsModule, ModalConfirmacionComponent],
  templateUrl: './editar-negocio.component.html',
  styleUrl: './editar-negocio.component.css'
})
export class EditarNegocioComponent {

  form: FormGroup;
  actualizarNegocio: LugarDTO;
  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;
  modalTitle: string;
  modalContent: string;

  constructor(private formBuilder: FormBuilder,
    private negocioService: NegociosService
  ){
    this.form = this.formBuilder.group({
      nombre: [null, Validators.required],
      CategoriaLugarEnum: [],
      telefono: [null, Validators.required],
      descripcion: [null, Validators.required],
      dia: [null, Validators.required],
      horaInicio: [null, Validators.required],
      horaFin: [null, Validators.required],
    });
    this.actualizarNegocio = new LugarDTO();
  }

  public editarNegocio() {
    if (this.tokenService.isLogged()) {
      const token = this.tokenService.getToken();
      if (token) {
        const decodedToken = this.tokenService.decodePayload(token);
        this.llenarFiltros(this.form.getRawValue(), decodedToken);
        this.negociosService.editarNegocio(this.actualizarNegocio).subscribe(respuesta => {
          if (respuesta.exitoso) {
            this.modalTitle = "Hecho";
            this.modalContent = "El negocio se actualizó correctamente";
            this.modalComponent.openModal();
            this.redireccionarPantallaPrincipal();
          }
        });
      } else {
        this.modalTitle = "Error";
        this.modalContent = "Se ha presentado un error técnico";
        this.modalComponent.openModal();
      }
    }
  }

  public redireccionarPantallaPrincipal() {
    this.router.navigate(['/'], { relativeTo: this.route.parent });
  }

  private llenarFiltros(formulario: any, token: any) {
    this.actualizarNegocio.id = token.id;
    this.actualizarNegocio.nombre = formulario.nombre;
    this.actualizarNegocio.categoria = formulario.CategoriaLugarEnum;
    this.actualizarNegocio.telefono = formulario.telefono;
    this.actualizarNegocio.descripcion = formulario.descripcion;
    this.actualizarNegocio.horaInicio = formulario.horaInicio;
    this.actualizarNegocio.horaFin = formulario.horaFin;
  }
}
