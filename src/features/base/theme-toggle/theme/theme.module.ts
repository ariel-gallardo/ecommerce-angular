import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import Reducer from './theme.reducer';
import { ThemeEffects } from './theme.effects';
import { ThemeFacade } from './theme.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Theme', Reducer),
    EffectsModule.forFeature([ThemeEffects])
  ],
  providers: [ThemeFacade]
})
export class ThemeReduxModule {}

