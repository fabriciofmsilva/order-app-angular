import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { Order } from '@app/core';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnChanges, OnInit {

  @Input()
  orders: Array<Order>;
  total: number;

  @Output()
  removeOrder = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.total = this.getTotal();
  }

  onOrderRemove(orderId: string) {
    this.removeOrder.emit(orderId);
  }

  private getTotal() {
    return this.orders.reduce((total, order) => {
      return order.type === 'deposit' ? total + parseFloat(order.value) : total - parseFloat(order.value);
    }, 0);
  }

}
