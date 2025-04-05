import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonicModule, FormsModule , CommonModule, RouterModule],
  providers: [HttpClient]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    // Initialize the loginForm with FormControls
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:3000/api/auth/login',
        this.loginForm.value,
        {
          withCredentials: true,
          observe: 'response'
        }
      ).subscribe({
        next: (response: any) => {
          const token = response.headers.get('Authorization')?.split(' ')[1];
          if (token) {
            localStorage.setItem('token', token); // Store token
          }

          if (response.body?.status === 'success') {
            this.router.navigate(['/home']);
          }
        },
        error: (error) => {
          console.error('Login error:', error);
          alert(error.error?.message || 'Login failed');
        }
      });
    }
  }
}

