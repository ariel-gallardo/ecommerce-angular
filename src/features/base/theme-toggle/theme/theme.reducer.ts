import { Action, createReducer, on } from '@ngrx/store';
import { ThemeActions as Actions } from './theme.actions';
import State, { ThemeMode } from './theme.state';

const initialState: State = {
  theme: 'light',
  initialized: false
};

const reducer = createReducer(
  initialState,
  on(Actions.Init, (state) => ({
    ...state,
    initialized: true
  })),
  on(Actions.SetTheme, (state, { theme }) => ({
    ...state,
    theme
  })),
  on(Actions.ToggleTheme, (state) => ({
    ...state,
    theme: state.theme === 'light' ? 'dark' : 'light'
  }))
);

export default function themeReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}

