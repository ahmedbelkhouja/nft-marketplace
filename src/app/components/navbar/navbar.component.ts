import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonicModule], // Import IonicModule to use ion-button and other Ionic components
})
export class NavbarComponent {
  constructor() {}
}
