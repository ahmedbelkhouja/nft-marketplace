// auth.guard.ts
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated().pipe(
    map((res) => {
      if (res.isAuthenticated) {
        return true; // Allow access
      } else {
        router.navigate(['public/login']); // Redirect to login if not authenticated
        return false;
      }
    })
  );
};
