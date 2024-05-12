import { Component } from '@angular/core';
import { Data } from '../../dto/data';
import { TipoModalEnum } from '../../enums/TipoModalEnum';
import { ModalService } from '../../servicios/modal.service';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.css',
  providers: [ModalService]
})
export class RecuperarContrasenaComponent {

  constructor(private modalServicio: ModalService) {}

  public restablecerContrasena(){
    let dataInfoModal2: Data = new Data();
		dataInfoModal2.tipoModal = TipoModalEnum.CONFIRMATION;
		dataInfoModal2.mensaje = 'prueba'
		this.modalServicio.openModal(dataInfoModal2).subscribe(accion => {
			if (accion) {
			}
		});

  }

}
