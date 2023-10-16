import { Component, OnInit } from '@angular/core';
import { EmpresaService} from './empresa-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit{
  public title: string = "Empresas";
  public isLoading: boolean = false;
  public body = {
    name: new FormControl(''),
    zip: new FormControl('')
  }
  public tableRows = [
    "name",
    "updateName",
    "zip",
    "updateZip",
    "delete",
    "update"
  ];
  public companies: any
  public newCompanie: FormGroup;

  constructor(
    private empresaService : EmpresaService
  ){
   this.newCompanie = new FormGroup({
    name: new FormControl(''),
    zip: new FormControl('')
   })
  }

  ngOnInit(): void {
    this.bringCompanies();
  };

  private bringCompanies():void{
    this.isLoading = true
    this.empresaService.bringCompanies().subscribe({
      next: allOrders => {
        this.companies = allOrders;
      },
      error: error=>{
        console.log(error)
      },
      complete: ()=> 
      this.isLoading = false
    })
  }

    public deleteCompanie(data:any){

    this.empresaService.deleteOrder(data).subscribe({
      next: orderDelete=> {
      },
      error: orderDeleteError => {
        console.log(orderDeleteError)
      },
      complete: ()=> {
        this.bringCompanies();
      }
    })
  }

  public updateCompanie(data:any):void {
    const body = {
      name: this.body.name.value,
      zip: this.body.zip.value,
    }
     this.empresaService.updateCompanie(data,body)
     .subscribe({
      next: companieDelete=> {
      },
      error: orderDeleteError => {
        console.log(orderDeleteError)
      },
      complete: ()=> {
        this.bringCompanies();
        this.body.name.reset();
        this.body.zip.reset();
      }
    })
  }

  public createCompanie():void {
    this.isLoading = true;
     this.empresaService.createOrder(this.newCompanie.value).subscribe({
      next: data=> {
      },
      error: error=> {
        this.isLoading = false;
        console.log(error)
      },
      complete:()=> {
        this.isLoading = false;
        this.bringCompanies();
        this.newCompanie.reset();
      }
     })
  }
}
