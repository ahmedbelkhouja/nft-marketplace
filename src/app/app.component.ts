import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [LayoutComponent, IonicModule], // ✅ Add IonicModule here
})
export class AppComponent {
  constructor() {}
}
