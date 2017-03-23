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
import { NavController, NavParams, ViewController } from 'ionic-angular';
var CreateOppPage = (function () {
    function CreateOppPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    CreateOppPage.prototype.closeOpp = function () {
        this.viewCtrl.dismiss();
    };
    CreateOppPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateEventPage');
    };
    return CreateOppPage;
}());
CreateOppPage = __decorate([
    Component({
        selector: 'page-create-opp',
        templateUrl: 'create-opp.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ViewController])
], CreateOppPage);
export { CreateOppPage };
//# sourceMappingURL=create-opp.js.map