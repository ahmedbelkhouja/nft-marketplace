import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-private-navbar',
  templateUrl: './private-navbar.component.html',
  styleUrls: ['./private-navbar.component.scss'],
  standalone: true,
  imports:[IonicModule,RouterModule, CommonModule],
})
export class PrivateNavbarComponent  implements OnInit {
  formData = {
    imgUrl: 'assets/images/Image-not-found.png',
    name: ''
  };
  constructor(private router: Router) { }

  ngOnInit() {
    const userID = localStorage.getItem('userID');
    if (userID) {
      fetch(`http://localhost:3000/api/users/${userID}`)
        .then(response => response.json())
        .then(data => {
          this.formData.imgUrl = data.image
            ? `http://localhost:3000/uploads/profiles/${data.image}`
            : 'assets/images/Image-not-found.png';
          this.formData.name = data.userName || 'User';
          console.log('User data:', data);
        })
        .catch(error => console.error('Error fetching user info:', error));
    }
  }

  logout() {
    localStorage.removeItem('userID');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['public/home']);
  }

}
