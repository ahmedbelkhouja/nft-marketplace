import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NftCardComponent } from '../nft-card/nft-card.component';
import{CommonSectionComponent} from '../common-section/common-section.component';


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
  imports: [CommonModule, FormsModule, NftCardComponent,CommonSectionComponent]
})
export class CreateItemComponent {
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