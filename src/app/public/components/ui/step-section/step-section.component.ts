import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StepData {
  title: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'app-step-section',
  templateUrl: './step-section.component.html',
  styleUrls: ['./step-section.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class StepSectionComponent {
  stepData: StepData[] = [
    {
      title: 'Setup your wallet',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum',
      icon: 'ri-wallet-line',
    },
    {
      title: 'Create your collection',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum',
      icon: 'ri-layout-masonry-line',
    },
    {
      title: 'Add your NFTs',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum',
      icon: 'ri-image-line',
    },
    {
      title: 'List them for sale',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum',
      icon: 'ri-list-check',
    },
  ];
}
