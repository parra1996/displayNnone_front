import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './empleados.service';
import { EmpleadoInterface } from './empleados.type';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit{
  public title: string = 'Empleados';
  isLoading:boolean = false;
  public tableRows = [
    "id",
    "username",
    "role",
  ];
  public users: EmpleadoInterface[] = [];

  constructor(
    private empleadosService : EmpleadoService
  ){}

  ngOnInit(): void {
    this.bringUsers();
  } 

  private bringUsers():void{
    this.isLoading = true;
    this.empleadosService.bringUsers()
    .subscribe({
      next: users => {
        this.users = users;
      },
      error: error=>{
        return(error)
      },
      complete: ()=> {
        this.isLoading = false;
      }
    })
  }
}
