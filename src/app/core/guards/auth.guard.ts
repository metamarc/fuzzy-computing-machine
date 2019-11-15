import { map, take } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isUserAuthenticated();
  }

  isUserAuthenticated(): Observable<boolean | UrlTree> {
    return this.authService.getCurrentUser().pipe(
      map(user => {
        if (!!user) {
          return true;
        } else {
          return this.router.parseUrl('/home');
        }
      }),
      take(1)
    );
  }
}
