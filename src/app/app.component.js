var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { FirebaseConfigService } from '../core/service/service';
var MyApp = (function () {
    function MyApp(platform, fire) {
        var _this = this;
        this.rootPage = TabsPage;
        this.zone = new NgZone({});
        var unsubscribe = fire.getAuth().onAuthStateChanged(function (user) {
            _this.zone.run(function () {
                if (!user) {
                    _this.rootPage = LoginPage;
                    unsubscribe();
                }
                else {
                    _this.rootPage = TabsPage;
                    unsubscribe();
                }
            });
        });
        platform.ready().then(function () {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, FirebaseConfigService])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map