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
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { ArticlePage } from '../article/article';
var CommentsPage = (function () {
    function CommentsPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    CommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentsPage');
    };
    CommentsPage.prototype.closeComments = function () {
        this.viewCtrl.dismiss();
    };
    CommentsPage.prototype.article = function () {
        this.navCtrl.push(ArticlePage);
    };
    return CommentsPage;
}());
CommentsPage = __decorate([
    Component({
        selector: 'page-comments',
        templateUrl: 'comments.html'
    }),
    __metadata("design:paramtypes", [NavController, ViewController, NavParams])
], CommentsPage);
export { CommentsPage };
//# sourceMappingURL=comments.js.map