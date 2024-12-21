import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderStateService } from '../services/header-state.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private headerStateService : HeaderStateService) {}

  login() : void {
    if (this.authService.login(this.email, this.password)){
      this.headerStateService.updateLoginStatus(true);
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
