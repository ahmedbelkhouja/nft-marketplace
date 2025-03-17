import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  selector: 'app-bid-modal',
  templateUrl: './bid-modal.component.html',
  styleUrls: ['./bid-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class BidModalComponent {
  @Input() nft!: NFTItem;
  serviceFeePercentage: number = 2;
  bidAmount!: number;
  quantity: number = 1;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log('NFT data:', this.nft); // Debug log
    if (this.nft) {
      this.bidAmount = this.nft.currentBid;
    }
  }

  get minBid(): number {
    return this.nft.currentBid;
  }

  get total(): number {
    const subtotal = (this.bidAmount || 0) * this.quantity;
    const serviceFee = (subtotal * this.serviceFeePercentage) / 100;
    return subtotal + serviceFee;
  }
  get serviceFee(): number {
    const subtotal = (this.bidAmount || 0) * this.quantity;
    return (subtotal * this.serviceFeePercentage) / 100;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  placeBid() {
    if (this.bidAmount >= this.minBid) {
      this.modalCtrl.dismiss({
        bidAmount: this.bidAmount,
        quantity: this.quantity,
        total: this.total
      });
    } else {
      // Consider using Ionic Alert Controller here
      console.error(`Bid must be at least ${this.minBid} ETH`);
    }
  }
}