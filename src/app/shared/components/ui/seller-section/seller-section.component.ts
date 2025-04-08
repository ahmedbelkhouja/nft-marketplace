import { Component } from '@angular/core';
import {SELLER__DATA} from 'src/assets/data/data.js';
import { SellerCardComponent } from '../seller-card/seller-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-section',
  templateUrl: './seller-section.component.html',
  styleUrls: ['./seller-section.component.scss'],
  imports: [SellerCardComponent, CommonModule],
})
export class SellerSectionComponent  {

  sellerList = SELLER__DATA

}
