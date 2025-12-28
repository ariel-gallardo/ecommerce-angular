export type ThemeMode = 'light' | 'dark';

export default interface State {
  theme: ThemeMode;
  initialized: boolean;
}

