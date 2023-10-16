import { Component, OnInit } from '@angular/core';
import {  LoginService } from './api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
        username:new  FormControl('', Validators.required),
        password:new  FormControl('', [Validators.required, Validators.minLength(6)]),
      });
      this.loginService.getData().subscribe({
        next: user=> {
        }
      });
    }

  public Login(){
    const formData = this.form.value;
    this.isLoading = true;
    this.loginService.login(formData).subscribe({
      next: (data)=> {
        sessionStorage.setItem('token', data.token);
        this.data = data.user;
      },
      error: errorData => {
        this.error = true;
        this.errorMessage = errorData;
        this.isLoading = false;
      },
      complete: ()=> {
        console.log('Login succesfully');
        this.loginService.setData(this.data);
        this.isLoading = false;
        this.navigate.navigateByUrl('/');
        this.form.reset()
      }
    })

  }

  get username(){
    return this.form.get('username') as FormControl;
  }
  get password(){
    return this.form.get('password') as FormControl;
  }
}
