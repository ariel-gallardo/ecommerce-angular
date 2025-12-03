import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './permission.reducer';
import { PermissionEffects } from './permission.effects';
import { PermissionService } from '@api/security/services/permission.service';
import { PermissionFacade } from './permission.facade';
import {SnackbarModule} from '@features/snackbar/snackbar-module';
import {SnackbarService} from '@features/snackbar/snackbar-service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Permission', Reducer),
    EffectsModule.forFeature([PermissionEffects]),
    SnackbarModule
  ],
  providers: [PermissionService, PermissionFacade, SnackbarService]
})
export class PermissionReduxModule {

}
