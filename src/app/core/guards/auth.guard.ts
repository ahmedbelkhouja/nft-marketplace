import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    const isAuthenticated = this.authService.isAuthenticated();
    const userRole = this.authService.getUserRole();

    if (isAuthenticated === true) {
      if (userRole === 'admin') {
        this.router.navigate(['/private/admin']);
        return of(true);
      }
      if (userRole === 'user') {
        this.router.navigate(['/private/user']);
        return of(true);
      }
    } else {
      // If the user is not authenticated, redirect to the login page
      this.router.navigate(['/public/home']);
      return of(false);
    }

    return of(false);
  }
}
