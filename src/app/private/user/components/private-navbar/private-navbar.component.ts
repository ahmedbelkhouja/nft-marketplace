import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-private-navbar',
  templateUrl: './private-navbar.component.html',
  styleUrls: ['./private-navbar.component.scss'],
  standalone: true,
  imports:[IonicModule,RouterModule],
})
export class PrivateNavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  showcurrentroute(){
    const currentRoute = window.location.pathname;
    console.log("aaa",currentRoute);
    return currentRoute;
  }

}
