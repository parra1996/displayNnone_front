import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos.component';
import { SharedModule } from 'src/app/components/shared.module';
import { PedidosRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [PedidosComponent],
  imports: [CommonModule, SharedModule, PedidosRoutingModule],
  exports: [PedidosComponent, PedidosRoutingModule],
})
export class PedidosModule {}
