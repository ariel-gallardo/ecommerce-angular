import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { CartReduxModule } from './cart/cart.module';
import { CartItemReduxModule } from './cart-item/cart-item.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@cfg/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CartReduxModule,
    CartItemReduxModule,
  ],
})
export class ReduxCoreModule {
    
}
