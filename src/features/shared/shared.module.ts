import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormError } from './form-error/form-error';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoordinateSelect } from './coordinate-select/coordinate-select';
import { LeafletModule } from '@bluehalo/ngx-leaflet';



@NgModule({
  declarations: [
    FormError,
    CoordinateSelect
  ],
  imports: [
    CommonModule,
    LeafletModule,
    MatFormFieldModule
  ],
  exports: [
    FormError,
    CoordinateSelect
  ]
})
export class SharedModule { }
