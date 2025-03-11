import { Component } from '@angular/core';
import { IonApp, IonContent } from '@ionic/angular/standalone';
import { LayoutComponent } from './components/layout/layout.component';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [LayoutComponent, IonicModule],
})
export class AppComponent {
  constructor() {}
}
