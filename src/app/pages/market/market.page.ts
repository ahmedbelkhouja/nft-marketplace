import { Component, input, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonSectionComponent } from 'src/app/components/ui/common-section/common-section.component';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,RouterModule ,  CommonSectionComponent]
})
export class MarketPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
