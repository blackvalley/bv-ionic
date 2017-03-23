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
var PwresetPage = (function () {
    function PwresetPage(authData, formBuilder, nav, loadingCtrl, alertCtrl) {
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.required])],
        });
    }
    PwresetPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.authData.resetPassword(this.resetPasswordForm.value.email).then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: "We just sent you a reset link to your email",
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel',
                            handler: function () {
                                _this.nav.pop();
                            }
                        }
                    ]
                });
                alert.present();
            }, function (error) {
                var errorMessage = error.message;
                var errorAlert = _this.alertCtrl.create({
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
    };
    PwresetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PwresetPage');
    };
    return PwresetPage;
}());
PwresetPage = __decorate([
    Component({
        selector: 'page-pwreset',
        templateUrl: 'pwreset.html'
    }),
    __metadata("design:paramtypes", [AuthProvider, FormBuilder,
        NavController, LoadingController,
        AlertController])
], PwresetPage);
export { PwresetPage };
//# sourceMappingURL=pwreset.js.map