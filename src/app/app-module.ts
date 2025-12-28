import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReduxCoreModule as SecurityReduxCoreModule } from '@api/security/redux/core.module';
import { BaseModule } from '@features/base/base-module';
import { AuthEffects } from '@effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { AuthInterceptor } from '@interceptors/auth-interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { CartReduxModule } from '@api/cart';
import { CartEffects } from '@effects/cart.effects';
import { ReduxCoreModule as LogsCoreModule } from '@api/logs/redux/core.module';
import { ReduxCoreModule as ProductsCoreModule } from '@api/product/redux/core.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeReduxModule } from '@features/base/theme-toggle/theme/theme.module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([AuthEffects, CartEffects]),
    BaseModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SecurityReduxCoreModule,
    LogsCoreModule,
    CartReduxModule,
    ProductsCoreModule,
    ThemeReduxModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptors([AuthInterceptor])
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
