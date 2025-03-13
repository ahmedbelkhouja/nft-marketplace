import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WalletComponent } from 'src/app/components/ui/wallet/wallet.component';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, WalletComponent]
})
export class ConnectPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
