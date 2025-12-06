import { Routes } from "@angular/router";
import { AdminShell } from "./admin-shell/admin-shell";
import { AuthGuard } from "@guards/auth-guard";
import { LogList } from "./logs/log-list/log-list";
import { PermissionsList } from "./permissions/permissions-list/permissions-list";
import { PermissionsEdit } from "./permissions/permissions-edit/permissions-edit";

const routes: Routes = [
    {component: AdminShell, path: '', children: [
        {component: LogList, path: 'logs'},
        {component: PermissionsList, path: 'permissions'},
        {component: PermissionsEdit, path: 'permissions/edit/:id'},
    ], canActivateChild: [AuthGuard]} 
]

export default routes;