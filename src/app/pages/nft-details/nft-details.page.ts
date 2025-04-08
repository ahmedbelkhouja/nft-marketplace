import { Component, OnInit } from '@angular/core';
import { CommonSectionComponent } from '../../components/ui/common-section/common-section.component';
import { ActivatedRoute } from '@angular/router';
import { NFT__DATA } from 'src/assets/data/data';
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BidModalComponent } from 'src/app/components/ui/modal/modal.component';
import { HistoryPage } from '../history/history.page';

interface NFTnft {
  id: string;
  title: string;
  desc: string;
  imgUrl: string;
  creator: string;
  creatorImg: string;
  currentBid: number;
}

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.page.html',
  styleUrls: ['./nft-details.page.scss'],
  imports: [CommonSectionComponent, IonicModule, RouterModule, HistoryPage],
})
export class NftDetailsPage implements OnInit {
  nft: any;

  constructor(
    private route: ActivatedRoute,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.nft = NFT__DATA.find((nft) => nft.id === id);
  }
  async openBidModal() {
    const modal = await this.modalController.create({
      component: BidModalComponent,
      componentProps: {
        nft: this.nft,
      },
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
  }
}
