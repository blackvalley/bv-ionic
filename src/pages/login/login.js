var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth.provider';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { PwresetPage } from '../pwreset/pwreset';
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authProvider, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = { email: '', password: '' };
        this.loginForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.minLength(6),
                    Validators.required])]
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.showLoading();
        if (!this.loginForm.valid) {
            this.showError("Login form invalid");
            console.log(this.loginForm.value);
        }
        else {
            this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(function (authData) {
                _this.loader.dismiss().then(function () {
                    console.log(_this.authProvider.getCurrentUser);
                    _this.navCtrl.setRoot(TabsPage);
                });
            }, function (error) {
                _this.loader.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
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
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loader.present();
    };
    LoginPage.prototype.showError = function (text) {
        var _this = this;
        setTimeout(function () {
            _this.loader.dismiss();
        });
        var prompt = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        prompt.present();
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(SignupPage);
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(PwresetPage);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams,
        AuthProvider, FormBuilder, AlertController,
        LoadingController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map