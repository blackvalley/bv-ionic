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
var AuthProvider = (function () {
    function AuthProvider(fire) {
        this.fire = fire;
        this.fireAuth = this.fire.getAuth();
        this.userdb = this.fire.getDatabase().ref('/users');
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.getCurrentUser = function () {
        return this.fireAuth.currentUser.uid;
    };
    AuthProvider.prototype.signupUser = function (fname, email, password) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            _this.userdb.child(newUser.uid).set({ email: email, fname: fname });
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.fireAuth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        return this.fireAuth.signOut();
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [FirebaseConfigService])
], AuthProvider);
export { AuthProvider };
//# sourceMappingURL=auth.provider.js.map