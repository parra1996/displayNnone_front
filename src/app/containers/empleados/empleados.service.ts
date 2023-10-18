import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  catchError, throwError } from 'rxjs';
import { cloudUrl,  } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  constructor(private empresaService: HttpClient) {}

  private url = `${cloudUrl}/users`;

  public bringUsers() {
    return this.empresaService.get<any>(this.url).pipe(
      catchError((error) => {
        return throwError(() => new Error(error));
      }),
    );
  }
}
