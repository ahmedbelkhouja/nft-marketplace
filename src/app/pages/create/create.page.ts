import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateItemComponent } from 'src/app/components/ui/create-page/create-page.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, CreateItemComponent]
})
export class CreatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
