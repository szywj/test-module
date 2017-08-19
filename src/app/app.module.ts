import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderService } from './order-list/order-services/order.service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
