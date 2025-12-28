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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ProductList,
    ProductDetail,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ProductEffects, CategoryEffects])
  ]
})
export class ProductsModule { }
