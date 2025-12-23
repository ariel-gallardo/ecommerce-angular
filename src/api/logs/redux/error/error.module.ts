import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './error.reducer';
import { ErrorEffects } from './error.effects';
import { ErrorService } from '@api/logs/services/error.service';
import { ErrorFacade } from './error.facade';
import {SnackbarModule} from '@features/snackbar/snackbar-module';
import {SnackbarService} from '@features/snackbar/snackbar-service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Error', Reducer),
    EffectsModule.forFeature([ErrorEffects]),
    SnackbarModule
  ],
  providers: [ErrorService, ErrorFacade, SnackbarService]
})
export class ErrorReduxModule {

}
