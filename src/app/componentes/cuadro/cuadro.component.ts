import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  standalone: true,
  imports: [],
  templateUrl: './cuadro.component.html',
  styleUrl: './cuadro.component.css'
})
export class CuadroComponent {

  @Input() imagenSrc: string;
  @Input() nombre: string;

}
