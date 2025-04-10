import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): Observable<boolean> {
    console.log('user guard');
    const getUserRole = window.localStorage.getItem('userRole');
    console.log('from user guard', getUserRole);
    if (getUserRole === 'user') {
      console.log('i am from userGuald');

      return of(true);
    }
    this.router.navigate(['public']);
    return of(false);
  }
}
