import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { PedidosServiceService } from './pedidos-service.service';
import { transformDate } from 'src/app/utils';
import { FormControl, FormGroup } from '@angular/forms';
import { PedidoInterface } from './pedidos.type';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  public title:string = 'Envios';
  isLoading: boolean = false;
  public orders: PedidoInterface[] = [];
  public tableRows = [
    "clientName",
    "addressee",
    "direction",
    "zip",
    "price",
    "weight",
    "date",
    "order_type",
    "eliminate"
  ];
  public orderForm: FormGroup;
  public transformDate = transformDate;

  constructor(
    private pedidoService : PedidosServiceService
  ){
    this.orderForm = new FormGroup({
      direction: new FormControl(),
      zip: new FormControl(),  
      clientName: new FormControl(),
      addressee:new FormControl() , 
      weight:new FormControl() ,
      price:new FormControl() 
    });
  };

  ngOnInit(): void {
    this.bringOrders()
  }

  private bringOrders(){
    this.pedidoService.getOrders().subscribe({
      next: allOrders => {
        console.log(allOrders)
        this.orders = allOrders;
      },
      error: error=>{
        console.log(error)
      },
      complete: ()=> console.log('Ordenes traidas')
    })
  }

  public deleteOrder(data:number){
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
  public createOrder(){
    this.isLoading = true;
    this.calculateOrder(this.orderForm.value)
     this.pedidoService.createOrder(this.orderForm.value).subscribe({
      next: data=> {
      },
      error: error=> {
        this.isLoading = false;
        console.log(error)
      },
      complete:()=> {
        this.isLoading = false;
        this.bringOrders();
        this.orderForm.reset();
      }
     })
  }

  private calculateOrder(order:PedidoInterface){
    const { weight }: PedidoInterface= order;
    switch(true){
      case (weight <= 0.1):
        return this.orderForm.value.price = weight * 5, this.orderForm.value.order_type = 'paquete ultra ligero';
      case (weight >= 0.1 && weight <= 0.3):
        return this.orderForm.value.price = weight * 5 + 1, this.orderForm.value.order_type = 'paquete ligero';
      case (weight >= 0.3 && weight <= 5):
        return this.orderForm.value.price = weight * 10, this.orderForm.value.order_type = 'paquete estandar';
      case (weight >= 5 && weight <= 10):
          return this.orderForm.value.price = weight * 5 + weight + 75 , this.orderForm.value.order_type = 'paquete pesado';
      case (weight >= 10):
          return this.orderForm.value.price = (weight - 10) * 75 +130 + weight , this.orderForm.value.order_type = 'paquete pesado';
    }
  }

}
