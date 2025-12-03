import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { LogReduxModule } from './log/log.module';
import { LogErrorReduxModule } from './log-error/log-error.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@cfg/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    LogReduxModule,
    LogErrorReduxModule,
  ],
})
export class ReduxCoreModule {
    
}
