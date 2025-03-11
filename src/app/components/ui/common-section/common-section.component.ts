import { Component, Input, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
@Component({
  selector: 'app-common-section',
  templateUrl: './common-section.component.html',
  styleUrls: ['./common-section.component.scss'],
  imports: [IonicModule]
})
export class CommonSectionComponent  implements OnInit {
  @Input() title!: string;
  constructor() { 
  }
  ngOnInit() {}

}
