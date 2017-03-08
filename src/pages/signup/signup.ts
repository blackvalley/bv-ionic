import {
  NavController,
  LoadingController,
  AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth.provider';
import { TabsPage } from '../tabs/tabs'

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

  private signupForm;
  private loading;


 constructor(public nav: NavController, public authProvider: AuthProvider,
   public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
   public alertCtrl: AlertController) {

   this.signupForm = formBuilder.group({
     email: ['', Validators.compose([Validators.required, Validators.required])],
     password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
   })
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signupUser(){
  if (!this.signupForm.valid){
    console.log(this.signupForm.value);
  } else {
    this.authProvider.signupUser(this.signupForm.value.email, this.signupForm.value.password)
    .then(() => {
      this.loading.dismiss().then( () => {
        this.nav.setRoot(TabsPage);
      });
    }, (error) => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
}

}
