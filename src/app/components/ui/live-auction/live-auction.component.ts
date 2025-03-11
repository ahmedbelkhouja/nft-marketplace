import { Component } from '@angular/core';
import { NFT__DATA } from 'src/assets/data/data.js';
import { NftCardComponent } from '../nft-card/nft-card.component';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
@Component({
  selector: 'app-live-auction',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.scss'],
  imports: [NftCardComponent, IonicModule, CommonModule]
})
export class LiveAuctionComponent {
  nftList = NFT__DATA.slice(0, 4); // Only take the first 4 NFTs
}