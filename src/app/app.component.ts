import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './componentes/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TokenService } from './servicios/token.service';
import { ModalInformacionComponent } from './componentes/modal-informacion/modal-informacion.component';
import { LoginComponent } from './componentes/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent, ReactiveFormsModule, HttpClientModule, CommonModule, ModalInformacionComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'unilocal_web';
  footer = 'Universidad del Quindío - 2024-1';
  isLoggedIn: boolean = false;
  userRole: string = '';
  userName: string = '';
  @ViewChild(ModalInformacionComponent) modalComponent: ModalInformacionComponent;
  modalTitle: string;
  modalContent: string;

  constructor(private router: Router,
		private route: ActivatedRoute,
    private tokenService: TokenService
){}

  ngOnInit(): void {
    this.validarSesion();
  }

  public irALogin(){
    this.router.navigate(['/login'], { relativeTo: this.route.parent });
  }

  public irARegistro(){
    this.router.navigate(['/registro'], { relativeTo: this.route.parent });
  }

  public irAGestionarNegocios() {
    this.router.navigate(['/gestion-negocios'], { relativeTo: this.route.parent });
  }

  public irAInicio(){
    this.router.navigate(['/'], { relativeTo: this.route.parent });
  }

  public irAMisFavoritos(){
    this.router.navigate(['/mis-favoritos'], { relativeTo: this.route.parent });
  }

  private validarSesion(){
    if (this.tokenService.isLogged()) {
      this.isLoggedIn = true;
      const token = this.tokenService.getToken();
      if (token) {
        const tokenPayload = this.tokenService.decodePayload(token);
        this.userName = tokenPayload.nombre;
        this.userRole = tokenPayload.rol;
      } else {
        this.modalTitle = "Error";
        this.modalContent = "Se ha presentado un error técnico";
        this.modalComponent.openModal();
      }
    }
  }

  public cerrarSesion(){
    this.tokenService.logout();
    this.userName = '';
    this.userRole = '';
    this.router.navigate(['/'], { relativeTo: this.route.parent });
  }

  public irAConsultarPerfil(){
    this.router.navigate(['/consultar-cuenta'], { relativeTo: this.route.parent });
  }

  public irAGestionarLugares(){
    this.router.navigate(['/gestion-negocios'], { relativeTo: this.route.parent });
  }

  public irAMisReservas(){
    this.router.navigate(['/mis-reservas'], { relativeTo: this.route.parent });
  }
}
