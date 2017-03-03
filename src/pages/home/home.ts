import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ArticlePage } from '../article/article';
import { CommentsPage } from '../comments/comments';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  article(){
    this.navCtrl.push(ArticlePage);
  }

  comments(){
    let commentsModal = this.modalCtrl.create(CommentsPage);
    commentsModal.present();
  }

}
