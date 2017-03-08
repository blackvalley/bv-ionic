import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth.provider';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { PwresetPage } from '../pwreset/pwreset';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private loginForm

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authProvider: AuthProvider, public formBuilder: FormBuilder,public alertCtrl: AlertController,
     public loadingCtrl: LoadingController) {

       this.loginForm = formBuilder.group({
          email: ['', Validators.compose([Validators.required])],
          password: ['', Validators.compose([Validators.minLength(6),
          Validators.required])]
        });

     }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToSignup(): void {
  this.navCtrl.push(SignupPage);
  }
  goToResetPassword(): void {
  this.navCtrl.push(PwresetPage);
  }

}
