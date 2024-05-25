import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() close = new EventEmitter<void>();

  public showModal: boolean = false;

  constructor() { }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.close.emit();
  }

}
