import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,

  providers: [HttpClient],

  imports: [
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Initialize the loginForm with FormBuilder for cleaner code
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);

      // Call the AuthService login method
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Login successful:', res);
          // Handle successful login, e.g., navigate to another page
          document.cookie = `authToken=${res.token}; HttpOnly; Secure; SameSite=Strict`;

          this.router.navigate(['/dashboard']); // Navigate to the home page after login
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
