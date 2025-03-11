import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class HeroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
