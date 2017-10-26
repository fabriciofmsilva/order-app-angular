import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UuidService } from '@app/core';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit {

  orderForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private uuid: UuidService
  ) { }

  ngOnInit() {
    this.orderForm = this.initOrderForm();
  }

  onOrderFormSubmit(order) {
    console.log(order);
  }

  private initOrderForm() {
    return this.formBuilder.group({
      id: [
        `${this.uuid.get()}`
      ],
      type: [
        'deposit'
      ],
      value: [
        '',
        [ Validators.required ]
      ]
    });
  }

}
