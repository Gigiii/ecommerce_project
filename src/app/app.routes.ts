import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { CartComponent } from './cart/cart/cart.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'products/:id', component: ProductComponent},
    {path: 'cart', component: CartComponent, canActivate: [authGuard]},
    {path: 'catalog', component: CatalogComponent},
];
