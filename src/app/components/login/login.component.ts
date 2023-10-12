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
   public form: FormGroup;
   public data: unknown;
   dataService$!: Subscription;

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
    this.loginService.login(formData).subscribe({
      next: (data)=> {
        localStorage.setItem('token', data.token);
        this.loginService.setData(data);
      },
      error: errorData => {
        console.log(errorData)
      },
      complete: ()=> {
        console.log('Login succesfully');
        this.navigate.navigateByUrl('/');
        this.form.reset()
      }
    })

  }
}
