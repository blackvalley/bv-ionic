
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { ArticlePage } from '../article/article';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';

  // set user details to current user
  constructor(private navCtrl: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info.name;
    this.email = info.email;
  }


  article(){
    this.navCtrl.push(ArticlePage);
  }

}
