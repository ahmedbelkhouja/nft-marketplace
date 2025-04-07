import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {catchError , map , of} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService) as AuthService;
  const router = inject(Router) as Router;

  return authService.isAuthenticated().pipe(
    map((res) => {
      if (res.isAuthenticated) {
        return true; // User is authenticated, allow access
      }else {
        router.navigate(['/login']); // Redirect to login page if not authenticated
        return false; // Deny access
      }
    ),
    catchError((error) => {
      console.error('Error checking authentication:', error);
      router.navigate(['/login']); // Redirect to login page if not authenticated
      return of(false); // Deny access
    }
  )); // Return an observable of true or false based on authentication status

  
  
};
