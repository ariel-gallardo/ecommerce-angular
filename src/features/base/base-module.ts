import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { RouterModule } from '@angular/router';
import { Shell } from './shell/shell';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    Footer,
    Navbar,
    Shell,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    Footer,
    Navbar
  ]
})
export class BaseModule { }
