import { Component, OnInit } from '@angular/core';
import { LugarDTO } from '../../dto/lugar.dto';

@Component({
  selector: 'app-gestion-negocios',
  standalone: true,
  imports: [],
  templateUrl: './gestion-negocios.component.html',
  styleUrl: './gestion-negocios.component.css'
})
export class GestionNegociosComponent implements OnInit{

  lugarDTO: Array<LugarDTO> = [];

  ngOnInit(): void {
    
  }

  constructor(){
    
  }

}
