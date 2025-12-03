import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './cart-item.reducer';
import { CartItemEffects } from './cart-item.effects';
import { CartItemService } from '@api/cart/services/cart-item.service';
import { CartItemFacade } from './cart-item.facade';
import {SnackbarModule} from '@features/snackbar/snackbar-module';
import {SnackbarService} from '@features/snackbar/snackbar-service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('CartItem', Reducer),
    EffectsModule.forFeature([CartItemEffects]),
    SnackbarModule
  ],
  providers: [CartItemService, CartItemFacade, SnackbarService]
})
export class CartItemReduxModule {

}
