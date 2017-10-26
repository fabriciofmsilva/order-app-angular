import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Order } from '@app/core';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  @Input()
  orders: Array<Order>;

  @Output()
  removeOrder = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onOrderRemove(orderId: string) {
    this.removeOrder.emit(orderId);
  }

}
