import { Component, OnInit } from '@angular/core';
import {  LoginService } from './api.service';
import { FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
    dataService$!: Subscription;

    public form: FormGroup;
    public data: unknown;
    public error: boolean = false;
    public errorMessage:string = '';
    public isLoading:boolean = false

  constructor(
    private loginService : LoginService,
    private navigate : Router,
    ){
      this.form = new FormGroup({
        username:new  FormControl(),
        password:new  FormControl(),
      }),
      this.loginService.getData().subscribe({
        next: user=> {
          console.log(user)
        }
      })
    }

  public Login(){
    const formData = this.form.value;
    this.isLoading = true;
    this.loginService.login(formData).subscribe({
      next: (data)=> {
        console.log(data)
        localStorage.setItem('token', data.token);
        this.loginService.setData(data);
      },
      error: errorData => {
        this.error = true;
        this.errorMessage = errorData;
        this.isLoading = false;
      },
      complete: ()=> {
        console.log('Login succesfully');
        this.isLoading = false;
        this.navigate.navigateByUrl('/');
        this.form.reset()
      }
    })

  }
}
