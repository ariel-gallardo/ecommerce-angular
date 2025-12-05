import { Routes } from "@angular/router";
import { AdminShell } from "./admin-shell/admin-shell";
import { AuthGuard } from "@guards/auth-guard";
import { LogList } from "./logs/log-list/log-list";

const routes: Routes = [
    {component: AdminShell, path: '', children: [
        {component: LogList, path: 'logs'}
    ], canActivateChild: [AuthGuard]} 
]

export default routes;