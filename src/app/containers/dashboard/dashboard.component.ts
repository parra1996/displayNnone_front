import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LoginService } from '../login/api.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

 private route = inject(Router);
 public isConnected: boolean = false; 

  constructor(
    private userData : LoginService,
    ){
    this.userData.getData().subscribe({
      next: data=> {
        this.isUserConnected(data)
      },
      error: errorData => {
        return (errorData)
      },
    })
  };

  private isUserConnected = (isConnected:boolean) => {
    const token = sessionStorage.getItem('token'); // TODO
    if(isConnected && token) this.isConnected = true;
    else this.isConnected = false
  }

  public signOut(){
    sessionStorage.removeItem('token');
    this.userData.setData(null);
    this.isConnected = false;
    this.route.navigateByUrl('/login')
  }

  ngOnDestroy(){
    this.signOut();
  }

}
