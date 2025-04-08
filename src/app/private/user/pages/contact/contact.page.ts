import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule}from '@ionic/angular';
import {CommonSectionComponent} from '../../../../shared/components/ui/common-section/common-section.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CommonSectionComponent
  ]
})
export class ContactPage  {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  handleSubmit() {
    console.log('Form Submitted:', {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
    });
  }
}
