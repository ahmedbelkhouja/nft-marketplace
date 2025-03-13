import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{CommonSectionComponent} from '../common-section/common-section.component';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, CommonSectionComponent],
})
export class SendMessageComponent {
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
