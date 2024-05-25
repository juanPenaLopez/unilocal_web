import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../servicios/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NegociosService } from '../../servicios/negocios.service';
import { LugarDTO } from '../../dto/lugar.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultar-negocio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultar-negocio.component.html',
  styleUrl: './consultar-negocio.component.css'
})
export class ConsultarNegocioComponent implements OnInit {

  lugarDTOConsulta: LugarDTO;

  constructor(private tokenService: TokenService,
    private router: Router,
    private route: ActivatedRoute,
    private lugarService: NegociosService
  ) { }

  ngOnInit(): void {
    this.lugarDTOConsulta = new LugarDTO();
    this.lugarService.lugarSeleccionado.subscribe(lugar => {
      this.lugarDTOConsulta = lugar;
    });
    const textarea1 = document.getElementById('descripcion1') as HTMLTextAreaElement;
    textarea1.value = this.lugarDTOConsulta.descripcion;
  }

  public consultarImagenesLugar() {

  }

  public verUbicacionMapa() {

  }

  public crearReserva() {
    if (this.tokenService.isLogged()) {
      this.router.navigate(['/crear-reserva'], { relativeTo: this.route.parent });
    }
  }

  public irAGestionarLugares() {
    if (this.tokenService.isLogged()) {
      this.router.navigate(['/gestion-negocios'], { relativeTo: this.route.parent });
    }
  }

  public irAConsultarComentarios(){
    if (this.tokenService.isLogged()) {
      this.router.navigate(['/consultar-comentarios-lugar'], { relativeTo: this.route.parent });
    }
  }
}
