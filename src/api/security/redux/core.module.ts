import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { PermissionReduxModule } from './permission/permission.module';
import { PersonasReduxModule } from './personas/personas.module';
import { UsersReduxModule } from './users/users.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@cfg/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    PermissionReduxModule,
    PersonasReduxModule,
    UsersReduxModule,
  ],
})
export class ReduxCoreModule {
    
}
