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
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { ArticlePage } from '../article/article';
import { CommentsPage } from '../comments/comments';
var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, alert) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    HomePage.prototype.article = function () {
        this.navCtrl.push(ArticlePage);
    };
    HomePage.prototype.comments = function () {
        var commentsModal = this.modalCtrl.create(CommentsPage);
        commentsModal.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, ModalController,
        AlertController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map