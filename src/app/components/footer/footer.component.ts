import { Component, HostListener } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonicModule], // Import IonicModule to use ion-button and other Ionic components
})
export class FooterComponent {
  constructor() {}

}
