import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth.provider';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs'
import { PwresetPage } from '../pwreset/pwreset';
/*
  Generated class for the Login page.

  This page was developed by Paul Hammond from multiple sources of research
  to continually maxmize the app's security.
  03:08:2017
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private loader
  private loginForm
   user = {email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authProvider: AuthProvider, public formBuilder: FormBuilder,public alertCtrl: AlertController,
     public loadingCtrl: LoadingController) {
       //We user formBuilders to build validate data from the users
       this.loginForm = formBuilder.group({
          email: ['', Validators.compose([Validators.required])],
          password: ['', Validators.compose([Validators.minLength(6),
          Validators.required])]
        });

     }

     //login User
     loginUser(): void {
       this.showLoading()
       if (!this.loginForm.valid){
         this.showError("Login form invalid");
         console.log(this.loginForm.value);//error
       } else {//login the user using our firebase auth provider
         this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password).then( authData => {
           this.loader.dismiss().then( () => {
             console.log(this.authProvider.getCurrentUser)
             this.navCtrl.setRoot(TabsPage);
           });
         }, error => {//display message if error
           this.loader.dismiss().then( () => {
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

       }
     }

    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }

    showLoading() {//this will show a loading symbol while the app is getting data
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
    goToSignup(): void {
    this.navCtrl.push(SignupPage);
    }
    goToResetPassword(): void {
    this.navCtrl.push(PwresetPage);
    }

}
