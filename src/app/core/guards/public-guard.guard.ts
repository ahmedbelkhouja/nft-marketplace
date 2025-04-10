import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard implements CanActivate {
  constructor(private route: Router, private authService: AuthService) {}
  canActivate(): Observable<boolean> {
    console.log('public guard');

    const isAuthenticated = this.authService.isAuthenticated();
    const getUserRole = window.localStorage.getItem('userRole');
    console.log(isAuthenticated);
    if (isAuthenticated == true) {
      this.route.navigate([`private/${getUserRole}`]);
      return of(false);
    }
    return of(true);
  }
}
