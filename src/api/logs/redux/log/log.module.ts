import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './log.reducer';
import { LogEffects } from './log.effects';
import { LogService } from '@api/logs/services/log.service';
import { LogFacade } from './log.facade';
import {SnackbarModule} from '@features/snackbar/snackbar-module';
import {SnackbarService} from '@features/snackbar/snackbar-service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Log', Reducer),
    EffectsModule.forFeature([LogEffects]),
    SnackbarModule
  ],
  providers: [LogService, LogFacade, SnackbarService]
})
export class LogReduxModule {

}
