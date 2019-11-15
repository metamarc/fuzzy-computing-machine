import { UserTypeGuard } from './../model/user';
import { filter, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer, of } from 'rxjs';
import { Customer } from '~core/model/customer';
import { User } from '~core/model/user';
import { Administrator } from '~core/model/administrator';
import { LoginData } from '~core/model/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$$: BehaviorSubject<User> = new BehaviorSubject(null);
  currentUser$: Observable<User>;

  constructor() {
    this.currentUser$ = this.currentUser$$.asObservable();
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser$;
  }

  getCurrentCustomer(): Observable<Customer> {
    return this.currentUser$.pipe(
      filter(Boolean),
      map((user: User) => UserTypeGuard.Customer(user) ? user : null),
    );
  }

  getCurrentAdministrator(): Observable<Administrator> {
    return this.currentUser$.pipe(
      filter(Boolean),
      map((user: User) => UserTypeGuard.Administrator(user) ? user : null),
    );
  }

  login(loginData: LoginData): Observable<User | null> {
    if (loginData) {
      return timer(30).pipe(
        map(time => {
          return {
            id: '1',
            name: 'test@coolsafe.de',
            role: loginData.role
          } as User;
        }),
        tap((loginAsUser: User) => this.currentUser$$.next(loginAsUser))
      );
    }
    return of(null);
  }

  logout() {
    this.currentUser$$.next(null);
  }

  emailExists(email: string): Promise<boolean> {
    return timer(300)
      .pipe(
        map(time => {
          if (Math.random() * 100 < 20) {
            return true;
          } else {
            return false;
          }
        })
      )
      .toPromise();
  }
}
