import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
})
export class SignUpPage {
  signUpForm: FormGroup;
  previewUrl: string | null = null;
  backendErrors: any = {}; // 🔥 NEW: to store errors returned from backend

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      image: [null], // 🔥 Optional image
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        this.backendErrors.image = 'Image size should not exceed 5MB';
        return;
      }

      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        this.backendErrors.image = 'Only JPEG and PNG formats are allowed';
        return;
      }

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);

      this.signUpForm.patchValue({ image: file });
      this.signUpForm.get('image')?.updateValueAndValidity();
      this.backendErrors.image = null; // Clear previous error
    }
  }

  onSubmit() {
    this.backendErrors = {}; // 🔥 Clear old errors

    if (this.signUpForm.valid) {
      const formData = new FormData();
      formData.append('userName', this.signUpForm.get('userName')?.value);
      formData.append('email', this.signUpForm.get('email')?.value);
      formData.append('password', this.signUpForm.get('password')?.value);
      const imageFile = this.signUpForm.get('image')?.value;
      if (imageFile) formData.append('image', imageFile);

      this.authService.signup(formData).subscribe({
        next: (res) => {
          if (res.success) alert('Sign up successful!');
          else alert('Sign up failed. Please try again.');
        },
        error: (err) => {
          console.error('Signup error:', err);
          if (err.error?.errors) this.backendErrors = err.error.errors;
          // 🔥 Store backend validation errors
          else alert('An unexpected error occurred.');
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
