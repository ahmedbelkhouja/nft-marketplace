import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss'],
})
export class PreviewCardComponent  {
  @Input() item: any;

}
