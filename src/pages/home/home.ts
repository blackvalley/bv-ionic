
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
  }


  article(){
    this.navCtrl.push(ArticlePage);
  }

}
