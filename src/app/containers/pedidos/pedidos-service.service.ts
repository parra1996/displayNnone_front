import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { LoginService } from '../login/api.service';
import { createHeader } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class PedidosServiceService  {

  private userID:any;

  constructor(
    private httpPedido: HttpClient,
    private userData: LoginService
    ) {
      this.bringUserData()
    }

   private url = 'http://localhost:5000/order/';

  private bringUserData(){
    this.userData.getData().subscribe({
      next: data=> this.userID = data,
      error: error=> {
        console.log(error)
      },
      complete:()=> {
        console.log('datos traidos en pedidos')
      }
    })
  };

  public getOrders(): Observable<any>{
      return this.httpPedido.get<any>(this.url).pipe(
        catchError(error=> {
          return throwError(() => new Error(error))
        })
      )
  };

  public deleteOrder(data:any = null):Observable<any>{
    const userID = this.userID.id
    const altUrl = `http://localhost:5000/order/${data}/${userID}`

    return this.httpPedido.delete<any>(altUrl, createHeader())
    .pipe(
       map(data=> {
        console.log(data)
       })
    )
    
  }

  public createOrder(data:any): Observable<any>{
    console.log(data)
    return this.httpPedido.post<any>(this.url, data, createHeader())
    .pipe(
       map(data=> {
        console.log(data)
       })
    )
  }
}
