import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { CategoryReduxModule } from './category/category.module';
import { ProductReduxModule } from './product/product.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@cfg/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CategoryReduxModule,
    ProductReduxModule,
  ],
})
export class ReduxCoreModule {
    
}
