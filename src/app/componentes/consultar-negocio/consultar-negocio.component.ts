import { Component } from '@angular/core';
import { TokenService } from '../../servicios/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-consultar-negocio',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './consultar-negocio.component.html',
  styleUrl: './consultar-negocio.component.css'
})
export class ConsultarNegocioComponent {

  constructor(private tokenService: TokenService,
    private router: Router,
		private route: ActivatedRoute
  ) {}

  public consultarImagenesLugar(){

  }

  public verUbicacionMapa(){

  }

  public crearReserva(){
    if (this.tokenService.isLogged()) {
      this.router.navigate(['/crear-reserva'], { relativeTo: this.route.parent });
    }
  }

  public irAGestionarLugares(){
    if (this.tokenService.isLogged()) {
      this.router.navigate(['/gestion-negocios'], { relativeTo: this.route.parent });
    }
  }

}
