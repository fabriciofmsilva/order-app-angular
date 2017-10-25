import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order.routing';
import { OrderPageComponent } from './order-page/order-page.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [OrderPageComponent]
})
export class OrderModule { }
