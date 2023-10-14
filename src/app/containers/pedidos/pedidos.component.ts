import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { PedidosServiceService } from './pedidos-service.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  public title:string = 'Envios';
  public orders: any;

  public tableRows = [
    "addressee",
    "adreesseeEmail",
    "clientEmail",
    "clientLastname",
    "clientName",
    "companyEmail",
    "name",
    "price",
    "weight",
    "pedrito"
  ]

  constructor(
    private pedidoService : PedidosServiceService
  ){}

  ngOnInit(): void {
    this.bringOrders()
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if(changes['orders'] && this.orders){
  //     this.bringOrders();
  //   }
  // }
  private bringOrders(){
    this.pedidoService.getOrders().subscribe({
      next: allOrders => {
        this.orders = allOrders;
      },
      error: error=>{
        console.log(error)
      },
      complete: ()=> console.log('Ordenes traidas')
    })
  }

  public deleteOrder(data:any){
    this.pedidoService.deleteOrder(data).subscribe({
      next: orderDelete=> {
      },
      error: orderDeleteError => {
        console.log(orderDeleteError)
      },
      complete: ()=> {
        this.bringOrders();
      }
    })
  }

}
