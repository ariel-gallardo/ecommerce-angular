import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { RouterModule } from '@angular/router';
import { Shell } from './shell/shell';

@NgModule({
  declarations: [
    Footer,
    Navbar,
    Shell,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Footer,
    Navbar
  ]
})
export class BaseModule { }
