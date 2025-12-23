import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './info.reducer';
import { InfoEffects } from './info.effects';
import { InfoService } from '@api/logs/services/info.service';
import { InfoFacade } from './info.facade';
import {SnackbarModule} from '@features/snackbar/snackbar-module';
import {SnackbarService} from '@features/snackbar/snackbar-service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Info', Reducer),
    EffectsModule.forFeature([InfoEffects]),
    SnackbarModule
  ],
  providers: [InfoService, InfoFacade, SnackbarService]
})
export class InfoReduxModule {

}
