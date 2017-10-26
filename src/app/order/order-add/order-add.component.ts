import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';

import {
  Order,
  UuidService
} from '@app/core';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit {

  @Output()
  addOrder = new EventEmitter();

  orderForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private uuid: UuidService
  ) { }

  ngOnInit() {
    this.orderForm = this.initOrderForm();
  }

  onOrderFormSubmit(order: Order) {
    const orderToSend = { ...order, createdAt: moment().valueOf() };
    this.addOrder.emit(orderToSend);
    this.orderForm = this.initOrderForm();
  }

  private initOrderForm() {
    return this.formBuilder.group({
      id: [
        `${this.uuid.get()}`
      ],
      type: [
        'withdraw'
      ],
      value: [
        null,
        [ Validators.required ]
      ],
      createdAt: [
        null
      ]
    });
  }

}
