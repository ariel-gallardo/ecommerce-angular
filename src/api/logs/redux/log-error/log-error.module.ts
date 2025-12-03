import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './log-error.reducer';
import { LogErrorEffects } from './log-error.effects';
import { LogErrorService } from '@api/logs/services/log-error.service';
import { LogErrorFacade } from './log-error.facade';
import {SnackbarModule} from '@features/snackbar/snackbar-module';
import {SnackbarService} from '@features/snackbar/snackbar-service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('LogError', Reducer),
    EffectsModule.forFeature([LogErrorEffects]),
    SnackbarModule
  ],
  providers: [LogErrorService, LogErrorFacade, SnackbarService]
})
export class LogErrorReduxModule {

}
