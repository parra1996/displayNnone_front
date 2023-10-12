import { Component, OnDestroy, inject } from '@angular/core';
import { LoginService } from '../login/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy{

 private route = inject(Router);

  constructor(
    private userData : LoginService,
    ){
    this.userData.getData().subscribe({
      next: data=> {
        console.log(data)
      },
      error: errorData => {
        console.log(errorData)
      },
    })
  }

  public signOut(){
    localStorage.removeItem('token');
    this.userData.setData(null);
    this.route.navigateByUrl('/login')
  }

  ngOnDestroy(){
    this.signOut();
  }

}
