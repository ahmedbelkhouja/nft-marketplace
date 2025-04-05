import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  providers: [HttpClient] // Simplified provider
})
export class SignUpComponent {
  signUpForm: FormGroup;
  previewUrl: string | null = null;

  constructor(private http: HttpClient,private router: Router) {
    this.signUpForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
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
      const formData = new FormData();

      // Append all fields
      formData.append('userName', this.signUpForm.get('userName')?.value);
      formData.append('email', this.signUpForm.get('email')?.value);
      formData.append('password', this.signUpForm.get('password')?.value);

      // Append file if exists
      const profilePic = this.signUpForm.get('profilePicture')?.value;
      if (profilePic) {
        formData.append('profilePicture', profilePic);
      }

      this.http.post('http://localhost:3000/api/auth/signup', formData).subscribe({
        next: (response: any) => {
          console.log('Signup successful', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Signup failed', error);
          alert(error.error?.message || 'Signup failed. Please try again.');
        }
      });
    }
  }
}
