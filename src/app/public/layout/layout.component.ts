import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterOutlet, // Add RouterOutlet here
    NavbarComponent,
    FooterComponent,
  ],
})
export class LayoutComponent {}
