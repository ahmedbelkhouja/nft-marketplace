import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PrivateNavbarComponent} from 'src/app/private/user/components/private-navbar/private-navbar.component';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from 'src/app/public/footer/footer.component';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PrivateNavbarComponent, RouterOutlet, FooterComponent],
})
export class LayoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
