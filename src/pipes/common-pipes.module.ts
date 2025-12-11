import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyLabelPipe } from './policy-label.pipe';
import { PolicyAccessPipe } from './policy-access.pipe';
import { LogTypePipe } from './log-type.pipe';

@NgModule({
  declarations: [
    PolicyLabelPipe,
    PolicyAccessPipe,
    LogTypePipe
  ],
  imports: [
    CommonModule
  ], exports: [
    PolicyLabelPipe,
    PolicyAccessPipe,
    LogTypePipe
  ]
})
export class CommonPipesModule { }
