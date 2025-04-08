import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const USER_STORAGE_KEY = 'shadow';

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
      })
      .pipe(
        map((res: any) => {
          console.log('Login response:', res); // Log the response
          window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(res)); // Store the user data in local storage
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
          // Store the user data in local storage
          window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(res));
          // Log the response
          return res;
        }),
        catchError((error) => {
          console.error('Signup error:', error);
          return throwError(() => error);
        })
      );
  }
  isAuthenticated(): boolean {
    const user = localStorage.getItem(USER_STORAGE_KEY);
    return !!user; // Return true if user exists, false otherwise
  }
}
