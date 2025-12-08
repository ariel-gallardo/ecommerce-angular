import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormError } from './form-error/form-error';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    FormError
  ],
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  exports: [
    FormError
  ]
})
export class SharedModule { }
