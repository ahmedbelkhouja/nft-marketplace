import { Component, input, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonSectionComponent } from 'src/app/shared/components/ui/common-section/common-section.component';
import {IonicModule} from '@ionic/angular';
import { NFT__DATA } from 'src/assets/data/data';
import { NftCardComponent } from "../../components/ui/nft-card/nft-card.component";
@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, CommonSectionComponent, IonicModule, NftCardComponent],
})
export class MarketPage implements OnInit {
  constructor() { }
  nftList = NFT__DATA;


  ngOnInit() {
  }

}
