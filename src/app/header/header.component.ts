import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LogoHeaderComponent } from '../SVGs/logo-header/logo-header.component';
import { CartLogoComponent } from '../SVGs/cart-logo/cart-logo.component';
import { UserLogoComponent } from '../SVGs/user-logo/user-logo.component';
import { HeaderStateService } from '../services/header-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,
            CommonModule,
            LogoHeaderComponent,
            CartLogoComponent,
            UserLogoComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  loggedIn : boolean;
  userName: string | null = null;
  constructor(private authService : AuthService, private router: Router, private headerStateService : HeaderStateService) {

    this.loggedIn = this.authService.isAuthenticated();

  }

  ngOnInit(): void {
    if (this.loggedIn) {
      const currentUser = this.authService.getCurrentUser();
      if (currentUser) {
        this.userName = currentUser.username;
      }
    }

    this.headerStateService.loggedIn$.subscribe((status) => {
      this.loggedIn = status;
    });

  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
    this.loggedIn = false;
    this.userName = null;
  }
}
