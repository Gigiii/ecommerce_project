import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoSmallComponent } from './SVGs/logo-small/logo-small.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: LogoSmallComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'protected', component: LogoSmallComponent, canActivate: [authGuard]}
];
