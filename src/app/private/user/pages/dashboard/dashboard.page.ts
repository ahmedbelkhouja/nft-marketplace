import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import { NftCardComponent } from 'src/app/shared/components/ui/nft-card/nft-card.component';
import { CommonModule } from '@angular/common';
import { LiveAuctionComponent } from 'src/app/shared/components/ui/live-auction/live-auction.component';
import { SellerSectionComponent } from 'src/app/shared/components/ui/seller-section/seller-section.component';
import { TrendingSectionComponent } from 'src/app/shared/components/ui/trending-section/trending-section.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [ IonicModule, NftCardComponent, CommonModule,LiveAuctionComponent, SellerSectionComponent, TrendingSectionComponent ],
})
export class DashboardPage implements OnInit {
  nfts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const id= localStorage.getItem('userID');
    if (!id) {
      console.error('User ID not found in local storage');
      return;
    }
    this.http.get<any[]>(`http://localhost:3000/api/nft/nfts/user/${id}`)
      .subscribe({
        next: (data) => this.nfts = data ?? [],
        complete: () => console.log('NFTs fetched successfully', this.nfts),
        error: (err) => {
          console.error('Failed to fetch NFTs', err);
          this.nfts = [];
        }
      });
  }
}
