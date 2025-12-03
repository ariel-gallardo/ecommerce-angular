import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogDetail } from './log-detail/log-detail';
import { LogList } from './log-list/log-list';



@NgModule({
  declarations: [
    LogDetail,
    LogList
  ],
  imports: [
    CommonModule
  ]
})
export class LogsModule { }
