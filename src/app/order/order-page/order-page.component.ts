import { Component, OnInit } from '@angular/core';

import { Order } from '@app/core';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  orders: Array<Order> = [];

  constructor() { }

  ngOnInit() {
    this.orders.push(
      {
        id: '1',
        value: '12',
        type: 'withdraw'
      },
      {
        id: '2',
        value: '15',
        type: 'deposit'
      },
      {
        id: '3',
        value: '20',
        type: 'deposit'
      }
    );
  }

  addOrder(order: Order) {
    this.orders = [ ...this.orders, order ];
  }

  removeOrder(orderId: string) {
    this.orders = this.orders.filter((order) => {
      return order.id !== orderId;
    });
  }

}
