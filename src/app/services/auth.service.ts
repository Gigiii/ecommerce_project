import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private users : User[] = [
    {username: 'user1', email: 'user@gmail.com', password: 'pass1'},
    {username: 'gigi', email: 'user2@gmail.com', password: 'test123'},
  ]
  private isLoggedIn = false;
  private currentUser: User | null = null;

  constructor(private router: Router) { }

  login (email: string, password: string) : boolean {

    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'True');
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    else{
      return false;
    }

  }

  logout() : void {
    this.isLoggedIn = false;
    this.currentUser = null;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'True') {
      const storedUser = localStorage.getItem('currentUser');
      this.currentUser = storedUser ? JSON.parse(storedUser) : null;
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
