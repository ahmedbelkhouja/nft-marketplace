import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreviewCardComponent } from '../preview-card/preview-card.component';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, PreviewCardComponent],
})
export class CreateItemComponent implements OnInit {
  // Static preview data (unchanged)
  previewData = {
    id: '01',
    title: 'Guard',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    imgUrl: 'assets/images/default-img.png', // Default image
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
