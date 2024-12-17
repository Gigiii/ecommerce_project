import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoSmallComponent } from './SVGs/logo-small/logo-small.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'protected', component: LogoSmallComponent, canActivate: [authGuard]}
];
