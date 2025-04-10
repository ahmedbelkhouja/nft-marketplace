import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonSectionComponent } from 'src/app/shared/components/ui/common-section/common-section.component';
import {PreviewCardComponent} from 'src/app/shared/components/ui/preview-card/preview-card.component';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  standalone: true,
  imports: [IonContent,  CommonModule, FormsModule , CommonSectionComponent, PreviewCardComponent],
})
export class CreatePage implements OnInit {
  // Static preview data (unchanged)
  previewData = {
    id: '01',
    title: 'Guard',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imgUrl: 'assets/images/Image-not-found.png', // Default image
    creator: 'Trista Francis',
    creatorImg: 'assets/images/ava-01.png',
    currentBid: 7.89,
  };

  // Reactive form data (user input)
  formData = {
    price: '',
    minBid: '',
    startDate: '',
    expDate: '',
    title: '',
    description: '',
    imgUrl: '',
  };

  // Computed property to merge previewData with formData dynamically
  get item() {
    return {
      ...this.previewData, // Keep default data
      title: this.formData.title || this.previewData.title, // Use formData if available
      desc: this.formData.description || this.previewData.desc,
      imgUrl: this.formData.imgUrl || this.previewData.imgUrl, // Default image if none uploaded
      currentBid: this.formData.price || this.previewData.currentBid, // Use price if entered
    };
  }

  ngOnInit() {
    // Initialize the formData imgUrl with the default image URL
    this.formData.imgUrl = this.previewData.imgUrl;
  }

  // Method to update the item image URL reactively
  updateImageUrl(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.formData.imgUrl = e.target.result;
        this.previewData.imgUrl = this.formData.imgUrl;
      };
      reader.readAsDataURL(file);
    }
  }
}


