import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { LoginService } from '../login/api.service';
import { cloudUrl, createHeader } from 'src/app/utils';
import { NewPedidoInterface } from './pedidos.type';

@Injectable({
  providedIn: 'root'
})
export class PedidosServiceService  {

  private userID!:number;

  constructor(
    private httpPedido: HttpClient,
    private userData: LoginService
    ) {
      this.bringUserData()
    }

   private url = `${cloudUrl}/order/`

  private bringUserData(){
    this.userData.getData().subscribe({
      next: data=> this.userID = data,
      error: error=> {
        return(error)
      },
      complete:()=> {
        console.log('datos traidos en pedidos')
      }
    })
  };

  public getOrders(): Observable<any>{
      return this.httpPedido.get<string>(this.url).pipe(
        catchError(error=> {
          return throwError(() => new Error(error))
        })
      )
  };

  public deleteOrder(data:number):Observable<any>{
    const altUrl = `${cloudUrl}/order/${data}`;
    return this.httpPedido.delete<string>(altUrl, createHeader())
    .pipe(
       map(data=> {
        return data
       })
    )
    
  }

  public createOrder(data:NewPedidoInterface): Observable<any>{
    return this.httpPedido.post<string>(this.url, data, createHeader())
    .pipe(
       map(data=> {
        return data
       })
    )
  }
}
