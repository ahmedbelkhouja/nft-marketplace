import { Component, OnInit } from '@angular/core';
import { CommonSectionComponent } from "../../components/ui/common-section/common-section.component";
import { ActivatedRoute } from '@angular/router';
import { NFT__DATA } from 'src/assets/data/data';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.scss'],
  imports: [CommonSectionComponent , IonicModule , RouterModule],
})
export class NftDetailsComponent  implements OnInit {
  nft : any;
  
  constructor(private route : ActivatedRoute  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    this.nft = NFT__DATA.find(nft => nft.id === id);
    console.log(this.nft); 
  }

}
