import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { TabsPage } from '../tabs/tabs';
import {FirebaseAuth, AuthProviders, AuthMethods} from 'angularfire2';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  loader: any;
  createSuccess = false;
  user = {email: '', password: ''};

  constructor(private navCtrl: NavController, private auth: FirebaseAuth,
              private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}


  public registerUser() {
    this.showLoading()

    this.auth.createUser(this.user).then((authData) => {
      setTimeout(() => {
        this.loader.dismiss();
      });
      let prompt = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'Your new Account was created!',
        buttons: ['OK']
      });
      prompt.present();
      this.navCtrl.setRoot(TabsPage);
    }).catch((error) => {
      this.showError(error);
    });
  }
  showLoading() {
    this.loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loader.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loader.dismiss();
    });

    let prompt = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    prompt.present();

  }

}
