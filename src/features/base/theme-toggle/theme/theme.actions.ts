import { createAction, props } from '@ngrx/store';
import { ThemeMode } from './theme.state';

export class ThemeActions {
  static Init = createAction('[Theme] Init');
  
  static SetTheme = createAction('[Theme] Set Theme', props<{ theme: ThemeMode }>());
  
  static ToggleTheme = createAction('[Theme] Toggle Theme');
  
  static LoadThemeFromStorage = createAction('[Theme] Load Theme From Storage');
  
  static SaveThemeToStorage = createAction('[Theme] Save Theme To Storage', props<{ theme: ThemeMode }>());
}

