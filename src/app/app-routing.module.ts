import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { login } from './guards/login';

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
export class AppRoutingModule { }
