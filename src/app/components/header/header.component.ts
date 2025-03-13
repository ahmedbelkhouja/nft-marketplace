import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule, RouterLink],
  standalone: true
})
export class HeaderComponent {
  constructor(private menuController: MenuController) {}

  async toggleMenu() {
    await this.menuController.toggle();
  }
}