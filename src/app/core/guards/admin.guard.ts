import { UserTypeGuard } from './../model/user';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isUserAdmin();
  }

  canLoad(
    route: import('@angular/router').Route,
    segments: import('@angular/router').UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.isUserAdmin();
  }

  isUserAdmin(): Observable<boolean> {
    return this.authService.getCurrentUser().pipe(
      // Alternative implementation to the one used in AuthGuard. Using UrlTree is preferred nowadays.
      map(user => UserTypeGuard.Administrator(user)),
      tap(canLoad => {
        if (!canLoad) {
          this.router.navigate(['/home']);
        }
      }),
      take(1)
    );
  }
}
