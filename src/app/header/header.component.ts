import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  loggedIn : boolean;

  constructor(private authService : AuthService, private router: Router) {

    this.loggedIn = this.authService.isAuthenticated();

  }

  logout() : void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
