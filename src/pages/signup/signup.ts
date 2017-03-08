import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth.provider';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  private signupForm

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authProvider: AuthProvider, public formBuilder: FormBuilder,public alertCtrl: AlertController,
     public loadingCtrl: LoadingController) {

    this.signupForm = formBuilder.group({
      fname: ['', Validators.compose([Validators.required])],
      lname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6),
       Validators.required])]
     });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
