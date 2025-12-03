import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './personas.reducer';
import { PersonasEffects } from './personas.effects';
import { PersonasService } from '@api/security/services/personas.service';
import { PersonasFacade } from './personas.facade';
import {SnackbarModule} from '@features/snackbar/snackbar-module';
import {SnackbarService} from '@features/snackbar/snackbar-service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Personas', Reducer),
    EffectsModule.forFeature([PersonasEffects]),
    SnackbarModule
  ],
  providers: [PersonasService, PersonasFacade, SnackbarService]
})
export class PersonasReduxModule {

}
