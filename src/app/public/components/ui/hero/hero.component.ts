import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [IonicModule,RouterModule]
})
export class HeroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
