import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, throwError, catchError, BehaviorSubject } from 'rxjs';
import { UserData, loginData } from './login.types';
import { cloudUrl, localUrl } from 'src/app/utils';
@Injectable({
  providedIn: 'root',
})
export class LoginService implements OnDestroy {
  userData = new BehaviorSubject<any>(null);
  private url = `${cloudUrl}/users/@`;
  // private url = `${cloudUrl}/users/@`;

  constructor(private http: HttpClient) {}

  public login(userData: UserData): Observable<loginData> {
    this.url = this.url.replace('@', 'login');
    return this.http.post<loginData>(this.url, userData).pipe(catchError(this.handleError));
  }

  private handleError = (error: HttpErrorResponse) => {
    if (error.status === 0) {
      console.log('An error has occured', error.error);
    } else {
      console.log('An error has occured in our backend', error.status, error.error);
    }
    return throwError(() => new Error('Something went wrong, please try again'));
  };

  setData(data: unknown) {
    this.userData.next(data);
  }

  getData() {
    return this.userData.asObservable();
  }

  ngOnDestroy(): void {
    this.setData(null);
  }
}
