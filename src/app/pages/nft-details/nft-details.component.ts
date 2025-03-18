import { Component, OnInit , Input } from '@angular/core';
import { CommonSectionComponent } from "../../components/ui/common-section/common-section.component";
import { ActivatedRoute } from '@angular/router';
import { NFT__DATA } from 'src/assets/data/data';
import {IonicModule , ModalController} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import { BidModalComponent } from '../../components/ui/modal/modal.component';


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
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.scss'],
  imports: [CommonSectionComponent , IonicModule , RouterModule  ],
})


export class NftDetailsComponent  implements OnInit {
  @Input() item!: NFTItem;
  @Input() nft : any;

  constructor(private route : ActivatedRoute , private modalController: ModalController ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    this.nft = NFT__DATA.find(nft => nft.id === id);
    console.log(this.nft); 
  }




  async openBidModal() {
    const modal = await this.modalController.create({
      component: BidModalComponent,
      componentProps: {
        nft: this.nft
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      console.log('Bid placed:', data);
    }
  }
}
