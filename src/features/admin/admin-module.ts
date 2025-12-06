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
import { PermissionsList } from './permissions/permissions-list/permissions-list';
import {MatTableModule} from '@angular/material/table';
import { CommonPipesModule } from '@pipes/common-pipes.module';
import { PermissionsEdit } from './permissions/permissions-edit/permissions-edit';
 
@NgModule({
  declarations: [
    AdminShell,
    LogList,
    LogDetail,
    PermissionsList,
    PermissionsEdit
  ],
  imports: [
    CommonModule,
    CommonPipesModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
