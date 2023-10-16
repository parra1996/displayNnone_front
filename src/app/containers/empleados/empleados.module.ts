import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados.component';
import { SharedModule } from 'src/app/components/shared.module';
import { EmpleadosRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    EmpleadosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmpleadosRoutingModule
  ],
  exports: [
    EmpleadosComponent,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
