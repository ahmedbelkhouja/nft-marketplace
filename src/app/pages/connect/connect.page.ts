import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient,HttpClientModule } from "@angular/common/http";

import { CommonSectionComponent } from '../../components/ui/common-section/common-section.component';

interface WalletData {
  title: string;
  desc: string;
  icon: string;
}
declare global {
  interface Window {
    ethereum: any;
  }
}
@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule,CommonSectionComponent,HttpClientModule],
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
  walletAddress: string | null = null;
  constructor(private http: HttpClient) {}
  async connectWallet() {
  if (window.ethereum) {
    try{
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.walletAddress = accounts[0];
      console.log('Connected with address:', this.walletAddress);
      this.http.post('http://localhost:3000/api/connect-wallet', { address: this.walletAddress }).subscribe((response) => {
        console.log('Connected wallet response:', response);
      }
      );
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  }
  else{
      console.error('Please install MetaMask!');
    }


}
}
