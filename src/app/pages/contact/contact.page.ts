import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule}from '@ionic/angular';
import { SendMessageComponent } from 'src/app/components/ui/send-message/send-message.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SendMessageComponent
  ]
})
export class ContactPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}