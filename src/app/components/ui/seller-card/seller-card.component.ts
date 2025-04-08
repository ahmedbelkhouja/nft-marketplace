import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seller-card',
  templateUrl: './seller-card.component.html',
  styleUrls: ['./seller-card.component.scss'],
})
export class SellerCardComponent {

@Input() item: any;
}
