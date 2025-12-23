import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ErrorReduxModule } from './error/error.module';
import { InfoReduxModule } from './info/info.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@cfg/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ErrorReduxModule,
    InfoReduxModule,
  ],
})
export class ReduxCoreModule {
    
}
