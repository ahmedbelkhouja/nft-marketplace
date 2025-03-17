import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NftCardComponent } from '../nft-card/nft-card.component';
import { CommonSectionComponent } from '../common-section/common-section.component';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NftCardComponent,
    CommonSectionComponent
  ]
})
export class CreatePageComponent {
  item = {
    id: "01",
    title: "Guard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    imgUrl: "assets/images/img-01.jpg",
    creator: "Trista Francis",
    creatorImg: "assets/images/ava-01.png",
    currentBid: 7.89,
  };

  // Form data
  formData = {
    price: '',
    minBid: '',
    startDate: '',
    expDate: '',
    title: '',
    description: ''
  };
}