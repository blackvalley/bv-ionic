import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { ConnectionsPage } from '../connections/connections';


/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  username = '';
  email = '';

  // set user details to current user
  constructor(private navCtrl: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info.name;
    this.email = info.email;
  }

    // log user out
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

  launchConnPage(){
    this.navCtrl.push(ConnectionsPage);
  }


}
