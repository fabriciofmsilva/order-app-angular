import { Component, OnInit } from '@angular/core';

import { OrderModel } from '@app/core';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  orders: Array<OrderModel>;

  constructor() { }

  ngOnInit() {
  }

  addOrder(order: OrderModel) {
    console.log(order);
  }

}
