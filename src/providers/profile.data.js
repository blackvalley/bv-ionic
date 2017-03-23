var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { FirebaseConfigService } from '../core/service/service';
import firebase from 'firebase';
var ProfileData = (function () {
    function ProfileData(fire) {
        this.fire = fire;
        this.currentUser = this.fire.getAuth().currentUser;
        this.userProfile = this.fire.getDatabase().ref('/users');
    }
    ProfileData.prototype.getUserProfile = function () {
        return this.userProfile.child(this.currentUser.uid);
    };
    ProfileData.prototype.updateName = function (firstName, lastName) {
        return this.userProfile.child(this.currentUser.uid).update({
            firstName: firstName,
            lastName: lastName,
        });
    };
    ProfileData.prototype.updateDOB = function (birthDate) {
        return this.userProfile.child(this.currentUser.uid).update({
            birthDate: birthDate,
        });
    };
    ProfileData.prototype.updateInfo = function (college, location, employment) {
        return this.userProfile.child(this.currentUser.uid).update({
            college: college,
            location: location,
            employment: employment,
        });
    };
    ProfileData.prototype.updateEmail = function (newEmail, password) {
        var _this = this;
        var credential = firebase.auth.EmailAuthProvider
            .credential(this.currentUser.email, password);
        return this.currentUser.reauthenticate(credential).then(function (user) {
            _this.currentUser.updateEmail(newEmail).then(function (user) {
                _this.userProfile.child(_this.currentUser.uid)
                    .update({ email: newEmail });
            });
        });
    };
    ProfileData.prototype.updatePassword = function (newPassword, oldPassword) {
        var _this = this;
        var credential = firebase.auth.EmailAuthProvider
            .credential(this.currentUser.email, oldPassword);
        return this.currentUser.reauthenticate(credential).then(function (user) {
            _this.currentUser.updatePassword(newPassword).then(function (user) {
                console.log("Password Changed");
            }, function (error) {
                console.log(error);
            });
        });
    };
    return ProfileData;
}());
ProfileData = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [FirebaseConfigService])
], ProfileData);
export { ProfileData };
//# sourceMappingURL=profile.data.js.map