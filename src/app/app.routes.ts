import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { GestionNegociosComponent } from './componentes/gestion-negocios/gestion-negocios.component';
import { RecuperarContrasenaComponent } from './componentes/recuperar-contrasena/recuperar-contrasena.component';
import { RestablecerContrasenaLinkComponent } from './componentes/restablecer-contrasena-link/restablecer-contrasena-link.component';
import { EliminarCuentaComponent } from './componentes/eliminar-cuenta/eliminar-cuenta.component';
import { EditarCuentaComponent } from './componentes/editar-cuenta/editar-cuenta.component';
import { ConsultarCuentaComponent } from './componentes/consultar-cuenta/consultar-cuenta.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { CrearEventoComponent } from './componentes/crear-evento/crear-evento.component';
import { CrearReservaComponent } from './componentes/crear-reserva/crear-reserva.component';
import { AdicionarNegocioComponent } from './componentes/adicionar-negocio/adicionar-negocio.component';
import { ConsultarMisReservasComponent } from './componentes/consultar-mis-reservas/consultar-mis-reservas.component';

export const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registro', component: RegistroComponent },
{ path: "gestion-negocios", component: GestionNegociosComponent },
{ path: "crear-negocio", component: AdicionarNegocioComponent },
{ path: "recuperar-contrasena", component: RecuperarContrasenaComponent },
{ path: "recuperar-contrasena-link", component: RestablecerContrasenaLinkComponent },
{ path: "eliminar-cuenta", component: EliminarCuentaComponent },
{ path: "editar-cuenta", component: EditarCuentaComponent },
{ path: "consultar-cuenta", component: ConsultarCuentaComponent },
{ path: "mis-favoritos", component: FavoritosComponent },
{ path: "crear-evento", component: CrearEventoComponent },
{ path: "crear-reserva", component: CrearReservaComponent },
{ path: "mis-reservas", component: ConsultarMisReservasComponent },
{ path: "**", pathMatch: "full", redirectTo: "" }
];