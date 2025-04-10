import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

export const USER_STORAGE_KEY = 'shadow';

interface JwtPayload {
  id: string;
  role: string;
  exp: number;
  iat: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:3000';
  private userRole: string | null = null;
  constructor(private http: HttpClient, private router: Router) {}

  login(userData: FormData) {
    return this.http
      .post(`${this.API_URL}/api/auth/login`, userData, {
        withCredentials: true,
      })
      .pipe(
        map((res: any) => {
          console.log('Login response:', res); // Log the response
          window.localStorage.setItem('token', res.token); // Store the JWT token in local storage
          // Store the user data in local storage

          const decodedToken: JwtPayload = jwtDecode(res.token); // Decode the JWT token
          console.log('Decoded token:', decodedToken); // Log the decoded token
          // Store the user ID and role in local storage
          window.localStorage.setItem('userID', decodedToken.id);
          window.localStorage.setItem('userRole', decodedToken.role);

          // check if token is expired
          const isExpired = decodedToken.exp * 1000 < Date.now();
          if (isExpired) {
            console.error('Token is expired');
            // Optionally, you can redirect the user or handle the error
          }
          // Log the user ID and role
          console.log('User ID:', decodedToken.id);
          console.log('User Role:', decodedToken.role);
          this.router.navigate(['private/']);
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
          // Log the response
          window.localStorage.setItem('token', res.token); // Store the JWT token in local storage
          // Store the user data in local storage

          const decodedToken: JwtPayload = jwtDecode(res.token); // Decode the JWT token
          console.log('Decoded token:', decodedToken); // Log the decoded token
          // Store the user ID and role in local storage
          window.localStorage.setItem('userID', decodedToken.id);
          window.localStorage.setItem('userRole', decodedToken.role);
          return res;
        }),
        catchError((error) => {
          console.error('Signup error:', error);
          return throwError(() => error);
        })
      );
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const isExpired = decoded.exp * 1000 < Date.now();

      if (isExpired) {
        console.error('Token is expired');
        return false;
      }
    } catch (e) {
      console.error('Error decoding token:', e);
      return false;
    }
    return true; // Token is valid
  }

  getUserRole(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const decoded = jwtDecode<{ role: string }>(token);
    return decoded.role;
  }
}
