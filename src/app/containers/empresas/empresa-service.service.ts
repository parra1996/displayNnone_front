import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { createHeader } from 'src/app/utils';
import { EmpresaType } from './empresas.types';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private empresaService : HttpClient) { };

   private url = 'http://localhost:5000/company';

 public bringCompanies(){
   return this.empresaService.get<any>(this.url).pipe(
        catchError(error=> {
          return throwError(() => new Error(error))
        })
      )
  };

   public createOrder(data:EmpresaType): Observable<string>{
    return this.empresaService.post<string>(this.url, data, createHeader())
    .pipe(
       map(data=> {
        return data;
       })
    )
  }

    public deleteOrder(data:number):Observable<any>{
    const altUrl = `http://localhost:5000/company/${data}`

    return this.empresaService.delete<string>(altUrl, createHeader())
    .pipe(
       map(data=> {
        return(data)
       })
    )
    
  }

  public updateCompanie(data:number, body:EmpresaType): Observable<any>{
    const altUrl = `http://localhost:5000/company/${data}`
    return this.empresaService.put<string>(altUrl,body, createHeader())
    .pipe(
       map(data=> {
        return(data)
       })
    )
  }


}
