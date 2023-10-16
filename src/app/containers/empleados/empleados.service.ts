import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { createHeader } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private empresaService : HttpClient) { };

   private url = 'http://localhost:5000/users';

    public bringUsers(){
      return this.empresaService.get<any>(this.url).pipe(
            catchError(error=> {
              return throwError(() => new Error(error))
            })
          )
      };

}
