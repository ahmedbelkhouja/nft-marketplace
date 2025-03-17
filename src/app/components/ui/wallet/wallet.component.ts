import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSectionComponent } from '../common-section/common-section.component';

interface WalletData {
  title: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  standalone: true,
  imports: [CommonModule, CommonSectionComponent]
})
export class WalletComponent   {

  walletdata: WalletData[] = [
    {
      title: "Bitcoin",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!",
      icon: "ri-bit-coin-line",
    },

    {
      title: "Coinbase",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!",
      icon: "ri-coin-line",
    },

    {
      title: "Metamask",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!",
      icon: "ri-money-cny-circle-line",
    },

    {
      title: "Authereum",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!",
      icon: "ri-bit-coin-line",
    },
  ];
}
