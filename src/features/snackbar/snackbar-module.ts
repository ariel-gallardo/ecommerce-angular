import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Message } from './message/message';
 
@NgModule({
  declarations: [
    Message
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    Message
  ]
})
export class SnackbarModule {}
