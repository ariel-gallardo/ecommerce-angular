import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './category.reducer';
import { CategoryEffects } from './category.effects';
import { CategoryService } from '@api/product/services/category.service';
import { CategoryFacade } from './category.facade';
import {SnackbarModule} from '@features/snackbar/snackbar-module';
import {SnackbarService} from '@features/snackbar/snackbar-service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Category', Reducer),
    EffectsModule.forFeature([CategoryEffects]),
    SnackbarModule
  ],
  providers: [CategoryService, CategoryFacade, SnackbarService]
})
export class CategoryReduxModule {

}
