import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MetamaskService } from 'src/app/core/services/meta-mask.service';
import { CommonSectionComponent } from '../../../../shared/components/ui/common-section/common-section.component';
import { AuthService } from 'src/app/core/services/auth.service';
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
  constructor(private metamaskService: MetamaskService,private authService:AuthService) {}
  async connectWallet(wallet: WalletData) {
    const address = await this.metamaskService.connectWallet();
    if (address) {
      this.authService.addWallet(address).subscribe({
        next: (res) => {
          console.log('Wallet connected successfully:', res);
        },
        error: (err) => {
          console.error('Error connecting wallet:', err);
        },
      });

      console.log('Connected to wallet:', wallet.title, 'Address:', address);
    } else {
      console.error('Failed to connect to wallet:', wallet.title);
    }
}
}
