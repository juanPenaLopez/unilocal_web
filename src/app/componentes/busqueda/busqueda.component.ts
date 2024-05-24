import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  searchTerm: string = '';

  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(): void {
    this.searchChange.emit(this.searchTerm);
  }

}
