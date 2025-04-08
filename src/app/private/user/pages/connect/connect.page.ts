import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CommonSectionComponent } from '../../../../shared/components/ui/common-section/common-section.component';

interface WalletData {
  title: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule,CommonSectionComponent],
})

export class ConnectPage {
  walletdata: WalletData[] = [
    {
      title: 'Bitcoin',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!',
      icon: 'ri-bit-coin-line',
    },

    {
      title: 'Coinbase',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!',
      icon: 'ri-coin-line',
    },

    {
      title: 'Metamask',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!',
      icon: 'ri-money-cny-circle-line',
    },

    {
      title: 'Authereum',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium accusamus repellat rerum consequatur explicabo? Reiciendis!',
      icon: 'ri-bit-coin-line',
    },
  ];
}
