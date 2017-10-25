import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order.routing';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderTableComponent } from './order-table/order-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ],
  declarations: [
    OrderPageComponent,
    OrderAddComponent,
    OrderTableComponent
  ]
})
export class OrderModule { }
