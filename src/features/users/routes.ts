import { Route } from "@angular/router";
import { Profile } from "./profile/profile";
import { Register } from "./register/register";
import { Login } from "./login/login";
import { AuthGuard } from "@guards/auth-guard";
import { UsersShell } from "./users-shell/users-shell";

const routes : Route[] = [
    {path: '', children:[
        {path: 'profile', component: Profile},
        {path: 'register', component: Register},
        {path: 'login', component: Login},
    ], component: UsersShell, canActivateChild: [AuthGuard]}

];

export default routes;