import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonicModule],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
