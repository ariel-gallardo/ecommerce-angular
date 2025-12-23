import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminShell } from './admin-shell/admin-shell';
import { RouterModule } from '@angular/router';
import routes from './routes';
import { LogList } from './logs/log-list/log-list';
import { LogErrorComponent } from './logs/log-error/log-error';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PermissionsList } from './permissions/permissions-list/permissions-list';
import {MatTableModule} from '@angular/material/table';
import { CommonPipesModule } from '@pipes/common-pipes.module';
import { PermissionsEdit } from './permissions/permissions-edit/permissions-edit';
 import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { PermissionEffects } from './permissions/effects/permissions.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonDirectivesModule } from '@directives/common-directives.module';
import { SharedModule } from '@features/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PermissionsAdd } from './permissions/permissions-add/permissions-add';
import { InfoFacade } from '@api/logs/redux/info/info.facade';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
  MatExpansionPanelDescription
} from '@angular/material/expansion';
import { LogsEffects } from './logs/effects/logs.effects';
import { StackTrace } from './logs/stack-trace/stack-trace';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  providers:[
    InfoFacade
  ],
  declarations: [
    AdminShell,
    LogList,
    LogErrorComponent,
    PermissionsList,
    PermissionsEdit,
    PermissionsAdd,
    StackTrace,
  ],
  imports: [
    CommonModule,
    CommonPipesModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonDirectivesModule,
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([PermissionEffects, LogsEffects]),
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription
  ]
})
export class AdminModule { }
