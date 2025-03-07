import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [ LayoutComponent],
})
export class AppComponent {
  constructor() {}
}
