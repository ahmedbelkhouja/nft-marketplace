import { Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, LayoutComponent],
})
export class AppComponent {
  constructor() {}
}
