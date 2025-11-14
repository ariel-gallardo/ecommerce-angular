import { Route } from "@angular/router";
import { Profile } from "./profile/profile";
import { Register } from "./register/register";
import { Login } from "./login/login";
import { AuthGuard } from "@guards/auth-guard";
import { GuestGuard } from "@guards/guest-guard";

const routes : Route[] = [
    {path: '', component: Profile, canActivate: [AuthGuard]},
    {path: 'register', component: Register, canActivate: [GuestGuard]},
    {path: 'login', component: Login, canActivate: [GuestGuard]},
];

export default routes;