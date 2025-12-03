import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';



@NgModule({
  declarations: [
    ProductList,
    ProductDetail
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
