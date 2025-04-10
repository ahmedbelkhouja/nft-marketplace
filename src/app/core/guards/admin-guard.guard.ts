import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private route: Router) {}
  canActivate(): Observable<boolean> {
    if (window.localStorage.getItem('userRole') === 'admin') {
      console.log('i am from adminGuald');
      this.route.navigate(['private/admin']);
      return of(true);
    }
    // Redirect to the login route if the user is not logged in
    console.log('i am from adminGuald else');
    this.route.navigate(['public']);
    return of(false);
  }
}
