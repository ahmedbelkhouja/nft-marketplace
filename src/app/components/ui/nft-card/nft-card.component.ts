import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { BidModalComponent } from '../modal/modal.component';

interface NFTItem {
  id: string;
  title: string;
  desc: string;
  imgUrl: string;
  creator: string;
  creatorImg: string;
  currentBid: number;
}

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink]
})
export class NftCardComponent {
  @Input() item!: NFTItem;

  constructor(private modalController: ModalController) {}

  async openBidModal() {
    const modal = await this.modalController.create({
      component: BidModalComponent,
      componentProps: {
        nft: this.item
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      console.log('Bid placed:', data);
    }
  }
}