import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeMode } from './theme/theme.state';
import { ThemeFacade } from './theme/theme.facade';

@Component({
  selector: 'theme-toggle',
  standalone: false,
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  private subs: Subscription = new Subscription();
  public currentTheme: ThemeMode = 'light';

  constructor(
    private themeFacade: ThemeFacade,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.themeFacade.Theme$.subscribe(theme => {
        this.currentTheme = theme;
        this.cdr.markForCheck();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public toggleTheme(): void {
    this.themeFacade.ToggleTheme();
  }

  public getThemeIcon(): string {
    return this.currentTheme === 'dark' ? 'light_mode' : 'dark_mode';
  }
}

