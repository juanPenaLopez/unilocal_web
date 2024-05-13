import { Component, ViewChild } from '@angular/core';
import { ModalInformacionComponent } from '../modal-informacion/modal-informacion.component';

@Component({
  selector: 'app-restablecer-contrasena-link',
  standalone: true,
  imports: [ModalInformacionComponent],
  templateUrl: './restablecer-contrasena-link.component.html',
  styleUrl: './restablecer-contrasena-link.component.css'
})

export class RestablecerContrasenaLinkComponent {

  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;

  modalTitle: string;
  modalContent: string;

  public restablecerContrasena(){
    this.modalTitle = "Confirmación exitosa";
    this.modalContent = "Tu proceso de restablecimiento de contraseña fue exitoso. Por favor inicie sesión con la nueva contraseña"
    this.modalComponent.openModal();
  }

}
