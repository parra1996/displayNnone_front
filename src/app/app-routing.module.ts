import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { EmpresasComponent } from './containers/empresas/empresas.component';
import { EmpleadosComponent } from './containers/empleados/empleados.component';
import { PedidosComponent } from './containers/pedidos/pedidos.component';
import { login } from './guards/login';
import { LoginService } from './containers/login/api.service';
import { isAuthorized } from './guards/isAuth';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'empresas',
    component: EmpresasComponent,
    canActivate: [login]
  },
  {path: 'pedidos', component: PedidosComponent},
  {path: 'empleados', component: EmpleadosComponent},
  // {path: '', redirectTo:'/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  userData: User = {};

  // constructor(private userRole: LoginService,){
  //    this.userRole.getData().subscribe({
  //       next: user => {
  //         if(user !== undefined){
  //           console.log(user)
  //           this.userData! = user;
  //         }
  //       },
  //       error: userError => {
  //         console.log(userError)
  //       }
  //     }) }
};

export interface User {
  token?:string,
  user?: any
}
