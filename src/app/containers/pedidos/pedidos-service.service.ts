import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginService } from '../login/api.service';
import { cloudUrl, createHeader, localUrl } from 'src/app/utils';
import { NewPedidoInterface, PedidoInterface, PedidoMessage } from './pedidos.type';

@Injectable({
  providedIn: 'root',
})
export class PedidosServiceService {
  private userID!: number;

  constructor(
    private httpPedido: HttpClient,
    private userData: LoginService,
  ) {
    this.bringUserData();
  }

  private url = `${cloudUrl}/order/`;

  private bringUserData() {
    this.userData.getData().subscribe({
      next: (data) => (this.userID = data),
      error: (error) => {
        return error;
      },
      complete: () => {
        console.log('datos traidos en pedidos');
      },
    });
  }

  public getOrders(): Observable<PedidoInterface[]> {
    return this.httpPedido.get<PedidoInterface[]>(this.url).pipe(
      map((data) => {
        return data;
      }),
    );
  }

  public deleteOrder(data: number): Observable<PedidoMessage> {
    const altUrl = `${cloudUrl}/order/${data}`;
    return this.httpPedido.delete<PedidoMessage>(altUrl, createHeader()).pipe(
      map((data) => {
        return data;
      }),
    );
  }

  public createOrder(data: NewPedidoInterface): Observable<PedidoMessage> {
    return this.httpPedido.post<PedidoMessage>(this.url, data, createHeader()).pipe(
      map((data:PedidoMessage) => {
        return data;
      }),
    );
  }
}
