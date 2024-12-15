import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private users : User[] = [
    {username: 'user1', password: 'pass1'},
    {username: 'gigi', password: 'test123'},
  ]
  private isLoggedIn = false;

  constructor(private router: Router) { }

  login (username: string, password: string) : boolean {

    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'True');
      return true;
    }
    else{
      return false;
    }
    
  }

  logout() : void {
    localStorage.removeItem('isLoggedIn');
  }

  isAuthenticated() : boolean {
    return this.isLoggedIn || localStorage.getItem('isLoggedIn') === 'True';
  }
}
