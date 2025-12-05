import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminShell } from './admin-shell/admin-shell';
import { RouterModule } from '@angular/router';
import routes from './routes';
import { LogList } from './logs/log-list/log-list';
import { LogDetail } from './logs/log-detail/log-detail';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AdminShell,
    LogList,
    LogDetail
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
