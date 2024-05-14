import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { GestionNegociosComponent } from './componentes/gestion-negocios/gestion-negocios.component';
import { CrearNegocioComponent } from './componentes/crear-negocio/crear-negocio.component';
import { DetalleNegocioComponent } from './componentes/detalle-negocio/detalle-negocio.component';
import { RecuperarContrasenaComponent } from './componentes/recuperar-contrasena/recuperar-contrasena.component';
import { RestablecerContrasenaLinkComponent } from './componentes/restablecer-contrasena-link/restablecer-contrasena-link.component';
import { EliminarCuentaComponent } from './componentes/eliminar-cuenta/eliminar-cuenta.component';
import { EditarCuentaComponent } from './componentes/editar-cuenta/editar-cuenta.component';
import { ConsultarCuentaComponent } from './componentes/consultar-cuenta/consultar-cuenta.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';

export const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registro', component: RegistroComponent },
{ path: "gestion-negocios", component: GestionNegociosComponent },
{ path: "crear-negocio", component: CrearNegocioComponent },
{ path: "detalle-negocio/:codigo", component: DetalleNegocioComponent },
{ path: "recuperar-contrasena", component: RecuperarContrasenaComponent },
{ path: "recuperar-contrasena-link", component: RestablecerContrasenaLinkComponent },
{ path: "eliminar-cuenta", component: EliminarCuentaComponent },
{ path: "editar-cuenta", component: EditarCuentaComponent },
{ path: "consultar-cuenta", component: ConsultarCuentaComponent },
{ path: "mis-favoritos", component: FavoritosComponent },
{ path: "**", pathMatch: "full", redirectTo: "" }
];