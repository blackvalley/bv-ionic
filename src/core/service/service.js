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
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from "../constant/constant";
var FirebaseConfigService = (function () {
    function FirebaseConfigService() {
        this.configureApp();
        this.configureDatabase();
        this.configureStorage();
        this.configureAuth();
    }
    FirebaseConfigService.prototype.configureApp = function () {
        firebase.initializeApp(FIREBASE_CONFIG);
    };
    FirebaseConfigService.prototype.configureDatabase = function () {
        this.database = firebase.database();
    };
    FirebaseConfigService.prototype.configureStorage = function () {
        this.storage = firebase.storage();
    };
    FirebaseConfigService.prototype.configureAuth = function () {
        this.auth = firebase.auth();
    };
    FirebaseConfigService.prototype.getDatabase = function () {
        return this.database;
    };
    FirebaseConfigService.prototype.getStorage = function () {
        return this.storage;
    };
    FirebaseConfigService.prototype.getAuth = function () {
        return this.auth;
    };
    FirebaseConfigService.prototype.getDatabaseReference = function () {
        return this.userProfile;
    };
    return FirebaseConfigService;
}());
FirebaseConfigService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], FirebaseConfigService);
export { FirebaseConfigService };
//# sourceMappingURL=service.js.map