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
import { FirebaseConfigService } from '../core/service/service';
import { Observable } from 'rxjs/Observable';
var UserProvider = (function () {
    function UserProvider(fire) {
        this.fire = fire;
        this.userdb = this.fire.getDatabase().ref('/students');
    }
    UserProvider.prototype.getAddedUsers = function () {
        var _this = this;
        return Observable.create(function (obs) {
            _this.userdb.on('child_added', function (user) {
                obs.next(user.val());
            }, function (err) {
            });
        });
    };
    UserProvider.prototype.getUsers = function () {
        return this.userdb;
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [FirebaseConfigService])
], UserProvider);
export { UserProvider };
//# sourceMappingURL=user.provider.js.map