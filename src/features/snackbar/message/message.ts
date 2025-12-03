import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'message',
  templateUrl: './message.html',
  styleUrls: ['./message.scss'],
  standalone: false
})
export class Message implements OnInit {

  text = '';
  status = 200;
  icon = 'info';
  statusClass = 'default';

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  ngOnInit() {
    this.text = this.data?.message ?? 'Operación realizada';
    this.status = this.data?.status ?? 200;
    this.mapStatus(this.status);
  }

  private mapStatus(status: number) {
    if (status >= 200 && status <= 201) {
      this.icon = 'check_circle';
      this.statusClass = 'success';
    } else if (status >= 202 && status < 300) {
      this.icon = 'check';
      this.statusClass = 'info';
    } else if (status >= 400 && status < 500) {
      this.icon = 'warning';
      this.statusClass = 'warning';
    } else if (status >= 500) {
      this.icon = 'error';
      this.statusClass = 'error';
    } else {
      this.icon = 'info';
      this.statusClass = 'default';
    }
  }
}
