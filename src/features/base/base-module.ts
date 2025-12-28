import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { RouterModule } from '@angular/router';
import { Shell } from './shell/shell';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    Footer,
    Navbar,
    Shell,
    ThemeToggleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatTooltipModule
  ],
  exports: [
    Footer,
    Navbar
  ]
})
export class BaseModule { }
