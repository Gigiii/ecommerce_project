import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderStateService {
  private loggedInSource = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedInSource.asObservable();

  updateLoginStatus(status: boolean) {
    this.loggedInSource.next(status);
  }
}
