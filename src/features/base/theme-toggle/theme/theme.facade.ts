import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';
import { ThemeActions as Actions } from './theme.actions';
import { selectTheme, selectIsDarkMode, selectIsInitialized } from './theme.selector';
import { ThemeMode } from './theme.state';

@Injectable()
export class ThemeFacade {
  constructor(private store: Store<{ Theme: any }>) {}

  public get Theme$(): Observable<ThemeMode> {
    return this.store.select(selectTheme);
  }

  public get IsDarkMode$(): Observable<boolean> {
    return this.store.select(selectIsDarkMode);
  }

  public get IsInitialized$(): Observable<boolean> {
    return this.store.select(selectIsInitialized).pipe(filter(x => x !== null && x !== undefined));
  }

  public Init(): void {
    this.store.dispatch(Actions.Init());
    this.store.dispatch(Actions.LoadThemeFromStorage());
  }

  public SetTheme(theme: ThemeMode): void {
    this.store.dispatch(Actions.SetTheme({ theme }));
  }

  public ToggleTheme(): void {
    this.store.dispatch(Actions.ToggleTheme());
  }
}

