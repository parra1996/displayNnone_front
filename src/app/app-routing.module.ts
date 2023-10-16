import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { EmpresasComponent } from './containers/empresas/empresas.component';
import { EmpleadosComponent } from './containers/empleados/empleados.component';
import { PedidosComponent } from './containers/pedidos/pedidos.component';
import { login } from './guards/login';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {
    path: 'empresas',
    component: EmpresasComponent,
    canActivate: [login]
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
    canActivate: [login]
},
  {path: 'empleados', component: EmpleadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  userData: User = {};

};

export interface User {
  token?:string,
  user?: any
}
