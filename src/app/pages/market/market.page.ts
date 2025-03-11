import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,RouterModule]
})
export class MarketPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
