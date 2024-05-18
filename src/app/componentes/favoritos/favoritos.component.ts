import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {

  cards = [
    { image: 'path/to/image1.jpg', name: 'Card 1', rating: 4, description: 'This is the description for card 1' },
    { image: 'path/to/image2.jpg', name: 'Card 2', rating: 5, description: 'This is the description for card 2' },
    { image: 'path/to/image3.jpg', name: 'Card 3', rating: 3, description: 'This is the description for card 3' },
    { image: 'path/to/image4.jpg', name: 'Card 4', rating: 4, description: 'This is the description for card 4' },
    { image: 'path/to/image5.jpg', name: 'Card 5', rating: 5, description: 'This is the description for card 5' },
    { image: 'path/to/image6.jpg', name: 'Card 6', rating: 2, description: 'This is the description for card 6' },
    // Añade más cards según sea necesario
  ];

  getCardGroups() {
    const groups = [];
    for (let i = 0; i < this.cards.length; i += 3) {
      groups.push(this.cards.slice(i, i + 3));
    }
    return groups;
  }

}
