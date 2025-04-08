import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';

export const USER_STORAGE_KEY = 'shadow';

interface AuthResponse {
  isAuthenticated: boolean;
  user?: any;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(userData: FormData) {
    return this.http
      .post(`${this.API_URL}/api/auth/login`, userData, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' }, // Set the content type to application/json
      })
      .pipe(
        map((res: any) => {
          console.log('Login response:', res); // Log the response
          return res;
        }),
        catchError((error) => {
          console.error('Login error:', error);
          return throwError(() => error);
        })
      );
  }

  signup(formData: FormData) {
    return this.http
      .post(`${this.API_URL}/api/auth/signup`, formData, {
        withCredentials: true,
      }) // Send FormData directly
      .pipe(
        map((res: any) => {
          console.log('Signup response:', res);

          // Log the response
          return res;
        }),
        catchError((error) => {
          console.error('Signup error:', error);
          return throwError(() => error);
        })
      );
  }
  isAuthenticated(): Observable<AuthResponse> {
    const user = localStorage.getItem(USER_STORAGE_KEY);
    return of({ isAuthenticated: !!user, user: user ? JSON.parse(user) : null });
  }
}

