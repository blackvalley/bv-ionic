import {
  NavController,
  LoadingController,
  AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth.provider';

/*
  Generated class for the Pwreset page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pwreset',
  templateUrl: 'pwreset.html'
})
export class PwresetPage {

  public resetPasswordForm;


    constructor(public authData: AuthProvider, public formBuilder: FormBuilder,
      public nav: NavController, public loadingCtrl: LoadingController,
      public alertCtrl: AlertController) {

      this.resetPasswordForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.required])],
      })
        }
        //reset password through auth provider
        resetPassword(){
          if (!this.resetPasswordForm.valid){
            console.log(this.resetPasswordForm.value);
          } else {
            this.authData.resetPassword(this.resetPasswordForm.value.email).then((user) => {
              let alert = this.alertCtrl.create({
                message: "We just sent you a reset link to your email",
                buttons: [
                  {
                    text: "Ok",
                    role: 'cancel',
                    handler: () => {
                      this.nav.pop();
                    }
                  }
                ]
              });
              alert.present();

            }, (error) => {
              var errorMessage: string = error.message;
              let errorAlert = this.alertCtrl.create({
                message: errorMessage,
                buttons: [
                  {
                    text: "Ok",
                    role: 'cancel'
                  }
                ]
              });
              errorAlert.present();
            });
          }
        }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PwresetPage');
  }

}
