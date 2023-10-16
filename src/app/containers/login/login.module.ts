import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/components/shared.module';
import { LoginRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent,
    LoginRoutingModule
  ]
})
export class LoginModule { }
