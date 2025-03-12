import { Component,OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeroComponent } from 'src/app/components/ui/hero/hero.component';
import { LiveAuctionComponent } from 'src/app/components/ui/live-auction/live-auction.component';
import { SellerSectionComponent } from 'src/app/components/ui/seller-section/seller-section.component';
import { TrendingSectionComponent } from 'src/app/components/ui/trending-section/trending-section.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule,HeroComponent,LiveAuctionComponent,SellerSectionComponent,TrendingSectionComponent], // ✅ Add IonicModule here
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}