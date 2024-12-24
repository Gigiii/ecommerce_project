import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoSmallComponent } from './SVGs/logo-small/logo-small.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { CatalogBodyComponent } from './catalog/catalog-body/catalog-body.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'products/:id', component: ProductComponent},
    {path: 'cart', component: LogoSmallComponent, canActivate: [authGuard]},
    {path: 'catalog', component: CatalogBodyComponent},
];
