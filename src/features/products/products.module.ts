import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';
import {MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CategoryEffects } from './effects/category.effects';

@NgModule({
  declarations: [
    ProductList,
    ProductDetail,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ProductEffects, CategoryEffects])
  ]
})
export class ProductsModule { }
