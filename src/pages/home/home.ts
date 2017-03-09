import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider'
import { ArticlePage } from '../article/article';
import { CommentsPage } from '../comments/comments';
import { LoginPage } from '../login/login'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    private authData : AuthProvider) {

  }
  article(){
    this.navCtrl.push(ArticlePage);
  }
  logOut(){
  this.authData.logoutUser().then(() => {
    this.navCtrl.setRoot(LoginPage);
  });
}
  comments(){
    let commentsModal = this.modalCtrl.create(CommentsPage);
    commentsModal.present();
  }

}
