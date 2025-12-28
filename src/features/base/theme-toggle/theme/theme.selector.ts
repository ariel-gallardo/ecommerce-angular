import { createFeatureSelector, createSelector } from '@ngrx/store';
import State from './theme.state';

export const selectThemeState = createFeatureSelector<State>('Theme');

export const selectTheme = createSelector(
  selectThemeState,
  (state) => state?.theme || 'light'
);

export const selectIsDarkMode = createSelector(
  selectTheme,
  (theme) => theme === 'dark'
);

export const selectIsInitialized = createSelector(
  selectThemeState,
  (state) => state?.initialized || false
);

