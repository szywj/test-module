import { Component, OnInit } from '@angular/core';
import { OrderService } from './order-services/order.service';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  private orderList: Array<any>;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderList = this.orderService.getOrderList();
  }

}
