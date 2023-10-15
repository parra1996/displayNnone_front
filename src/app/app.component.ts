import { Component, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'displayNoneFront';

 private route = inject(Router);
  

  ngOnDestroy(): void {
    this.route.navigateByUrl('/login');
    sessionStorage.removeItem('token');
  }
}
