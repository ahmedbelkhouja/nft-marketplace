import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Import standalone UI components
import { HeroComponent } from 'src/app/public/components/hero/hero.component';
import { LiveAuctionComponent } from 'src/app/shared/components/ui/live-auction/live-auction.component';
import { SellerSectionComponent } from 'src/app/shared/components/ui/seller-section/seller-section.component';
import { TrendingSectionComponent } from 'src/app/shared/components/ui/trending-section/trending-section.component';
import { StepSectionComponent } from 'src/app/public/components/step-section/step-section.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HeroComponent,
    LiveAuctionComponent,
    SellerSectionComponent,
    TrendingSectionComponent,
    StepSectionComponent
  ],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
