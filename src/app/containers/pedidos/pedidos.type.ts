export interface PedidoInterface {
  addressee: string;
  clientName: string;
  companyName: string;
  createdAt: string;
  direction: string;
  id: number;
  order_type: string;
  price: number;
  weight: number;
  zip: string;
}

export interface NewPedidoInterface {
  addressee: string;
  clientName: string;
  direction: string;
  order_type: string;
  price: number;
  weight: number;
  zip: string;
}
