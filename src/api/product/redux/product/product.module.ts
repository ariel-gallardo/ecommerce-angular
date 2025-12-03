import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './product.reducer';
import { ProductEffects } from './product.effects';
import { ProductService } from '@api/product/services/product.service';
import { ProductFacade } from './product.facade';
import {SnackbarModule} from '@features/snackbar/snackbar-module';
import {SnackbarService} from '@features/snackbar/snackbar-service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Product', Reducer),
    EffectsModule.forFeature([ProductEffects]),
    SnackbarModule
  ],
  providers: [ProductService, ProductFacade, SnackbarService]
})
export class ProductReduxModule {

}
