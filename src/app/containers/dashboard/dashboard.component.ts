import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LoginService } from '../login/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy{

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
        console.log(errorData)
      },
    })
  };

  private isUserConnected = (isConnected:boolean) => {
    if(isConnected) this.isConnected = true;
    else this.isConnected = false
  }

  // ngOnInit(): void {
  //   console.log(this.isConnected)
  // }

  public signOut(){
    localStorage.removeItem('token');
    this.userData.setData(null);
    this.isConnected = false;
    this.route.navigateByUrl('/login')
  }

  ngOnDestroy(){
    this.signOut();
  }

}
