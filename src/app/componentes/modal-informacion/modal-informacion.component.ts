import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-informacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-informacion.component.html',
  styleUrl: './modal-informacion.component.css'
})
export class ModalInformacionComponent {

  @Input() title: string = '';
  @Input() content: string = '';

  public showModal: boolean = false;

  constructor() { }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
