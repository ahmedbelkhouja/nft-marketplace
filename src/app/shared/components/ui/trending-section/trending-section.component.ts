import { Component } from '@angular/core';
import { NFT__DATA } from 'src/assets/data/data.js';
import { CommonModule } from '@angular/common';
import { NftCardComponent } from '../nft-card/nft-card.component';

@Component({
  selector: 'app-trending-section',
  templateUrl: './trending-section.component.html',
  styleUrls: ['./trending-section.component.scss'],
  imports: [NftCardComponent,CommonModule],
})
export class TrendingSectionComponent {
  nftList = NFT__DATA;

}
