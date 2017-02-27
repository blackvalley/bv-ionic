import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import {FirebaseAuth, AuthProviders, AuthMethods} from 'angularfire2';
import firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loader: any;
  user = {email: '', password: ''};

  constructor(private navCtrl: NavController, private auth: FirebaseAuth, private authServ: AuthService,
              private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  public registerUser() {
    this.navCtrl.setRoot(RegisterPage);
  }

  public login() {
      this.showLoading();

      this.auth.login(this.user, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password

      }).then((authData) => {
        this.loader.dismiss();
        console.log("Login as "+this.user+" successful");
        firebase.auth().currentUser.uid;

        console.log(firebase.auth().currentUser.uid);
        this.authServ.getCurrentUser(firebase.auth().currentUser.uid);
        this.navCtrl.setRoot(TabsPage);
      }).catch((error) => {
        this.showError(error);
        this.loader.dismiss();
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
