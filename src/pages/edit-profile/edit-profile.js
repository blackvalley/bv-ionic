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
import { NavController, AlertController } from 'ionic-angular';
import { ProfileData } from '../../providers/profile.data';
import { AuthProvider } from '../../providers/auth.provider';
import { LoginPage } from '../login/login';
var EditProfilePage = (function () {
    function EditProfilePage(nav, profile, authData, alertCtrl) {
        var _this = this;
        this.nav = nav;
        this.profile = profile;
        this.authData = authData;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.profileData = profile;
        this.profileData.getUserProfile().on('value', function (data) {
            _this.userProfile = data.val();
            _this.birthDate = _this.userProfile.birthDate;
        });
    }
    EditProfilePage.prototype.logOut = function () {
        var _this = this;
        this.authData.logoutUser().then(function () {
            _this.nav.setRoot(LoginPage);
        });
    };
    EditProfilePage.prototype.updateName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Your first name & last name",
            inputs: [
                {
                    name: 'firstName',
                    placeholder: 'Your first name',
                    value: this.userProfile.firstName
                },
                {
                    name: 'lastName',
                    placeholder: 'Your last name',
                    value: this.userProfile.lastName
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileData.updateName(data.firstName, data.lastName);
                    }
                }
            ]
        });
        alert.present();
    };
    EditProfilePage.prototype.updateDOB = function (birthDate) {
        this.profileData.updateDOB(birthDate);
    };
    EditProfilePage.prototype.updateEmail = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                {
                    name: 'newEmail',
                    placeholder: 'Your new email',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileData.updateEmail(data.newEmail);
                    }
                }
            ]
        });
        alert.present();
    };
    EditProfilePage.prototype.updatePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                {
                    name: 'newPassword',
                    placeholder: 'Your new password',
                    type: 'password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileData.updatePassword(data.newPassword);
                    }
                }
            ]
        });
        alert.present();
    };
    EditProfilePage.prototype.updateInfo = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Update following info:",
            inputs: [
                {
                    name: 'college',
                    placeholder: 'Enter the college you attended:',
                    value: this.userProfile.college
                },
                {
                    name: 'location',
                    placeholder: 'Where are you located?',
                    value: this.userProfile.location
                },
                {
                    name: 'employment',
                    placeholder: 'Where are you working at?',
                    value: this.userProfile.employment
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileData.updateInfo(data.college, data.location, data.employment);
                    }
                }
            ]
        });
        alert.present();
    };
    return EditProfilePage;
}());
EditProfilePage = __decorate([
    Component({
        selector: 'page-edit-profile',
        templateUrl: 'edit-profile.html'
    }),
    __metadata("design:paramtypes", [NavController, ProfileData,
        AuthProvider, AlertController])
], EditProfilePage);
export { EditProfilePage };
//# sourceMappingURL=edit-profile.js.map