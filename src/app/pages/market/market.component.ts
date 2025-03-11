import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
  imports: [IonicModule],
})
export class MarketComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
