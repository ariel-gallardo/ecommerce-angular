import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyLabelPipe } from './policy-label.pipe';
import { PolicyAccessPipe } from './policy-access.pipe';

@NgModule({
  declarations: [
    PolicyLabelPipe,
    PolicyAccessPipe
  ],
  imports: [
    CommonModule
  ], exports: [
    PolicyLabelPipe,
    PolicyAccessPipe
  ]
})
export class CommonPipesModule { }
