import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../servicios/mapa.service';
import { BusquedaComponent } from '../busqueda/busqueda.component';
import { CommonModule } from '@angular/common';
import { CuadroComponent } from '../cuadro/cuadro.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BusquedaComponent, CommonModule, CuadroComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  constructor(private mapaService: MapaService) { }

  cards = [
    { image: 'path/to/image1.jpg', name: 'Card 1', rating: 4, description: 'This is the description for card 1' },
    { image: 'path/to/image2.jpg', name: 'Card 2', rating: 5, description: 'This is the description for card 2' },
    { image: 'path/to/image3.jpg', name: 'Card 3', rating: 3, description: 'This is the description for card 3' },
    { image: 'path/to/image4.jpg', name: 'Card 4', rating: 4, description: 'This is the description for card 4' },
    { image: 'path/to/image5.jpg', name: 'Card 5', rating: 5, description: 'This is the description for card 5' },
    { image: 'path/to/image6.jpg', name: 'Card 6', rating: 2, description: 'This is the description for card 6' },
    // Añade más cards según sea necesario
  ];

  cuadros = [
    { imagenSrc: 'https://res.cloudinary.com/ddvhflywy/image/upload/f_auto,q_auto/v1/unilocal/vixysoa5agsl65sxra9m', nombre: 'PANADERÍA' },
    { imagenSrc: 'https://res.cloudinary.com/ddvhflywy/image/upload/f_auto,q_auto/v1/unilocal/k2prvgazrhxmqm4zaasi', nombre: 'BAR' },
    { imagenSrc: 'https://res.cloudinary.com/ddvhflywy/image/upload/f_auto,q_auto/v1/unilocal/pt9z8cb5uzpvggpjkvph', nombre: 'CAFETERÍA' },
    { imagenSrc: 'https://res.cloudinary.com/ddvhflywy/image/upload/f_auto,q_auto/v1/unilocal/jzok79mkotrjf0feyewb', nombre: 'RESTAURANTE' },
    { imagenSrc: 'https://res.cloudinary.com/ddvhflywy/image/upload/f_auto,q_auto/v1/unilocal/b9beajecf9kikka2ndvp', nombre: 'DISCOTECA' },
    { imagenSrc: 'https://res.cloudinary.com/ddvhflywy/image/upload/f_auto,q_auto/v1/unilocal/cnybizyfaxab10pofebp', nombre: 'OTRO' },
    { imagenSrc: 'https://res.cloudinary.com/ddvhflywy/image/upload/f_auto,q_auto/v1/unilocal/pzh0fdrx49x669c3rgai', nombre: 'SUPERMERCADO' },
    { imagenSrc: 'https://res.cloudinary.com/ddvhflywy/image/upload/f_auto,q_auto/v1/unilocal/ylpipdgaiocs12pjmhpm', nombre: 'TIENDA' }
  ];

  getCardGroups() {
    const groups = [];
    for (let i = 0; i < this.cards.length; i += 3) {
      groups.push(this.cards.slice(i, i + 3));
    }
    return groups;
  }

  ngOnInit(): void {
    //this.mapaService.crearMapa();
  }

  onSearch(searchTerm: string): void {

  }

}
