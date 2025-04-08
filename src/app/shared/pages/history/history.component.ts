import { Component, Input, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  imports: [IonicModule],
})
export class HistoryComponent  implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit() {}

}
