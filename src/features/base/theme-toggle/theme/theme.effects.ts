import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { ThemeActions } from './theme.actions';
import { selectTheme } from './theme.selector';
import { ThemeMode } from './theme.state';
import { DOCUMENT } from '@angular/common';

const THEME_STORAGE_KEY = 'app-theme';

@Injectable()
export class ThemeEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  private document = inject(DOCUMENT);

  // Efecto para cargar el tema desde localStorage al inicializar
  loadThemeFromStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ThemeActions.LoadThemeFromStorage),
      map(() => {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
        const theme = savedTheme || (this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        return ThemeActions.SetTheme({ theme });
      })
    )
  );

  // Efecto para guardar el tema en localStorage cuando cambia
  saveThemeToStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ThemeActions.SetTheme),
      tap(({ theme }) => {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
        this.applyTheme(theme);
      })
    ),
    { dispatch: false }
  );

  // Efecto para aplicar el tema cuando se cambia
  applyTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ThemeActions.SetTheme, ThemeActions.ToggleTheme),
      map(() => {
        let theme: ThemeMode;
        this.store.select(selectTheme).subscribe(t => theme = t).unsubscribe();
        this.applyTheme(theme!);
        return { type: '[Theme] Theme Applied' };
      })
    ),
    { dispatch: false }
  );

  private applyTheme(theme: ThemeMode): void {
    const htmlElement = this.document.documentElement;
    const body = this.document.body;
    
    if (theme === 'dark') {
      htmlElement.classList.add('dark-theme');
      htmlElement.classList.remove('light-theme');
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
      // Forzar el tema oscuro en Material
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      htmlElement.classList.add('light-theme');
      htmlElement.classList.remove('dark-theme');
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
      // Forzar el tema claro en Material
      htmlElement.setAttribute('data-theme', 'light');
    }
  }
}

