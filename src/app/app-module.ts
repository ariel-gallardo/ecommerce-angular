import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReduxCoreModule as SecurityReduxCoreModule } from '@api/security/redux/core.module';
import { BaseModule } from '@features/base/base-module';
import { AuthEffects } from '@effects/AuthEffects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([AuthEffects]),
    BaseModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SecurityReduxCoreModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
