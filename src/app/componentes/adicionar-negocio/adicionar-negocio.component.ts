import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalConfirmacionComponent } from '../modal-confirmacion/modal-confirmacion.component';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';
import { LugarDTO } from '../../dto/lugar.dto';
import { NegociosService } from '../../servicios/negocios.service';
import { ImagenService } from '../../servicios/imagen.service';
import { CommonModule } from '@angular/common';
import { HorarioDTO } from '../../dto/horario.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { CrearLugarDTO } from '../../dto/crear.lugar.dto';
import { CategoriaLugarEnum } from '../../enums/CategoriaLugarEnum';


@Component({
  selector: 'app-adicionar-negocio',
  standalone: true,
  imports: [ReactiveFormsModule, ModalConfirmacionComponent, CommonModule, FormsModule, ModalInformacionComponent],
  templateUrl: './adicionar-negocio.component.html',
  styleUrls: ['./adicionar-negocio.component.css']
})
export class AdicionarNegocioComponent implements OnInit {

  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;
  crearLugarDTO: CrearLugarDTO;
  form: FormGroup;

  private adicionarNegocio: LugarDTO;

  modalTitle: string;
  modalContent: string;
  selectedFile: File;
  horarios: Array<HorarioDTO> = [];
  categorias: { key: string, value: string }[] = [];

  constructor(private formBuilder: FormBuilder,
    private negociosService: NegociosService,
    private imagenService: ImagenService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      categoria: [null, [Validators.required]],
      telefonos: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
    });

    this.adicionarNegocio = new LugarDTO();
    this.crearLugarDTO = new CrearLugarDTO();
  }

  ngOnInit(): void {
    this.categorias = this.getEnumValues(CategoriaLugarEnum);
  }

  addRow() {
    let horarioDTO = new HorarioDTO();
    this.horarios.push(horarioDTO);
  }

  removeRow(index: number) {
    this.horarios.splice(index, 1);
  }

  public crearLugar() {
    this.llenarFiltros(this.form.getRawValue());

    this.negociosService.crearLugar(this.crearLugarDTO).subscribe({
      next: (resp) => {
        if (resp.exitoso) {
          this.modalTitle = "Hecho";
          this.modalContent = resp.mensaje;
        } else {
          this.modalTitle = "Error";
          this.modalContent = "Se ha presentado un error técnico";
        }
        this.modalComponent.openModal();
      },
      error: (error) => {
        this.modalTitle = "Error";
        this.modalContent = "Se ha presentado un error técnico";
        this.modalComponent.openModal();
      }
    });
  }

  private llenarFiltros(formulario: any) {
    this.crearLugarDTO.nombre = formulario.nombre;
    this.crearLugarDTO.categoriaLugar = formulario.categoria;
    this.crearLugarDTO.descripcion = formulario.descripcion;
  }

  private getEnumValues(enumObj: any): { key: string, value: string }[] {
    return Object.keys(enumObj).map(key => ({
      key: key,
      value: enumObj[key]
    }));
  }

  ngAfterViewInit() {
    this.modalComponent.close.subscribe(() => {
      this.router.navigate(['/gestion-negocios'], { relativeTo: this.route.parent });
    });
  }
}
