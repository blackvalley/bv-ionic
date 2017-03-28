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
import { EditProfilePage } from '../edit-profile/edit-profile';
var ProfilePage = (function () {
    function ProfilePage(nav, profile, authData, alertCtrl) {
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
    ProfilePage.prototype.editProfile = function () {
        this.nav.push(EditProfilePage);
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        this.authData.logoutUser().then(function () {
            _this.nav.setRoot(LoginPage);
        });
    };
    ProfilePage.prototype.updateName = function () {
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
    ProfilePage.prototype.updateDOB = function (birthDate) {
        this.profileData.updateDOB(birthDate);
    };
    ProfilePage.prototype.updateEmail = function () {
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
    ProfilePage.prototype.updatePassword = function () {
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
    ProfilePage.prototype.updateInfo = function () {
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
    return ProfilePage;
}());
ProfilePage = __decorate([
    Component({
        selector: 'page-profile',
        templateUrl: 'profile.html'
    }),
    __metadata("design:paramtypes", [NavController, ProfileData,
        AuthProvider, AlertController])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.js.map