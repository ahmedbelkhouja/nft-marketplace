import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  imports: [IonicModule],
})
export class HistoryPage implements OnInit {
  @Input() item: any;
  constructor() {}

  ngOnInit() {}
}
