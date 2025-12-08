import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateErrorsDirective } from './validate-errors.directive';


@NgModule({
  declarations: [
    ValidateErrorsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ValidateErrorsDirective
  ]
})
export class CommonDirectivesModule { }
