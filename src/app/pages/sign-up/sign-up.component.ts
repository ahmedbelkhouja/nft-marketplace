import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AuthService } from 'src/app/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonicModule, FormsModule, CommonModule, RouterModule],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  previewUrl: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      image: [null, Validators.required],
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        alert('File size should not exceed 5MB');
        return;
      }

      // Preview the image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result; // Set preview URL for the image
      };
      reader.readAsDataURL(file);

      // Update the form control with the file
      this.signUpForm.patchValue({
        image: file, // Attach the file object
      });
      this.signUpForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const formData = new FormData();
      formData.append('userName', this.signUpForm.get('userName')?.value); // Correct field name
      formData.append('email', this.signUpForm.get('email')?.value);
      formData.append('password', this.signUpForm.get('password')?.value);

      // Append the image file
      const imageFile = this.signUpForm.get('image')?.value;
      if (imageFile) {
        formData.append('image', imageFile); // Ensure the file is appended
      }

      // Call the AuthService signup method
      this.authService.signup(formData).subscribe({
        next: (res) => {
          console.log('Response from server:', res);
          if (res.success) {
            alert('Sign up successful!');
          } else {
            alert('Sign up failed. Please try again.');
          }
        },
        error: (err) => {
          console.error('Error during sign up:', err);
          alert('An error occurred. Please try again later.');
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
