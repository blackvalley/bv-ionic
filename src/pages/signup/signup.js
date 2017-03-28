var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth.provider';
import { TabsPage } from '../tabs/tabs';
var SignupPage = (function () {
    function SignupPage(nav, authProvider, formBuilder, loadingCtrl, alertCtrl) {
        this.nav = nav;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.signupForm = formBuilder.group({
            fname: ['', Validators.compose([Validators.minLength(2), Validators.required])],
            email: ['', Validators.compose([Validators.required, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.authProvider.signupUser(this.signupForm.value.fname, this.signupForm.value.email, this.signupForm.value.password)
                .then(function () {
                _this.loader.dismiss().then(function () {
                    _this.nav.setRoot(TabsPage);
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
            this.loader = this.loadingCtrl.create();
            this.loader.present();
        }
    };
    SignupPage.prototype.showError = function (text) {
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
    SignupPage.prototype.showLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loader.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Component({
        selector: 'page-signup',
        templateUrl: 'signup.html'
    }),
    __metadata("design:paramtypes", [NavController, AuthProvider,
        FormBuilder, LoadingController,
        AlertController])
], SignupPage);
export { SignupPage };
//# sourceMappingURL=signup.js.map