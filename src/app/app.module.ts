import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { LoginModule } from './containers/login/login.module';
import { SharedModule } from './components/shared.module';
import { EmpresasModule } from './containers/empresas/empresas.module';
import { EmpleadosModule } from './containers/empleados/empleados.module';
import { PedidosModule } from './containers/pedidos/pedidos.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    EmpresasModule,
    EmpleadosModule,
    PedidosModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
