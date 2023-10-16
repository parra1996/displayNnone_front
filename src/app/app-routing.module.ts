import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { login } from './guards/login';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./containers/home/home.module').then( m=> m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: ()=> import('./containers/login/login.module').then( m=> m.LoginModule)
  },
  {
    path: 'empresas',
    loadChildren: ()=> import('./containers/empresas/empresas.module').then( m=> m.EmpresasModule),
    canActivate: [login]
  },
  {
    path: 'pedidos',
    loadChildren: ()=> import('./containers/pedidos/pedidos.module').then( m=> m.PedidosModule),
    canActivate: [login]
},
  {
    path: 'empleados',
    loadChildren: ()=> import('./containers/empleados/empleados.module').then( m=> m.EmpleadosModule),
    canActivate: [login]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};