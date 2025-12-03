import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './users.reducer';
import { UsersEffects } from './users.effects';
import { UsersService } from '@api/security/services/users.service';
import { UsersFacade } from './users.facade';
import {SnackbarModule} from '@features/snackbar/snackbar-module';
import {SnackbarService} from '@features/snackbar/snackbar-service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Users', Reducer),
    EffectsModule.forFeature([UsersEffects]),
    SnackbarModule
  ],
  providers: [UsersService, UsersFacade, SnackbarService]
})
export class UsersReduxModule {

}
