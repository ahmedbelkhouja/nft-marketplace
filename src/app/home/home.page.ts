import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { FormsModule } from '@angular/forms';
import { ethers } from 'ethers';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule], // ✅ Add IonicModule here
})
export class HomePage {
  walletConnected = false;
  events = [
    { name: 'Blockchain Conference', date: '2025-04-15', ticketsLeft: 20 },
    { name: 'Web3 Meetup', date: '2025-05-10', ticketsLeft: 10 },
  ];

  async connectWallet() {
    if ((window as any).ethereum) {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      await provider.send('eth_requestAccounts', []);
      this.walletConnected = true;
    } else {
      alert('Please install MetaMask!');
    }
  }

  buyTicket(event: any) {
    console.log('Buying ticket for', event.name);
    // Implement smart contract interaction here
  }
}
