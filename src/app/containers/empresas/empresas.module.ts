import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas.component';
import { SharedModule } from 'src/app/components/shared.module';
import { EmpresasRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [EmpresasComponent],
  imports: [CommonModule, SharedModule, EmpresasRoutingModule],
  exports: [EmpresasComponent, EmpresasRoutingModule],
})
export class EmpresasModule {}
