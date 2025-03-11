import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [HeaderComponent, FooterComponent, IonicModule,RouterOutlet ],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
