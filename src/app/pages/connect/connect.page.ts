import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WalletComponent } from 'src/app/components/ui/wallet/wallet.component';
import { CommonSectionComponent } from 'src/app/components/ui/common-section/common-section.component';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, WalletComponent, CommonSectionComponent],
})
export class ConnectPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
