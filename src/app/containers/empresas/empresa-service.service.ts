import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { createHeader } from 'src/app/utils';

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

   public createOrder(data:any): Observable<any>{
    console.log(data)
    return this.empresaService.post<any>(this.url, data, createHeader())
    .pipe(
       map(data=> {
        console.log(data)
       })
    )
  }

    public deleteOrder(data:any):Observable<any>{
    // const userID = this.userID.id
    const altUrl = `http://localhost:5000/company/${data}`

    return this.empresaService.delete<any>(altUrl, createHeader())
    .pipe(
       map(data=> {
        return(data)
       })
    )
    
  }

  public updateCompanie(data:any, body:any): Observable<any>{
    const altUrl = `http://localhost:5000/company/${data}`

    return this.empresaService.put<any>(altUrl,body, createHeader())
    .pipe(
       map(data=> {
        return(data)
       })
    )
  }


}
