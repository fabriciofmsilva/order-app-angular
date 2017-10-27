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
  @Output()
  sortOrders = new EventEmitter();

  total: number;
  sort = {
    by: 'createdAt',
    up: false
  };

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    this.total = this.getTotal(changes.orders.currentValue);
  }

  onOrderRemove(orderId: string) {
    this.removeOrder.emit(orderId);
  }

  trackOrder(index, order) {
    return order ? order.id : undefined;
  }

  getOrderType(orderType: string) {
    return orderType === 'withdraw' ? 'Saque' : 'Depósito';
  }

  setSort(sort: string) {
    if (this.sort.by === sort) {
      this.sort.up = !this.sort.up;
    } else {
      this.sort.by = sort;
      this.sort.up = false;
    }
    this.sortOrders.emit(this.sort);
  }

  getTotal(orders: Array<Order>) {
    return orders.reduce((total, order) => {
      return total + parseFloat(order.value);
    }, 0);
  }

}
