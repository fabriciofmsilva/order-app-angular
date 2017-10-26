import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Order } from '@app/core';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnChanges, OnInit {

  @Input()
  orders: Array<Order>;

  @Output()
  removeOrder = new EventEmitter();

  total: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.total = this.getTotal(changes.orders.currentValue);
    console.log(this.total);
  }

  onOrderRemove(orderId: string) {
    this.removeOrder.emit(orderId);
  }

  private getTotal(orders: Array<Order>) {
    return orders.reduce((total, order) => {
      return order.type === 'deposit' ? total + parseFloat(order.value) : total - parseFloat(order.value);
    }, 0);
  }

}
