import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor() { }

  public getOrderList(): Array<any> {
    return [
      { orderId: '1111', userName: 'Jason Zheng' },
      { orderId: '2222', userName: 'Jason Zheng' },
      { orderId: '3333', userName: 'Jason Zheng' },
      { orderId: '4444', userName: 'Jason Zheng' },
      { orderId: '5555', userName: 'Jason Zheng' },
      { orderId: '6666', userName: 'Jason Zheng' },
      { orderId: '7777', userName: 'Jason Zheng' }
    ];
  }

}
