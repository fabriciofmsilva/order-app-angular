import { Component, OnInit, ViewChild } from '@angular/core';

import * as moment from 'moment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Order } from '@app/core';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  @ViewChild('content')
  content: any;

  closeResult: string;
  orders: Array<Order> = [];

  constructor(
    private modalService: NgbModal
  ) { }

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
    this.open(this.content)
      .then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          if (this.closeResult.indexOf('Confirm') !== -1) {
            this.orders = this.orders.filter((order) => {
              return order.id !== orderId;
            });
          }
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  open(content) {
    return this.modalService.open(content).result;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
