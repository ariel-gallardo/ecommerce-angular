import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from './message/message';

@Injectable()
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {}

  show(message: string, status: number) {
    this.snackBar.openFromComponent(Message, {
      data: { message, status },
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['!p-0', '!bg-transparent', '!shadow-none']
    });
  }
}