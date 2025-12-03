import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartList } from './cart-list/cart-list';
import { CartDetail } from './cart-detail/cart-detail';



@NgModule({
  declarations: [
    CartList,
    CartDetail
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
