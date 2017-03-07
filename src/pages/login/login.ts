import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { ResetPasswordPage } from '../reset-password/reset-password';
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
    public authData: AuthService, public formBuilder: FormBuilder,public alertCtrl: AlertController,
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

}
