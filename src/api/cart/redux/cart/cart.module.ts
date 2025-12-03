import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './cart.reducer';
import { CartEffects } from './cart.effects';
import { CartService } from '@api/cart/services/cart.service';
import { CartFacade } from './cart.facade';
import {SnackbarModule} from '@features/snackbar/snackbar-module';
import {SnackbarService} from '@features/snackbar/snackbar-service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Cart', Reducer),
    EffectsModule.forFeature([CartEffects]),
    SnackbarModule
  ],
  providers: [CartService, CartFacade, SnackbarService]
})
export class CartReduxModule {

}
