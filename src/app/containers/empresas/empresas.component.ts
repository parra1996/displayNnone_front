import { Component, OnInit } from '@angular/core';
import { EmpresaService } from './empresa-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SnackbarService } from 'src/app/snackbar.service';
import { EmpresaType } from './empresas.types';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent implements OnInit {
  public title: string = 'Empresas';
  public isLoading: boolean = false;
  public body = {
    name: new FormControl(''),
    zip: new FormControl(''),
  };
  public tableRows = ['name', 'updateName', 'zip', 'updateZip', 'delete', 'update'];
  public companies: EmpresaType[] = [];
  public newCompanie: FormGroup;
  public companyMessage: string = '';

  constructor(
    private empresaService: EmpresaService,
    private snackbar: SnackbarService,
  ) {
    this.newCompanie = new FormGroup({
      name: new FormControl(''),
      zip: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.bringCompanies();
  }

  private bringCompanies(): void {
    this.isLoading = true;
    this.empresaService.bringCompanies().subscribe({
      next: (allOrders) => {
        this.companies = allOrders;
      },
      error: (error) => {
        return error;
      },
      complete: () => (this.isLoading = false),
    });
  }

  public deleteCompanie(data: number) {
    this.empresaService.deleteOrder(data).subscribe({
      next: (orderDelete) => {
        this.companyMessage = orderDelete.message;
      },
      error: (orderDeleteError) => {
        return orderDeleteError;
      },
      complete: () => {
        this.bringCompanies();
        this.snackbar.open({
          message: this.companyMessage,
        });
      },
    });
  }

  public updateCompanie(data: number): void {
    const body: EmpresaType = {
      name: this.body.name.value as string,
      zip: this.body.zip.value as string,
    };
    this.empresaService.updateCompanie(data, body).subscribe({
      next: (companieUpdated) => {
        this.companyMessage = companieUpdated.message;
      },
      error: (orderDeleteError) => {
        console.log(orderDeleteError);
      },
      complete: () => {
        this.bringCompanies();
        this.body.name.reset();
        this.body.zip.reset();
        this.snackbar.open({ message: this.companyMessage});
      },
    });
  }

  public createCompanie(): void {
    this.isLoading = true;
    this.empresaService.createOrder(this.newCompanie.value).subscribe({
      next: (data) => {
        this.companyMessage = data.message;
        console.log(typeof data);
      },
      error: (error) => {
        this.isLoading = false;
        this.snackbar.open({ message: error.message });
      },
      complete: () => {
        this.isLoading = false;
        this.bringCompanies();
        this.newCompanie.reset();
        this.snackbar.open({ message: this.companyMessage });
      },
    });
  }
}
