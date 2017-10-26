import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

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
        id: '3',
        value: '20',
        type: 'deposit',
        createdAt: moment().valueOf()
      },
      {
        id: '2',
        value: '15',
        type: 'deposit',
        createdAt: moment().subtract(1, 'days').valueOf()
      },
      {
        id: '1',
        value: '-12',
        type: 'withdraw',
        createdAt: moment().subtract(2, 'days').valueOf()
      }
    );
  }

  addOrder(order: Order) {
    this.orders = [ order, ...this.orders ];
  }

  removeOrder(orderId: string) {
    this.orders = this.orders.filter((order) => {
      return order.id !== orderId;
    });
  }

}
