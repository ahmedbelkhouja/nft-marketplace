import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
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

  constructor() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      profilePicture: new FormControl(null)
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        alert('File size should not exceed 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
        this.signUpForm.patchValue({
          profilePicture: file
        });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Form Submitted:', this.signUpForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
