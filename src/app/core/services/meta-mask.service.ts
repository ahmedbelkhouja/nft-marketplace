import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MetamaskService {
  private ethereum = (window as any).ethereum;

  async connectWallet(): Promise<string | null> {
    if (!this.ethereum) {
      alert('MetaMask is not installed!');
      return null;
    }
    try {
      const accounts = await this.ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      console.log('Connected wallet:', address);
      return address;
    } catch (err) {
      console.error('User denied wallet connection:', err);
      return null;
    }
  }
}
